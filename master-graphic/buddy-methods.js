// Defines color scales, sets colors for individual bar segs
// All buckets (JSON object keys) are numbers, defined as percentiles
// Qualitative buckets also have numberical obj keys for this, w/fake ptiles
function colorScaleFinder(dataLength) {
  if (dataLength == 2) {
    return d3.scaleQuantize()
      .domain([0, 101])
      .range(['#D5563A', '#0B2A44']);
  } else if (dataLength == 3) {
    return d3.scaleQuantize()
      .domain([0, 101])
      .range(['#D5563A', '#646F8C', '#0B2A44']);
  } else if (dataLength == 4) {
    return d3.scaleQuantize()
      .domain([0, 101])
      .range(['#D5563A', '#9D6363', '#384D68', '#0B2A44']);
  } else if (dataLength == 5) {
    return d3.scaleQuantize()
      .domain([0, 101])
      .range(['#D5563A', '#9D6363', '#646F8C', '#384D68', '#0B2A44']);
  } else if (dataLength == 6) {
    return d3.scaleQuantize()
      .domain([0, 101])
      .range(['#D5563A', '#AF5E55', '#8A6771', '#465874', '#29415C', '#0B2A44']);
  } else if (dataLength == 7) {
    return d3.scaleQuantize()
      .domain([0, 101])
      .range(['#D5563A', '#AF5E55', '#8A6771', '#646F8C', '#465874', '#29415C', '#0B2A44']);
  }
}

// Changes text color to black for lighter background colors (default white)
function textColorFinder(breakdownKey, catID) {
  if (breakdownKey < 60 && catID != "stay-at-firm") {
    return 'black'
  } else {
    return '#f4f4f4'
  }
}

// When comparing averages within bar pairs:
// Larger number is green
// Smaller number is red
// Equal numbers are black
function compareAvgs(nodesArray, averagesArray) {
  if (averagesArray[0] === averagesArray[1]) {
    nodesArray[0].parentNode.style.color = 'black'
    nodesArray[1].parentNode.style.color = 'black'
  } else if (averagesArray[0] > averagesArray[1]) {
    nodesArray[0].parentNode.style.color = 'green'
    nodesArray[1].parentNode.style.color = '#b01116'
  } else if (averagesArray[0] < averagesArray[1]) {
    nodesArray[0].parentNode.style.color = '#b01116'
    nodesArray[1].parentNode.style.color = 'green'
  }
}

// All caps strings for the relevant filter labels above each bar
function genderLabel(g) {
  if (g === "Male") {
    return "MALE PARTNERS"
  } else if (g === "Female") {
    return "FEMALE PARTNERS"
  } else {
    return "ALL GENDERS"
  }
}

// All caps strings for the relevant filter labels above each bar
function sizeLabel(s) {
  var paArray = Array.from(document.querySelector('select#firm-size-1').options)
  var paNames = paArray.map(d => d.innerText)
  var paOpt = paArray.find(d => d.value.split('-').map((d, i) => {
    return i == 0 ? d : d.slice(0, 1).toUpperCase() + d.slice(1, d.length)
  }).join('') === s)
  var paIndex = paArray.indexOf(paOpt)
  if (paIndex === 0) {
    return "ALL PRACTICE AREAS"
  } else if (paIndex === 24) {
    return "OTHER PRACTICE AREAS"
  } else {
    return paNames[paIndex].toUpperCase()
  }
}

// Integers for dollar amount metrics
// Two decimals max for every other quantitative metric
function decimalizer(category, val) {
  if ((category === 'annual-comp' || category === 'hourly-rate' || category === 'working-attorney-receipts' || category === 'originations') && (parseFloat(val) != parseInt(val))) {
    return numeral(val).format('0,0')
  } else {
    return numeral(val).format('0,0.[00]')
  }
}

// Finesses tooltip language for ranges
function ranger(r) {
  if (r.includes('-')) {
    return `between ${r.replace('-', ' and ')}`
  } else {
    return r.toLowerCase()
  }
}

// Ensures that I don't have to stick "(s)" at the end of any word(s)
function plural(word, number) {
  if (number === 1) {
    return word
  } else {
    return word + "s"
  }
}

// Defines tooltip language for each bar segment
function tooltipper(d) {
  if (d.className.includes('annual-comp')) {
    var firstLine = `<p><strong>${d.value}</strong> out of <strong>${d.respondNotNA}</strong> respondents earned <strong>${ranger(d.range)}</strong>.</p>`
  } else if (d.className.includes('satisfaction')) {
    var firstLine = `<p><strong>${d.value}</strong> out of <strong>${d.respondNotNA}</strong> respondents were <strong>${ranger(d.range)}</strong>.</p>`
  } else if (d.className.includes('hourly-rate')) {
    var firstLine = `<p><strong>${d.value}</strong> out of <strong>${d.respondNotNA}</strong> respondents had an hourly rate <strong>${ranger(d.range)}</strong>.</p>`
  } else if (d.className.includes('billable-hours')) {
    var firstLine = `<p><strong>${d.value}</strong> out of <strong>${d.respondNotNA}</strong> respondents had <strong>${ranger(d.range)}</strong> billable hours.</p>`
  } else if (d.className.includes('years-before-partner')) {
    var firstLine = `<p><strong>${d.value}</strong> out of <strong>${d.respondNotNA}</strong> respondents said associates typically waited <strong>${ranger(d.range)} years</strong> before making partner.</p>`
  } else if (d.className.includes('cap-contribution')) {
    var firstLine = `<p><strong>${d.value}</strong> out of <strong>${d.respondNotNA}</strong> respondents reported capital contributions of <strong>${ranger(d.range)}</strong>.</p>`
  } else if (d.className.includes('stay-at-firm')) {
    var firstLine = `<p><strong>${d.value}</strong> out of <strong>${d.respondNotNA}</strong> respondents ${(d.range === "Yes") ? 'planned' : 'did not plan'} on staying permanently at their current firm</strong>.</p>`
  }

  // Optional second line if there were any N/A responses (blank string if there aren't)
  var secondLine = d.respondNA === 0 ? '' : `<p><strong>${d.respondNA}</strong> ${plural('respondent', d.respondNA)} declined to answer.</p>`
  return firstLine + secondLine
}

// Left position of tooltip
function tooltipLeft(offX) {
  var cw = document.querySelector('.tooltip').clientWidth
  var cx = d3.event.pageX - offX
  var bodyWidth = document.querySelector('body').clientWidth

  if (cw + cx >= bodyWidth) {
    return cx - cw + "px"
  } else {
    return cx + "px"
  }
}

// Top position of tooltip
function tooltipTop(offY) {
  var ch = document.querySelector('.tooltip').clientHeight
  var cy = d3.event.pageY - offY
  var screenY = d3.event.screenY
  var windowHeight = window.innerHeight

  if (ch + screenY >= windowHeight) {
    return cy - ch + "px"
  } else {
    return cy - 28 + "px"
  }
}