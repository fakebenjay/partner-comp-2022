// Defines defaults for every chart
Highcharts.setOptions({
  chart: {
    style: {
      fontFamily: 'Arial, sans-serif'
    }
  },
  colors: [
    "#0B2A44", "#707C9C", "#D7D9D7"
  ]
})

// Every chart's specifics are below, in order
// Highcharts.chart('TKTK-DIV-ID', {do all the stuff})
Highcharts.chart('current-compensation', {
  chart: {
    type: 'column'
  },
  credits: {
    // Removes the highcharts.com label from the bottom right
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  title: {
    // None of these charts have titles
    text: ''
  },
  yAxis: {
    title: {
      enabled: false
    },
    labels: {
      enabled: false
    }
  },
  xAxis: {
    gridLineWidth: 0,
    categories: ['Under $200K', '$200K-$299K', '$300K-$399K', '$400K-$499K', '$500K-$749K', '$750K-$999K', '$1 million or more']
  },
  legend: {
    layout: 'vertical',
    align: 'left',
    verticalAlign: 'top',
    x: 20,
    y: 20,
    floating: true,
    borderWidth: 1,
    backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
    shadow: true,
    symbolHeight: 12,
    symbolWidth: 12,
    symbolRadius: 0
  },
  plotOptions: {
    series: {
      pointPadding: 0,
      dataLabels: {
        enabled: true,
        format: '{y}%'
      }
    }
  },
  series: [{
    name: 'Firms with fewer than 200 attys',
    data: [20, 22, 16, 11, 15, 8, 8]
  }, {
    name: 'Firms with 200-999 attys',
    data: [8, 16, 15, 15, 22, 9, 15]
  }, {
    name: 'Firms with 1,000 or more attys',
    data: [4, 10, 14, 10, 16, 14, 33]
  }]
});

Highcharts.chart('highest-salary', {
  chart: {
    type: 'bar'
  },
  colors: [
    "#707C9C", "#5B1933"
  ],
  credits: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  title: {
    text: ''
  },
  xAxis: {
    categories: ['Firms with fewer than 200 attys', 'Firms with 200-999 attys', 'Firms with 1,000 or more attys']
  },
  yAxis: {
    title: {
      enabled: false
    },
    labels: {
      enabled: false
    },
    gridLineWidth: 0
  },
  legend: {
    reversed: true,
    symbolHeight: 12,
    symbolWidth: 12,
    symbolRadius: 0,
    verticalAlign: 'bottom'
  },
  plotOptions: {
    series: {
      stacking: 'normal',
      dataLabels: {
        enabled: true,
        format: '{y}%'
      }
    }
  },
  series: [{
    name: 'Yes',
    data: [61, 60, 69],
    legendIndex: 1
  }, {
    name: 'No',
    data: [39, 40, 31],
    legendIndex: 0
  }]
});


Highcharts.chart('nondiscretionary-compensation', {
  chart: {
    type: 'column'
  },
  credits: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  title: {
    text: ''
  },
  yAxis: {
    title: {
      enabled: false
    },
    labels: {
      enabled: false
    }
  },
  xAxis: {
    gridLineWidth: 0,
    categories: ['Under $200K', '$200K-$299K', '$300K-$399K', '$400K-$499K', '$500K-$749K', 'Over $750K']
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'top',
    x: -20,
    y: 20,
    floating: true,
    borderWidth: 1,
    backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
    shadow: true,
    symbolHeight: 12,
    symbolWidth: 12,
    symbolRadius: 0
  },
  plotOptions: {
    series: {
      pointPadding: 0,
      dataLabels: {
        enabled: true,
        format: '{y}%'
      }
    }
  },
  series: [{
    name: 'Firms with fewer than 200 attys',
    data: [62, 13, 7, 6, 5, 5]
  }, {
    name: 'Firms with 200-999 attys',
    data: [45, 16, 9, 7, 11, 8]
  }, {
    name: 'Firms with 1,000 or more attys',
    data: [37, 11, 17, 9, 8, 17]
  }]
});


Highcharts.chart('satisfaction-with-total-compensation', {
  chart: {
    type: 'column'
  },
  credits: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  title: {
    text: ''
  },
  yAxis: {
    title: {
      enabled: false
    },
    labels: {
      enabled: false
    }
  },
  xAxis: {
    gridLineWidth: 0,
    categories: ['Very satisfied', 'Somewhat satisfied', 'Neither satisfied nor dissatisfied', 'Somewhat dissatisfied', 'Very dissatisfied']
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'top',
    x: -20,
    y: 20,
    floating: true,
    borderWidth: 1,
    backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
    shadow: true,
    symbolHeight: 12,
    symbolWidth: 12,
    symbolRadius: 0
  },
  plotOptions: {
    series: {
      pointPadding: 0,
      dataLabels: {
        enabled: true,
        format: '{y}%'
      }
    }
  },
  series: [{
    name: 'Firms with fewer than 200 attys',
    data: [23, 31, 14, 22, 10]
  }, {
    name: 'Firms with 200-999 attys',
    data: [25, 37, 9, 19, 10]
  }, {
    name: 'Firms with 1,000 or more attys',
    data: [18, 47, 8, 15, 11]
  }]
});


Highcharts.chart('comp-compared-to-peers', {
  chart: {
    type: 'column'
  },
  credits: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  title: {
    text: ''
  },
  yAxis: {
    title: {
      enabled: false
    },
    labels: {
      enabled: false
    }
  },
  xAxis: {
    gridLineWidth: 0,
    categories: ['Much more', 'Somewhat more', 'About the same', 'Somewhat less', 'Much less']
  },
  legend: {
    layout: 'vertical',
    align: 'left',
    verticalAlign: 'top',
    x: 2,
    y: 2,
    floating: true,
    borderWidth: 1,
    backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
    shadow: true,
    symbolHeight: 12,
    symbolWidth: 12,
    symbolRadius: 0
  },
  plotOptions: {
    series: {
      pointPadding: 0,
      dataLabels: {
        enabled: true,
        format: '{y}%'
      }
    }
  },
  series: [{
    name: 'Firms with fewer than 200 attys',
    data: [4, 23, 31, 31, 11]
  }, {
    name: 'Firms with 200-999 attys',
    data: [5, 19, 34, 32, 11]
  }, {
    name: 'Firms with 1,000 or more attys',
    data: [6, 22, 24, 38, 9]
  }]
});

Highcharts.chart('lateral-change-comp', {
  chart: {
    type: 'column'
  },
  credits: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  title: {
    text: ''
  },
  yAxis: {
    title: {
      enabled: false
    },
    labels: {
      enabled: false
    }
  },
  xAxis: {
    gridLineWidth: 0,
    categories: ['Decreased', '0%', 'Less than 20%', '20% or more']
  },
  legend: {
    layout: 'vertical',
    align: 'left',
    verticalAlign: 'top',
    x: 20,
    y: 20,
    floating: true,
    borderWidth: 1,
    backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
    shadow: true,
    symbolHeight: 12,
    symbolWidth: 12,
    symbolRadius: 0
  },
  plotOptions: {
    series: {
      pointPadding: 0,
      dataLabels: {
        enabled: true,
        format: '{y}%'
      }
    }
  },
  series: [{
    name: 'Firms with fewer than 200 attys',
    data: [12, 30, 19, 39]
  }, {
    name: 'Firms with 200-999 attys',
    data: [13, 33, 28, 26]
  }, {
    name: 'Firms with 1,000 or more attys',
    data: [4, 26, 23, 47]
  }]
});


Highcharts.chart('whole-career', {
  chart: {
    type: 'bar'
  },
  colors: [
    "#707C9C", "#5B1933"
  ],
  credits: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  title: {
    text: ''
  },
  xAxis: {
    categories: ['Firms with fewer than 200 attys', 'Firms with 200-999 attys', 'Firms with 1,000 or more attys']
  },
  yAxis: {
    title: {
      enabled: false
    },
    labels: {
      enabled: false
    },
    gridLineWidth: 0
  },
  legend: {
    reversed: true,
    symbolHeight: 12,
    symbolWidth: 12,
    symbolRadius: 0
  },
  plotOptions: {
    series: {
      stacking: 'normal',
      dataLabels: {
        enabled: true,
        format: '{y}%'
      }
    }
  },
  series: [{
    name: 'Yes',
    data: [82, 78, 77],
    legendIndex: 1
  }, {
    name: 'No',
    data: [18, 22, 23],
    legendIndex: 0
  }]
});




Highcharts.chart('covid-pay-cut', {
  chart: {
    type: 'bar'
  },
  colors: [
    "#707C9C", "#5B1933"
  ],
  credits: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  title: {
    text: ''
  },
  xAxis: {
    categories: ['Firms with fewer than 200 attys', 'Firms with 200-999 attys', 'Firms with 1,000 or more attys']
  },
  yAxis: {
    title: {
      enabled: false
    },
    labels: {
      enabled: false
    },
    gridLineWidth: 0
  },
  legend: {
    reversed: true,
    symbolHeight: 12,
    symbolWidth: 12,
    symbolRadius: 0
  },
  plotOptions: {
    series: {
      stacking: 'normal',
      dataLabels: {
        enabled: true,
        format: '{y}%'
      }
    }
  },
  series: [{
    name: 'Yes',
    data: [31, 56, 35],
    legendIndex: 1
  }, {
    name: 'No',
    data: [69, 44, 65],
    legendIndex: 0
  }]
});



Highcharts.chart('percent-covid-pay-cut', {
  chart: {
    type: 'column'
  },
  credits: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  title: {
    text: ''
  },
  yAxis: {
    title: {
      enabled: false
    },
    labels: {
      enabled: false
    }
  },
  xAxis: {
    gridLineWidth: 0,
    categories: ['Less than 10%', '10%-19%', '20%-29%', '30% or more']
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'top',
    x: -25,
    y: 25,
    floating: true,
    borderWidth: 1,
    backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
    shadow: true,
    symbolHeight: 12,
    symbolWidth: 12,
    symbolRadius: 0
  },
  plotOptions: {
    series: {
      pointPadding: 0,
      dataLabels: {
        enabled: true,
        format: '{y}%'
      }
    }
  },
  series: [{
    name: 'Firms with fewer than 200 attys',
    data: [8, 36, 39, 16]
  }, {
    name: 'Firms with 200-999 attys',
    data: [17, 40, 32, 11]
  }, {
    name: 'Firms with 1,000 or more attys',
    data: [11, 50, 33, 7]
  }]
});


Highcharts.chart('partners-asked-retire', {
  chart: {
    type: 'bar'
  },
  colors: [
    "#707C9C", "#5B1933"
  ],
  credits: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  title: {
    text: ''
  },
  xAxis: {
    categories: ['Firms with fewer than 200 attys', 'Firms with 200-999 attys', 'Firms with 1,000 or more attys']
  },
  yAxis: {
    title: {
      enabled: false
    },
    labels: {
      enabled: false
    },
    gridLineWidth: 0
  },
  legend: {
    reversed: true,
    symbolHeight: 12,
    symbolWidth: 12,
    symbolRadius: 0
  },
  plotOptions: {
    series: {
      stacking: 'normal',
      dataLabels: {
        enabled: true,
        format: '{y}%'
      }
    }
  },
  series: [{
    name: 'Yes',
    data: [20, 45, 50],
    legendIndex: 1
  }, {
    name: 'No',
    data: [80, 55, 50],
    legendIndex: 0
  }]
});


Highcharts.chart('deequitized-partners', {
  chart: {
    type: 'bar'
  },
  colors: [
    "#707C9C", "#5B1933"
  ],
  credits: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  title: {
    text: ''
  },
  xAxis: {
    categories: ['Firms with fewer than 200 attys', 'Firms with 200-999 attys', 'Firms with 1,000 or more attys']
  },
  yAxis: {
    title: {
      enabled: false
    },
    labels: {
      enabled: false
    },
    gridLineWidth: 0
  },
  legend: {
    reversed: true,
    symbolHeight: 12,
    symbolWidth: 12,
    symbolRadius: 0
  },
  plotOptions: {
    series: {
      stacking: 'normal',
      dataLabels: {
        enabled: true,
        format: '{y}%'
      }
    }
  },
  series: [{
    name: 'Yes',
    data: [16, 41, 42],
    legendIndex: 1
  }, {
    name: 'No',
    data: [84, 59, 58],
    legendIndex: 0
  }]
});


Highcharts.chart('office-space-cuts', {
  chart: {
    type: 'bar'
  },
  colors: [
    "#707C9C", "#5B1933"
  ],
  credits: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  title: {
    text: ''
  },
  xAxis: {
    categories: ['Firms with fewer than 200 attys', 'Firms with 200-999 attys', 'Firms with 1,000 or more attys']
  },
  yAxis: {
    title: {
      enabled: false
    },
    labels: {
      enabled: false
    },
    gridLineWidth: 0
  },
  legend: {
    reversed: true,
    symbolHeight: 12,
    symbolWidth: 12,
    symbolRadius: 0
  },
  plotOptions: {
    series: {
      stacking: 'normal',
      dataLabels: {
        enabled: true,
        format: '{y}%'
      }
    }
  },
  series: [{
    name: 'Yes',
    data: [28, 36, 31],
    legendIndex: 1
  }, {
    name: 'No',
    data: [72, 64, 69],
    legendIndex: 0
  }]
});


Highcharts.chart('billing-rate', {
  chart: {
    type: 'column'
  },
  credits: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  title: {
    text: ''
  },
  yAxis: {
    title: {
      enabled: false
    },
    labels: {
      enabled: false
    }
  },
  xAxis: {
    gridLineWidth: 0,
    categories: ['Under $200', '$200-$299', '$300-$399', '$400-$499', '$500-$599', '$600-$699', '$700-$799', '$800-$999', '$1,000 or more']
  },
  legend: {
    layout: 'vertical',
    align: 'left',
    verticalAlign: 'top',
    x: 20,
    y: 20,
    floating: true,
    borderWidth: 1,
    backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
    shadow: true,
    symbolHeight: 12,
    symbolWidth: 12,
    symbolRadius: 0
  },
  plotOptions: {
    series: {
      pointPadding: 0,
      dataLabels: {
        enabled: true,
        format: '{y}%'
      }
    }
  },
  series: [{
    name: 'Firms with fewer than 200 attys',
    data: [8, 10, 17, 20, 17, 12, 6, 9, 2]
  }, {
    name: 'Firms with 200-999 attys',
    data: [2, 3, 4, 13, 22, 18, 14, 15, 11]
  }, {
    name: 'Firms with 1,000 or more attys',
    data: [1, 4, 3, 2, 5, 11, 15, 21, 38]
  }]
});


Highcharts.chart('2019-billable-hours', {
  chart: {
    type: 'column'
  },
  credits: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  title: {
    text: ''
  },
  yAxis: {
    title: {
      enabled: false
    },
    labels: {
      enabled: false
    }
  },
  xAxis: {
    gridLineWidth: 0,
    categories: ['Under 1,000', '1,000-1,499', '1,500-1,799', '1,800-1,999', '2,000-2,199', '2,200 or more']
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'top',
    x: -5,
    y: 5,
    floating: true,
    borderWidth: 1,
    backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
    shadow: true,
    symbolHeight: 12,
    symbolWidth: 12,
    symbolRadius: 0
  },
  plotOptions: {
    series: {
      pointPadding: 0,
      dataLabels: {
        enabled: true,
        format: '{y}%'
      }
    }
  },
  series: [{
    name: 'Firms with fewer than 200 attys',
    data: [8, 18, 26, 16, 21, 12]
  }, {
    name: 'Firms with 200-999 attys',
    data: [8, 23, 26, 22, 11, 10]
  }, {
    name: 'Firms with 1,000 or more attys',
    data: [4, 21, 25, 23, 15, 11]
  }]
});




Highcharts.chart('billable-hours-change', {
  chart: {
    type: 'bar'
  },
  colors: [
    "#0B2A44", "#707C9C", "#5B1933"
  ],
  credits: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  title: {
    text: ''
  },
  xAxis: {
    categories: ['Firms with fewer than 200 attys', 'Firms with 200-999 attys', 'Firms with 1,000 or more attys']
  },
  yAxis: {
    title: {
      enabled: false
    },
    labels: {
      enabled: false
    },
    gridLineWidth: 0
  },
  legend: {
    reversed: true,
    symbolHeight: 12,
    symbolWidth: 12,
    symbolRadius: 0
  },
  plotOptions: {
    series: {
      stacking: 'normal',
      dataLabels: {
        enabled: true,
        format: '{y}%'
      }
    }
  },
  series: [{
    name: 'Increase',
    data: [36, 32, 36],
    legendIndex: 2
  }, {
    name: 'Stay the same',
    data: [40, 36, 34],
    legendIndex: 0
  }, {
    name: 'Decrease',
    data: [24, 32, 30],
    legendIndex: 1
  }]
});


Highcharts.chart('billable-hour-outlook', {
  chart: {
    type: 'bar'
  },
  colors: [
    "#0B2A44", "#707C9C", "#5B1933"
  ],
  credits: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  title: {
    text: ''
  },
  xAxis: {
    categories: ['Firms with fewer than 200 attys', 'Firms with 200-999 attys', 'Firms with 1,000 or more attys']
  },
  yAxis: {
    title: {
      enabled: false
    },
    labels: {
      enabled: false
    },
    gridLineWidth: 0
  },
  legend: {
    reversed: true,
    symbolHeight: 12,
    symbolWidth: 12,
    symbolRadius: 0
  },
  plotOptions: {
    series: {
      stacking: 'normal',
      dataLabels: {
        enabled: true,
        format: '{y}%'
      }
    }
  },
  series: [{
    name: 'Increase',
    data: [29, 38, 40],
    legendIndex: 2
  }, {
    name: 'Stay the same',
    data: [51, 43, 42],
    legendIndex: 0
  }, {
    name: 'Decrease',
    data: [20, 20, 18],
    legendIndex: 1
  }]
});

Highcharts.chart('nonbillable-hours-2019', {
  chart: {
    type: 'column'
  },
  credits: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  title: {
    text: ''
  },
  yAxis: {
    title: {
      enabled: false
    },
    labels: {
      enabled: false
    }
  },
  xAxis: {
    gridLineWidth: 0,
    categories: ['Under 500', '500-999', '1,000 or more']
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'top',
    x: -20,
    y: 20,
    floating: true,
    borderWidth: 1,
    backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
    shadow: true,
    symbolHeight: 12,
    symbolWidth: 12,
    symbolRadius: 0
  },
  plotOptions: {
    series: {
      pointPadding: 0,
      dataLabels: {
        enabled: true,
        format: '{y}%'
      }
    }
  },
  series: [{
    name: 'Firms with fewer than 200 attys',
    data: [60, 24, 16]
  }, {
    name: 'Firms with 200-999 attys',
    data: [45, 38, 17]
  }, {
    name: 'Firms with 1,000 or more attys',
    data: [37, 44, 20]
  }]
});

Highcharts.chart('avg-partner-salary', {
  chart: {
    type: 'column'
  },
  credits: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  title: {
    text: ''
  },
  yAxis: {
    title: {
      enabled: false
    },
    labels: {
      enabled: false
    }
  },
  xAxis: {
    gridLineWidth: 0,
    categories: ["Under $250K", "$250K-$299K", "$300K-$399K", "$400K-$499K", "$500K-$999K", "$1 million or more", "Don't know"]
  },
  legend: {
    layout: 'vertical',
    align: 'left',
    verticalAlign: 'top',
    x: 20,
    y: 20,
    floating: true,
    borderWidth: 1,
    backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
    shadow: true,
    symbolHeight: 12,
    symbolWidth: 12,
    symbolRadius: 0
  },
  plotOptions: {
    series: {
      pointPadding: 0,
      dataLabels: {
        enabled: true,
        format: '{y}%'
      }
    }
  },
  series: [{
    name: 'Firms with fewer than 200 attys',
    data: [19, 12, 25, 19, 16, 5, 5]
  }, {
    name: 'Firms with 200-999 attys',
    data: [1, 6, 21, 16, 31, 13, 11]
  }, {
    name: 'Firms with 1,000 or more attys',
    data: [0, 2, 6, 4, 32, 42, 15]
  }]
});

Highcharts.chart('partner-salaries-transparent', {
  chart: {
    type: 'bar'
  },
  colors: [
    "#707C9C", "#5B1933"
  ],
  credits: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  title: {
    text: ''
  },
  xAxis: {
    categories: ['Firms with fewer than 200 attys', 'Firms with 200-999 attys', 'Firms with 1,000 or more attys']
  },
  yAxis: {
    title: {
      enabled: false
    },
    labels: {
      enabled: false
    },
    gridLineWidth: 0
  },
  legend: {
    reversed: true,
    symbolHeight: 12,
    symbolWidth: 12,
    symbolRadius: 0
  },
  plotOptions: {
    series: {
      stacking: 'normal',
      dataLabels: {
        enabled: true,
        format: '{y}%'
      }
    }
  },
  series: [{
    name: 'Yes',
    data: [43, 53, 40],
    legendIndex: 1
  }, {
    name: 'No',
    data: [57, 47, 60],
    legendIndex: 0
  }]
});


Highcharts.chart('compensation-types', {
  chart: {
    type: 'column'
  },
  credits: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  title: {
    text: ''
  },
  yAxis: {
    title: {
      enabled: false
    },
    labels: {
      enabled: false
    }
  },
  xAxis: {
    gridLineWidth: 0,
    categories: ['Bonus', 'Nonequity incentive compensation', 'Cashouts', 'Stock', 'Options', 'Other']
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'top',
    x: -20,
    y: 20,
    floating: true,
    borderWidth: 1,
    backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
    shadow: true,
    symbolHeight: 12,
    symbolWidth: 12,
    symbolRadius: 0
  },
  plotOptions: {
    series: {
      pointPadding: 0,
      dataLabels: {
        enabled: true,
        format: '{y}%'
      }
    }
  },
  series: [{
    name: 'Firms with fewer than 200 attys',
    data: [81, 34, 10, 13, 4, 10]
  }, {
    name: 'Firms with 200-999 attys',
    data: [76, 31, 7, 5, 1, 10]
  }, {
    name: 'Firms with 1,000 or more attys',
    data: [77, 34, 11, 5, 1, 13]
  }]
});

Highcharts.chart('bonus-distribution-basis', {
  chart: {
    type: 'column'
  },
  credits: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  title: {
    text: ''
  },
  yAxis: {
    title: {
      enabled: false
    },
    labels: {
      enabled: false
    }
  },
  xAxis: {
    gridLineWidth: 0,
    categories: ['Entirely discretionary', 'Formulaic, based on individual performance', 'Discretionary, based on firm performance', 'Formulaic, based on firm performance', 'No plan', 'Other']
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'top',
    x: -20,
    y: 20,
    floating: true,
    borderWidth: 1,
    backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
    shadow: true,
    symbolHeight: 12,
    symbolWidth: 12,
    symbolRadius: 0
  },
  plotOptions: {
    series: {
      pointPadding: 0,
      dataLabels: {
        enabled: true,
        format: '{y}%'
      }
    }
  },
  series: [{
    name: 'Firms with fewer than 200 attys',
    data: [27, 34, 21, 7, 5, 6]
  }, {
    name: 'Firms with 200-999 attys',
    data: [33, 24, 28, 4, 5, 7]
  }, {
    name: 'Firms with 1,000 or more attys',
    data: [37, 27, 21, 4, 2, 11]
  }]
});



Highcharts.chart('benefits', {
  chart: {
    type: 'column'
  },
  credits: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  title: {
    text: ''
  },
  yAxis: {
    title: {
      enabled: false
    },
    labels: {
      enabled: false
    }
  },
  xAxis: {
    gridLineWidth: 0,
    categories: ['Medical ', '401K ', 'Life insurance', 'Dental ', 'Long-term disability  ', 'Short-term disability ', 'Profit sharing plan ', 'Cash balance pension plan ', 'Defined benefit pension plan ',
      'Gym/health club membership ',
      'SERP (Supplemental Executive Retirement Plan) ', 'Car allowance ', 'Company car ', 'Other'
    ]
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'top',
    x: -20,
    y: 20,
    floating: true,
    borderWidth: 1,
    backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
    shadow: true,
    symbolHeight: 12,
    symbolWidth: 12,
    symbolRadius: 0
  },
  plotOptions: {
    series: {
      pointPadding: 0,
      dataLabels: {
        enabled: true,
        format: '{y}%'
      }
    }
  },
  series: [{
    name: 'Firms with fewer than 200 attys',
    data: [88, 83, 72, 74, 65, 55, 43, 9, 12, 16, 7, 10, 5, 3]
  }, {
    name: 'Firms with 200-999 attys',
    data: [89, 90, 85, 80, 80, 68, 42, 28, 19, 12, 10, 3, 1, 5]
  }, {
    name: 'Firms with 1,000 or more attys',
    data: [87, 81, 82, 77, 72, 60, 38, 28, 21, 21, 10, 0, 0, 5]
  }]
});

Highcharts.chart('retirement-match', {
  chart: {
    type: 'column'
  },
  credits: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  title: {
    text: ''
  },
  yAxis: {
    title: {
      enabled: false
    },
    labels: {
      enabled: false
    }
  },
  xAxis: {
    gridLineWidth: 0,
    categories: ['0%', 'Less than 3%', '3% to 3.99%', '4% to 4.99%', '5% to 5.99%', '6% or more']
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'top',
    x: -20,
    y: 20,
    floating: true,
    borderWidth: 1,
    backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
    shadow: true,
    symbolHeight: 12,
    symbolWidth: 12,
    symbolRadius: 0
  },
  plotOptions: {
    series: {
      pointPadding: 0,
      dataLabels: {
        enabled: true,
        format: '{y}%'
      }
    }
  },
  series: [{
    name: 'Firms with fewer than 200 attys',
    data: [45, 5, 17, 13, 6, 14]
  }, {
    name: 'Firms with 200-999 attys',
    data: [74, 1, 10, 4, 3, 9]
  }, {
    name: 'Firms with 1,000 or more attys',
    data: [83, 2, 6, 4, 2, 4]
  }]
});

Highcharts.chart('overtime', {
  chart: {
    type: 'column'
  },
  credits: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  title: {
    text: ''
  },
  yAxis: {
    title: {
      enabled: false
    },
    labels: {
      enabled: false
    }
  },
  xAxis: {
    gridLineWidth: 0,
    categories: ["Organization doesn't compensate for overtime", "Time and a half", "Comp time", "Fluctuating work week", "Other"]
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'top',
    x: -20,
    y: 20,
    floating: true,
    borderWidth: 1,
    backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
    shadow: true,
    symbolHeight: 12,
    symbolWidth: 12,
    symbolRadius: 0
  },
  plotOptions: {
    series: {
      pointPadding: 0,
      dataLabels: {
        enabled: true,
        format: '{y}%'
      }
    }
  },
  series: [{
    name: 'Firms with fewer than 200 attys',
    data: [53, 32, 5, 2, 9]
  }, {
    name: 'Firms with 200-999 attys',
    data: [49, 37, 4, 0, 11]
  }, {
    name: 'Firms with 1,000 or more attys',
    data: [56, 27, 2, 0, 15]
  }]
});

Highcharts.chart('ep-contributions', {
  chart: {
    type: 'column'
  },
  credits: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  title: {
    text: ''
  },
  yAxis: {
    title: {
      enabled: false
    },
    labels: {
      enabled: false
    }
  },
  xAxis: {
    gridLineWidth: 0,
    categories: ['Less than 10%', '10-19%', '20-29%', '30% or more']
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'top',
    x: -20,
    y: 20,
    floating: true,
    borderWidth: 1,
    backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
    shadow: true,
    symbolHeight: 12,
    symbolWidth: 12,
    symbolRadius: 0
  },
  plotOptions: {
    series: {
      pointPadding: 0,
      dataLabels: {
        enabled: true,
        format: '{y}%'
      }
    }
  },
  series: [{
    name: 'Firms with fewer than 200 attys',
    data: [64, 16, 6, 15]
  }, {
    name: 'Firms with 200-999 attys',
    data: [48, 11, 21, 20]
  }, {
    name: 'Firms with 1,000 or more attys',
    data: [38, 7, 22, 33]
  }]
});

Highcharts.chart('lockstep', {
  chart: {
    type: 'bar'
  },
  colors: [
    "#707C9C", "#5B1933"
  ],
  credits: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  title: {
    text: ''
  },
  xAxis: {
    categories: ['Firms with fewer than 200 attys', 'Firms with 200-999 attys', 'Firms with 1,000 or more attys']
  },
  yAxis: {
    title: {
      enabled: false
    },
    labels: {
      enabled: false
    },
    gridLineWidth: 0
  },
  legend: {
    reversed: true,
    symbolHeight: 12,
    symbolWidth: 12,
    symbolRadius: 0
  },
  plotOptions: {
    series: {
      stacking: 'normal',
      dataLabels: {
        enabled: true,
        format: '{y}%'
      }
    }
  },
  series: [{
    name: 'Yes',
    data: [17, 11, 11],
    legendIndex: 1
  }, {
    name: 'No',
    data: [83, 89, 89],
    legendIndex: 0
  }]
});


Highcharts.chart('originations', {
  chart: {
    type: 'bar'
  },
  colors: [
    "#707C9C", "#5B1933"
  ],
  credits: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  title: {
    text: ''
  },
  xAxis: {
    categories: ['Firms with fewer than 200 attys', 'Firms with 200-999 attys', 'Firms with 1,000 or more attys']
  },
  yAxis: {
    title: {
      enabled: false
    },
    labels: {
      enabled: false
    },
    gridLineWidth: 0
  },
  legend: {
    reversed: true,
    symbolHeight: 12,
    symbolWidth: 12,
    symbolRadius: 0
  },
  plotOptions: {
    series: {
      stacking: 'normal',
      dataLabels: {
        enabled: true,
        format: '{y}%'
      }
    }
  },
  series: [{
    name: 'Yes',
    data: [84, 92, 92],
    legendIndex: 1
  }, {
    name: 'No',
    data: [16, 8, 8],
    legendIndex: 0
  }]
});

Highcharts.chart('years-to-partner', {
  chart: {
    type: 'column'
  },
  credits: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  title: {
    text: ''
  },
  yAxis: {
    title: {
      enabled: false
    },
    labels: {
      enabled: false
    }
  },
  xAxis: {
    gridLineWidth: 0,
    categories: ['Less than 5', '5 or 5.5', '6', '7 or 7.5', '8 or 8.5', '9', '10', '11 or more']
  },
  legend: {
    layout: 'vertical',
    align: 'left',
    verticalAlign: 'top',
    x: 5,
    y: 5,
    floating: true,
    borderWidth: 1,
    backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
    shadow: true,
    symbolHeight: 12,
    symbolWidth: 12,
    symbolRadius: 0
  },
  plotOptions: {
    series: {
      pointPadding: 0,
      dataLabels: {
        enabled: true,
        format: '{y}%'
      }
    }
  },
  series: [{
    name: 'Firms with fewer than 200 attys',
    data: [1, 6, 5, 22, 27, 13, 21, 7]
  }, {
    name: 'Firms with 200-999 attys',
    data: [1, 2, 2, 12, 34, 17, 27, 6]
  }, {
    name: 'Firms with 1,000 or more attys',
    data: [0, 0, 2, 9, 24, 26, 33, 6]
  }]
});



Highcharts.chart('years-to-promotion', {
  chart: {
    type: 'column'
  },
  credits: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  title: {
    text: ''
  },
  yAxis: {
    title: {
      enabled: false
    },
    labels: {
      enabled: false
    }
  },
  xAxis: {
    gridLineWidth: 0,
    categories: ['Under 5', '5-7', '7.5 to 10', 'More than 10']
  },
  legend: {
    layout: 'vertical',
    align: 'left',
    verticalAlign: 'top',
    x: 5,
    y: 5,
    floating: true,
    borderWidth: 1,
    backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
    shadow: true,
    symbolHeight: 12,
    symbolWidth: 12,
    symbolRadius: 0
  },
  plotOptions: {
    series: {
      pointPadding: 0,
      dataLabels: {
        enabled: true,
        format: '{y}%'
      }
    }
  },
  series: [{
    name: 'Firms with fewer than 200 attys',
    data: [17, 27, 40, 16]
  }, {
    name: 'Firms with 200-999 attys',
    data: [6, 36, 44, 14]
  }, {
    name: 'Firms with 1,000 or more attys',
    data: [8, 32, 44, 17]
  }]
});

Highcharts.chart('firm-offerings', {
  chart: {
    type: 'bar'
  },
  credits: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  title: {
    text: ''
  },
  yAxis: {
    title: {
      enabled: false
    },
    labels: {
      enabled: false
    }
  },
  xAxis: {
    gridLineWidth: 0,
    categories: ['Flexible and remote working (after COVID-19)', 'Increased focus on productivity rather than hours', 'More support for parents', 'More time off', 'Breaks during the work day']
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'bottom',
    x: -20,
    y: -20,
    floating: true,
    borderWidth: 1,
    backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
    shadow: true,
    symbolHeight: 12,
    symbolWidth: 12,
    symbolRadius: 0
  },
  plotOptions: {
    series: {
      pointPadding: 0,
      dataLabels: {
        enabled: true,
        format: '{y}%'
      }
    }
  },
  series: [{
    name: 'Firms with fewer than 200 attys',
    data: [66, 53, 43, 25, 23]
  }, {
    name: 'Firms with 200-999 attys',
    data: [70, 63, 46, 24, 21]
  }, {
    name: 'Firms with 1,000 or more attys',
    data: [70, 53, 46, 20, 18]
  }]
});