import IPython
import pandas as pd
import json


# Determines the size of a firm that an individual partner works at
def firm_size_filter(firm_size, df):
    if firm_size == "small":
        # in the original csv, the column "Bucket"
        # is calculated based on the firm size question Q36.
        return df[df.Bucket == "Under 200"]
    elif firm_size == "medium":
        return df[df.Bucket == "200-999"]
    elif firm_size == "large":
        return df[df.Bucket == "1000 or more"]
    else:
        return df


# Determines an individual partner's gender
def gender_filter(gender, df):
    if gender == "Male":
        return df[df.Q43 == "Male"]
    elif gender == "Female":
        return df[df.Q43 == "Female"]
    else:
        return df


# In the breakdowns parts of the dict, each bucket's key is a numerical value,
# converted to a string, which corresponds to a percentile
# (or a fake percentile for the qualitative questions.)
# These numbers are vital for setting the colors of the bar segments
# once this JSON is fed into D3.
# Since each question has a varying number of buckets,
# this method defines those percentiles.
def key_array(length):
    breakdown_keys = []
    counter = 1

    while counter <= length:
        breakdown_keys.append(str(int((counter / length) * 100)))
        counter += 1

    return breakdown_keys


def interval_stringify(interval, col_name):
    if col_name == 'new2' or col_name == 'Q18':
        dollar = '$'
    else:
        dollar = ''

    if col_name == 'Q32_4':
        percent = '%'
    else:
        percent = ''

    if interval.left <= 0:
        return "Less than " + dollar + "{:,}".format(
            int(interval.right + 1)) + percent
    elif interval.right == 99999999999:
        return dollar + "{:,}".format(
            int(interval.left + 1)) + percent + " or more"
    else:
        return dollar + "{:,}".format(
            int(interval.left + 1)) + percent + "-" + dollar + "{:,}".format(
                int(interval.right)) + percent


# Places individual respondent data points into buckets
# for QUANTITATIVE measures, and tacks on an averages dict
def ptiles(col, buckets):
    raw_dict = (col.value_counts(bins=buckets)).to_dict()
    dict_keys = list(raw_dict.keys())
    dict_keys.sort()
    total_count = len(col[col.notnull()])
    na_count = len(col) - total_count
    bucket_count = len(buckets) - 1
    key_list = key_array(bucket_count)
    breakdowns = {}

    for i in dict_keys:
        value = raw_dict[i]
        index = dict_keys.index(i)
        breakdowns[key_list[index]] = {
            "value": value,
            "percent": round(((value / total_count) * 100), 1),
            "range": interval_stringify(i, col.name)
        }

    return {
        "breakdowns": breakdowns,
        "averages": {
            "median": float(col.median()),
            "mean": float(col.mean()),
            "max": float(col.max()),
            "min": float(col.min()),
            "respond_notna": total_count,
            "respond_na": na_count
        }
    }


# Places individual respondent data points into buckets
# for job satisfaction question (5 buckets), and tacks on an averages dict
def satisfaction_pctify(df_mod):
    value_dict = df_mod.Q28.value_counts().to_dict()
    raw_dict = (df_mod.Q28.value_counts(normalize=True) * 100).to_dict()
    total_count = len(df_mod.Q28[df_mod.Q28.notnull()])
    na_count = len(df_mod.Q28) - total_count
    return {
        "breakdowns": {
            "0": {
                "value": value_dict['Very dissatisfied'],
                "percent": round(raw_dict['Very dissatisfied'], 1),
                "range": 'Very dissatisfied'
            },
            "25": {
                "value": value_dict['Somewhat dissatisfied'],
                "percent": round(raw_dict['Somewhat dissatisfied'], 1),
                "range": 'Somewhat dissatisfied'
            },
            "50": {
                "value": value_dict['Neither satisfied or dissatisfied'],
                "percent": round(raw_dict['Neither satisfied or dissatisfied'],
                                 1),
                "range": 'Neither satisfied nor dissatisfied'
            },
            "75": {
                "value": value_dict['Somewhat satisfied'],
                "percent": round(raw_dict['Somewhat satisfied'], 1),
                "range": 'Somewhat satisfied'
            },
            "100": {
                "value": value_dict['Very satisfied'],
                "percent": round(raw_dict['Very satisfied'], 1),
                "range": 'Very satisfied'
            }
        },
        "averages": {
            "respond_notna": total_count,
            "respond_na": na_count,
        }
    }


# Places individual respondent data points into buckets
# for stay at firm for whole careet question (2 buckets, yes/no),
# and tacks on an averages dict
def stay_at_firm_pctify(df_mod):
    value_dict = df_mod.Q35.value_counts().to_dict()
    raw_dict = (df_mod.Q35.value_counts(normalize=True) * 100).to_dict()
    total_count = len(df_mod.Q35[df_mod.Q35.notnull()])
    na_count = len(df_mod.Q35) - total_count
    return {
        "breakdowns": {
            "0": {
                "value": value_dict['No'],
                "percent": round(raw_dict['No'], 1),
                "range": 'No',
            },
            "100": {
                "value": value_dict['Yes'],
                "percent": round(raw_dict['Yes'], 1),
                "range": 'Yes',
            }
        },
        "averages": {
            "respond_notna": total_count,
            "respond_na": na_count,
        }
    }


# This is the runner method that actually processes
# the data and spits out machine readable JSON,
# with help from the methods above
def breakdowns(df, list1, list2):
    # Defines final JSON return object (starts empty)
    full_dict = {}

    # iterates through first filter (firm sizes)
    for i in list1:
        # iterates through first filter (gender)
        for j in list2:
            # modified the raw dataset with both filters for a specific
            # gender/firm size permutation
            df_mod = firm_size_filter(i, df)
            df_mod = gender_filter(j, df_mod)

            # Enters this specific filtered permutation into the final JSON
            # in the JSON, each gender/size permutation can be identified by
            # simply mashing those two strings together
            full_dict[str(i + j)] = {
                "annual-comp":
                # The list here defines the buckets
                # with 99999999999 standing in for infinity

                # new2 is the final total comp column,
                # based on Riley's reverse engineering and analysis of Q23.
                ptiles(df_mod.new2, [0, 299999, 749999, 99999999999]),
                "satisfaction":
                satisfaction_pctify(df_mod),
                "hourly-rate":
                ptiles(df_mod.Q18, [0, 399, 699, 99999999999]),
                "billable-hours":
                ptiles(df_mod.Q19,
                       [0, 999, 1499, 1799, 1999, 2199, 99999999999]),
                "years-before-partner":
                ptiles(df_mod.Q11,
                       [0, 2.9, 5.9, 9.9, 14.9, 19.9, 99999999999]),
                "cap-contribution":
                ptiles(df_mod.Q32_4, [0, 9, 19, 29, 99999999999]),
                "stay-at-firm":
                stay_at_firm_pctify(df_mod),
                "length":
                len(df_mod)
            }

            print(i + j)

    # Spits out the new, finished JSON file
    with open("aggregate-data.json", "w") as outfile:
        json.dump(full_dict, outfile)


# Reads the raw data csv file
df = pd.read_csv("data/Q23-bucketed.csv")

# defines firm size filters
firm_sizes = ["all", "small", "medium", "large"]

# defines gender filters
genders = ["All", "Male", "Female"]

# Let 'er rip!
breakdowns(df, firm_sizes, genders)
