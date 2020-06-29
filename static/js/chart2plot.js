function buildPlot() {

  //d3.csv("athlete_events.csv")
  d3.json("/api/total-medals").then(function(response) {

  console.log(response);

  const data = response;

  var year = []

  var dict = []
  
  var summer_data = data.filter(row => row.Season == "Summer")
  //var winter_data = data.filter(row => row.Season == "Winter")

  for (var i = 0; i< summer_data.length; i++) {
    var item = summer_data[i]["Year"]
    if (!year.includes(item)) {
        year.push(item)
    }
  } 

  year = year.sort()

  console.log(year)

  for (var a = 0; a< year.length; a++) {
    var sport_list = []
    var cur_year =  year[a];
    var cur_year_data = summer_data.filter(row => row.Year == cur_year)
    cur_year_data.forEach(row => {
      Object.entries(row).forEach(([key, value]) => {
        if (key == "Sport" && !sport_list.includes(value)) {
          sport_list.push(value)
        }
      })
    })
    dict.push({key : cur_year,
              value : sport_list
    })
  }

  console.log(dict)
  
  x_value = []
  y_value = []
  dict.forEach(row => x_value.push(row.key))
  dict.forEach(row => y_value.push((row.value).length))

  trace1 = {
    x: x_value,
    y: y_value,
    type: "line"
  }

  const layout = {
    scope: "usa",
    title: "Number of Olympic Sports",
    showlegend: false,
    height: 600,
          // width: 980,
    geo: {
      scope: "usa",
      projection: {
        type: "albers usa"
      },
      showland: true,
      landcolor: "rgb(217, 217, 217)",
      subunitwidth: 1,
      countrywidth: 1,
      subunitcolor: "rgb(255,255,255)",
      countrycolor: "rgb(255,255,255)"
    }
  };

  Plotly.newPlot("plot", [trace1], layout);

});

function unpack(rows, index) {
  return rows.map(function(row) {
    return row[index];
  });
}

d3.csv("../static/assets/data/merged_data.csv").then(function(response) {

  console.log(response);
  const GDPdata = response;

  var AU_medals = []
  var AU_GDP = []
  var AU_data = GDPdata.filter(row => row.Nation == "Australia")
  var AU_year =[]
  AU_data.sort(function (a, b) {
    return a.Year - b.Year;
  });
  AU_data.forEach(row => AU_medals.push(row.Medals))  
  AU_data.forEach(row => AU_GDP.push(row.Value))  
  AU_data.forEach(row => AU_year.push(row.Year))  
  console.log(AU_year)

  var CN_medals = []
  var CN_GDP = []
  var CN_data = GDPdata.filter(row => row.Nation == "China")
  var CN_year = []
  CN_data.sort(function (a, b) {
    return a.Year - b.Year;
  });
  CN_data.forEach(row => CN_medals.push(row.Medals))  
  CN_data.forEach(row => CN_GDP.push(row.Value))  
  CN_data.forEach(row => CN_year.push(row.Year))  

  var FR_medals = []
  var FR_GDP = []
  var FR_data = GDPdata.filter(row => row.Nation == "France")
  var FR_year =[]
  FR_data.sort(function (a, b) {
    return a.Year - b.Year;
  });
  FR_data.forEach(row => FR_medals.push(row.Medals))  
  FR_data.forEach(row => FR_GDP.push(row.Value))  
  FR_data.forEach(row => FR_year.push(row.Year))  

  var GM_medals = []
  var GM_GDP = []
  var GM_data = GDPdata.filter(row => row.Nation == "Germany")
  var GM_year = []
  GM_data.sort(function (a, b) {
    return a.Year - b.Year;
  });
  GM_data.forEach(row => GM_medals.push(row.Medals))  
  GM_data.forEach(row => GM_GDP.push(row.Value))  
  GM_data.forEach(row => GM_year.push(row.Year))  

  var IT_medals = []
  var IT_GDP = []
  var IT_data = GDPdata.filter(row => row.Nation == "Italy")
  var IT_year = []
  IT_data.sort(function (a, b) {
    return a.Year - b.Year;
  });
  IT_data.forEach(row => IT_medals.push(row.Medals))  
  IT_data.forEach(row => IT_GDP.push(row.Value)) 
  IT_data.forEach(row => IT_year.push(row.Year))  

  var JP_medals = []
  var JP_GDP = []
  var JP_data = GDPdata.filter(row => row.Nation == "Japan")
  var JP_year = []
  JP_data.sort(function (a, b) {
    return a.Year - b.Year;
  });
  JP_data.forEach(row => JP_medals.push(row.Medals))  
  JP_data.forEach(row => JP_GDP.push(row.Value))  
  JP_data.forEach(row => JP_year.push(row.Year))  

  var RU_medals = []
  var RU_GDP = []
  var RU_data = GDPdata.filter(row => row.Nation == "Russia")
  var RU_year = []
  RU_data.sort(function (a, b) {
    return a.Year - b.Year;
  });
  RU_data.forEach(row => RU_medals.push(row.Medals))  
  RU_data.forEach(row => RU_GDP.push(row.Value))  
  RU_data.forEach(row => RU_year.push(row.Year))  

  var SP_medals = []
  var SP_GDP = []
  var SP_data = GDPdata.filter(row => row.Nation == "Spain")
  var SP_year = []
  SP_data.sort(function (a, b) {
    return a.Year - b.Year;
  });
  SP_data.forEach(row => SP_medals.push(row.Medals))  
  SP_data.forEach(row => SP_GDP.push(row.Value)) 
  SP_data.forEach(row => SP_year.push(row.Year))  

  var UK_medals = []
  var UK_GDP = []
  var UK_data = GDPdata.filter(row => row.Nation == "UK")
  var UK_year = []
  UK_data.sort(function (a, b) {
    return a.Year - b.Year;
  });
  UK_data.forEach(row => UK_medals.push(row.Medals))  
  UK_data.forEach(row => UK_GDP.push(row.Value))  
  UK_data.forEach(row => UK_year.push(row.Year))  

  var USA_medals = []
  var USA_GDP = []
  var USA_data = GDPdata.filter(row => row.Nation == "USA")
  var USA_year = []
  USA_data.sort(function (a, b) {
    return a.Year - b.Year;
  });
  USA_data.forEach(row => USA_medals.push(row.Medals))  
  USA_data.forEach(row => USA_GDP.push(row.Value))  
  USA_data.forEach(row => USA_year.push(row.Year))  

  var US_bar = {
    x: USA_year,
    y: USA_GDP,
    type: 'bar',
    name: "USA GDP"
  };
  var US_line = {
    x: USA_year,
    y: USA_medals,
    type: 'scatter',
    yaxis: "y2",
    name: "US Medals"
  };
  var UK_bar = {
    x: UK_year,
    y: UK_GDP,
    type: 'bar',
    name: "UK GDP"
  };
  var UK_line = {
    x: UK_year,
    y: UK_medals,
    type: 'scatter',
    yaxis: "y2",
    name: "UK Medals"
  };
  var SP_bar = {
    x: SP_year,
    y: SP_GDP,
    type: 'bar',
    name: "UK GDP"
  };
  var SP_line = {
    x: SP_year,
    y: SP_medals,
    type: 'scatter',
    yaxis: "y2",
    name: "Spain Medals"
  };
  var RU_bar = {
    x: RU_year,
    y: RU_GDP,
    type: 'bar',
    name: "Russia GDP"
  };
  var RU_line = {
    x: RU_year,
    y: RU_medals,
    type: 'scatter',
    yaxis: "y2",
    name: "Russia Medals"
  };
  var JP_bar = {
    x: JP_year,
    y: JP_GDP,
    type: 'bar',
    name: "Japan GDP"
  };
  var JP_line = {
    x: JP_year,
    y: JP_medals,
    type: 'scatter',
    yaxis: "y2",
    name: "Japan Medals"
  };
  var IT_bar = {
    x: IT_year,
    y: IT_GDP,
    type: 'bar',
    name: "Italy GDP"
  };
  var IT_line = {
    x: IT_year,
    y: IT_medals,
    type: 'scatter',
    yaxis: "y2",
    name: "Italy Medals"
  };
  var GM_bar = {
    x: GM_year,
    y: GM_GDP,
    type: 'bar',
    name: "Germany GDP"
  };
  var GM_line = {
    x: GM_year,
    y: GM_medals,
    type: 'scatter',
    yaxis: "y2",
    name: "Germany Medals"
  };
  var FR_bar = {
    x: FR_year,
    y: FR_GDP,
    type: 'bar',
    name: "France GDP"
  };
  var FR_line = {
    x: FR_year,
    y: FR_medals,
    type: 'scatter',
    yaxis: "y2",
    name: "France Medals"
  };
  var CN_bar = {
    x: CN_year,
    y: CN_GDP,
    type: 'bar',
    name: "China GDP"
  };
  var CN_line = {
    x: CN_year,
    y: CN_medals,
    type: 'scatter',
    yaxis: "y2",
    name: "China Medals"
  };
  var AU_bar = {
    x: AU_year,
    y: AU_GDP,
    type: 'bar',
    name: "Australia GDP"
  };
  var AU_line = {
    x: AU_year,
    y: AU_medals,
    type: 'scatter',
    yaxis: "y2",
    name: "Australia Medals"
  };

  var data1 = [CN_line, CN_bar, FR_line, FR_bar, GM_line, GM_bar, IT_line, IT_bar, JP_line, JP_bar, US_line, US_bar, UK_line, UK_bar, SP_line, SP_bar, RU_bar, RU_line];
  var layout1 = {
    title: "Relationship between GDP and Olympic Medals",
    yaxis: {title: "GDP (Bn)"},
    yaxis2: {title: "Medal Counts",
            side: "right",
            overlaying: "y",
            position: .96}
  }
  Plotly.newPlot('myDiv', data1, layout1);

});
}
buildPlot();