// Every time the chart changes (or on the initial load), this function is called
// The three params are gender, firm size, and which of
// the two dropdowns/corresponding bars you've selected (1 or 2, top or bottom)

// On the initial load, this function is called 2x: once for each dropdown pair
// After that, it's called once every time you change any dropdown
function loadData(gender, firmSize, barRef) {
  Promise.all([d3.json("PCS_bengraphic.json"), gender, firmSize])
    .then(function(data) {
      //after this line, "data" is the array param in the promise

      //nodelist of every bar
      var barDivs = document.querySelectorAll('.pct-bar')

      //bar width in pixels
      var barWidth = document.getElementById('bars').offsetWidth

      // set width of whole bars
      for (let i = 0; i < barDivs.length; i++) {
        barDivs[i].style.width = `${barWidth}px`
        barDivs[i].style.offsetWidth = `${barWidth}px`
      }

      var wBar = document.getElementById(`satisfaction-bar-${barRef}`).offsetWidth;

      // wholedata[firmSize param + gender param]
      var selectedData = data[0][data[2] + data[1]]
      var fullData = data[0]["allAll"]

      // Category IDs, each one corresponds to a survey question
      var catIDs = Object.keys(selectedData).slice(0, 7)

      // define the tooltip div, invisible by default (until user hovers)
      var tooltip = d3.select("#graphic-container").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

      // Loop through all of the bars, question by question
      for (let i = 0; i < catIDs.length; i++) {
        // percentiles, which will be imporant later for coloring the bars
        var breakdownKeys = Object.keys(selectedData[catIDs[i]]['breakdowns'])

        // data for each whole bar, will be an array filled with objects
        // each of which corresponds to a bar segment and contains its data
        // starts out empty (gotta fill up the tank before you can drive)
        var barObjs = []

        // Averages and respondent stats for a whole question/bar
        var avgs = selectedData[catIDs[i]].averages
        var respondNotNA = avgs['respond_notna']
        var respondNA = avgs['respond_na']
        var breakdowns = selectedData[catIDs[i]]['breakdowns']

        // Loop through each percentile,
        // and pull the necessary data to render each bar segment
        for (let j = 0; j < breakdownKeys.length; j++) {
          var pieceWidth = breakdowns[breakdownKeys[j]].value
          var percent = breakdowns[breakdownKeys[j]].percent
          var range = breakdowns[breakdownKeys[j]].range

          // Each question has a different color scale,
          // because they each have different numbers of buckets.
          // This selects the correct one.
          var colorScale = colorScaleFinder(breakdownKeys.length)

          //Add each bar seg's data to the array
          barObjs.push({
            color: colorScale(parseInt(breakdownKeys[j])),
            textColor: textColorFinder(breakdownKeys[j], catIDs[i]),
            className: `${catIDs[i]}-${barRef}`,
            id: `${catIDs[i]}-${breakdownKeys[j]}-${barRef}`,
            percent: percent,
            value: pieceWidth,
            range: range,
            respondNA: respondNA,
            respondNotNA: respondNotNA
          })
        }

        // This part renders the averages for each question on the DOM,
        // and the compareAvgs functions at the end color them red, green or black

        // Stay At Firm and Satisfaction are qualitative measures
        // and therefore do not have means or medians.
        // The if statement here keeps the whole thing from breaking
        // when it hits those questions.
        if (!!(selectedData[catIDs[i]].averages.mean)) {
          var averages = selectedData[catIDs[i]].averages

          // Find the right span...
          var meanSpan = document.querySelector(`#${catIDs[i]}-avg-${barRef} .mean-val`)
          // and puts the correct mean on it.
          meanSpan.innerText = decimalizer(catIDs[i], averages.mean)

          var meanNodes = [document.querySelector(`#${catIDs[i]}-avg-1 .mean-val`), document.querySelector(`#${catIDs[i]}-avg-2 .mean-val`)]
          // array with both means for later comparison
          var means = meanNodes.map((d) => {
            return parseFloat(d.innerText.replaceAll(',', ''))
          })

          // Find the right span...
          var medianSpan = document.querySelector(`#${catIDs[i]}-avg-${barRef} .median-val`)
          // and puts the correct median on it.
          medianSpan.innerText = decimalizer(catIDs[i], averages.median)

          var medianNodes = [document.querySelector(`#${catIDs[i]}-avg-1 .median-val`), document.querySelector(`#${catIDs[i]}-avg-2 .median-val`)]
          // array with both medians for later comparison
          var medians = medianNodes.map((d) => {
            return parseFloat(d.innerText.replaceAll(',', ''))
          })

          compareAvgs(meanNodes, means)
          compareAvgs(medianNodes, medians)
        }

        // Renders each bar seg, based on the data in the barObjs array
        // Defines color, width, innerHTML, mouse hover actions (for tooltips), etc.
        d3.select(`#${catIDs[i]}-bar-${barRef}`)
          .selectAll("div")
          .data(barObjs)
          .enter()
          .append('div')
          .html((d) => {
            return `<span class="label-container"><span class="helper"></span><span class="bar-seg-label"><strong><span class="bar-pct">${numeral(d.percent).format('0[.]0')}</span>%</strong><br/><p class='range-label'>${d.range}</p></span></span>`
          })
          .attr('class', (d) => {
            // Black text for light colored bars,
            // white text by default for the rest.
            // Actual coloring done with CSS, based on .black-label
            if (d.textColor === 'black') {
              return `bar bar-${barRef} black-label ${d.className}`
            } else {
              return `bar bar-${barRef} ${d.className}`
            }
          })
          .attr('id', (d) => {
            return d.id
          })
          // .style('text-align', 'center')
          .style('background-color', (d) => {
            return d.color
          })
          .on('mouseover', function(d) {
            // If you don't do the next three lines with offsetParent
            // the tooltip will be hundreds of pixels away from where it needs
            // to be. This is only a problem on the Law360 website. It makes
            // no difference if you're running on localhost on your own computer.
            var offsetParent = document.getElementById('graphic-container').offsetParent
            var offX = offsetParent.offsetLeft
            var offY = offsetParent.offsetTop

            // Sets and renders tooltip text, makes it visible, positions it
            tooltip.html(tooltipper(d))
              .style("opacity", 1)
              .style("left", tooltipLeft(offX))
              .style("top", tooltipTop(offY));
          })
          .on('mousemove', function() {
            // Repositions tooltip as mouse moves.
            // Tooltips work without 'mousemove', but motion is much jerkier
            var offsetParent = document.getElementById('graphic-container').offsetParent
            var offX = offsetParent.offsetLeft
            var offY = offsetParent.offsetTop
            tooltip.style("left", tooltipLeft(offX))
              .style("top", tooltipTop(offY));
          })
          .on('mouseout', function(d) {
            // Disappears tooltip
            tooltip.style("opacity", 0)
          })
          // Makes the bars change size smoothly, over 500 milliseconds
          .transition().duration(500)
          .style('width', (d) => {
            return `${numeral(d.percent).format('0[.]0')}%`
          });

        // Renders filter parameters to labels above the bar
        document.querySelector(`#${catIDs[i]}-demo-${barRef} .gender`).innerText = genderLabel(gender)
        document.querySelector(`#${catIDs[i]}-demo-${barRef} .firm-size`).innerText = sizeLabel(firmSize)
      }

      d3.selectAll('select')
        .on("change", function() {
          // Finds the specific dropdown you changed
          var target = event.target.parentElement.children

          // Grabs the gender and firm size from that pair
          var genderSelect = target[2].selectedOptions[0].innerText
          var sizeSelect = target[5].selectedOptions[0].value.split('-').map((d, i) => {
            return i == 0 ? d : d.slice(0, 1).toUpperCase() + d.slice(1, d.length)
          }).join('')

          // Pulls the relevant subset of the data
          var selectedData = data[0][sizeSelect + genderSelect]

          // Grabs percentile keys
          var catIDs = Object.keys(selectedData).slice(0, 7)

          // Determines whether it's the top or bottom bar
          var barRef = event.target.className[2]

          // Loops through each question
          for (let i = 0; i < catIDs.length; i++) {
            document.querySelector(`#${catIDs[i]}-demo-${barRef} .gender`).innerText = genderLabel(genderSelect)
            document.querySelector(`#${catIDs[i]}-demo-${barRef} .firm-size`).innerText = sizeLabel(sizeSelect)

            var breakdownKeys = Object.keys(selectedData[catIDs[i]]['breakdowns'])
            var barObjs = []

            var avgs = selectedData[catIDs[i]].averages
            var respondNotNA = avgs['respond_notna']
            var respondNA = avgs['respond_na']

            for (let j = 0; j < breakdownKeys.length; j++) {
              var pieceWidth = selectedData[catIDs[i]]['breakdowns'][breakdownKeys[j]].value
              var percent = selectedData[catIDs[i]]['breakdowns'][breakdownKeys[j]].percent
              var range = selectedData[catIDs[i]]['breakdowns'][breakdownKeys[j]].range
              var colorScale = colorScaleFinder(breakdownKeys.length, catIDs[i])
              barObjs.push({
                color: colorScale(parseInt(breakdownKeys[j])),
                className: `${catIDs[i]}-${barRef}`,
                id: `${catIDs[i]}-${breakdownKeys[j]}-${barRef}`,
                percent: percent,
                value: pieceWidth,
                range: range,
                respondNA: respondNA,
                respondNotNA: respondNotNA
              })
            }

            // Change averages, but only for questions which have them
            // (not Stay at Firm or Satisfaction)
            if (!!(selectedData[catIDs[i]].averages.mean)) {
              var averages = selectedData[catIDs[i]].averages
              var averagesArray = [averages.mean, averages.median]

              d3.selectAll(`#${catIDs[i]}-avg-${barRef} .avg-val`)
                .data(averagesArray)
                .transition()
                .duration(500)
                // Changes value by counting up/down
                // Loops through this, once for the mean, then for the median
                .tween(".avg-val", function(a) {
                  var that = d3.select(this);

                  var avgType = this.className.split('-')[0]
                  var ancestorID = this.parentNode.parentNode.parentNode.id
                  var barReference = parseInt(ancestorID[ancestorID.length - 1])

                  var nodes = [document.querySelector(`#${catIDs[i]}-avg-1 .${avgType}-val`), document.querySelector(`#${catIDs[i]}-avg-2 .${avgType}-val`)]

                  var oldVal = parseFloat(that.text().replaceAll(',', ''))
                  var newVal = parseFloat(a.toFixed(2))

                  var vals = barReference === 1 ? [newVal, parseFloat(nodes[1].innerText.replaceAll(',', ''))] : [parseFloat(nodes[0].innerText.replaceAll(',', '')), newVal]
                  compareAvgs(nodes, vals)

                  // Counts up/down to new value
                  var iNum = d3.interpolateNumber(oldVal, newVal);
                  // Different decimal places for $ questions
                  if ((catIDs[i] === 'annual-comp' || catIDs[i] === 'hourly-rate')) {
                    var format = d3.format(",.0f");
                  } else {
                    var format = d3.format(",.2~f");
                  }
                  return function(t) {
                    that.text(format(iNum(t)));
                  };
                })
            }

            // Bar widths expand/contract smoothly
            d3.selectAll(`.${catIDs[i]}-${barRef}`)
              .data(barObjs)
              .transition().duration(500)
              .style('width', (d) => {
                return `${numeral(d.percent).format('0[.]0')}%`
              });

            // Numbers on bars change by counting up/down
            d3.selectAll(`.${catIDs[i]}-${barRef} .bar-pct`)
              .data(barObjs)
              .transition()
              .duration(500)
              .tween(".bar-pct", function(a) {
                var that = d3.select(this);
                var oldVal = parseFloat(that.text().replaceAll(',', ''))
                var newVal = a.percent
                var iNum = d3.interpolateNumber(oldVal, newVal);
                var format = d3.format(",.1~f");
                return function(t) {
                  that.text(format(iNum(t)));
                };
              });
          }
        })
    })
}