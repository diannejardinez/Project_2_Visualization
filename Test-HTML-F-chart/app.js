

 // Setting events
var xValue = ["Basketball Women's Basketball", "Boxing Women's Flyweight",
 "Boxing Women's Lightweight", "Boxing Women's Middleweight",
 "Cycling Women's 500 metres Time Trial", "Cycling Women's BMX",
 "Cycling Women's Individual Pursuit, 3,000 metres",
 "Cycling Women's Individual Time Trial", "Cycling Women's Keirin",
 "Cycling Women's Mountainbike, Cross-Country",
 "Cycling Women's Omnium", "Cycling Women's Points Race",
 "Cycling Women's Road Race, Individual", "Cycling Women's Sprint",
 "Cycling Women's Team Pursuit", "Cycling Women's Team Sprint",
 'Figure Skating Mixed Ice Dancing', 'Figure Skating Mixed Pairs',
 'Figure Skating Mixed Team', "Figure Skating Women's Singles",
 "Gymnastics Women's Balance Beam",
 "Gymnastics Women's Floor Exercise",
 "Gymnastics Women's Horse Vault",
 "Gymnastics Women's Individual All-Around",
 "Gymnastics Women's Team All-Around",
 "Gymnastics Women's Team Portable Apparatus",
 "Gymnastics Women's Uneven Bars", "Judo Women's Extra-Lightweight",
 "Judo Women's Half-Heavyweight", "Judo Women's Half-Lightweight",
 "Judo Women's Half-Middleweight", "Judo Women's Heavyweight",
 "Judo Women's Lightweight", "Judo Women's Middleweight",
 "Rowing Women's Coxed Eights", "Rowing Women's Coxed Fours",
 "Rowing Women's Coxed Quadruple Sculls",
 "Rowing Women's Coxless Fours", "Rowing Women's Coxless Pairs",
 "Rowing Women's Double Sculls",
 "Rowing Women's Lightweight Double Sculls",
 "Rowing Women's Quadruple Sculls", "Rowing Women's Single Sculls",
 "Snowboarding Women's Boardercross",
 "Snowboarding Women's Giant Slalom",
 "Snowboarding Women's Halfpipe",
 "Snowboarding Women's Parallel Giant Slalom",
 "Snowboarding Women's Parallel Slalom",
 "Snowboarding Women's Slopestyle",
 "Speed Skating Women's 1,000 metres",
 "Speed Skating Women's 1,500 metres",
 "Speed Skating Women's 3,000 metres",
 "Speed Skating Women's 5,000 metres",
 "Speed Skating Women's 500 metres",
 "Speed Skating Women's Team Pursuit (6 laps)",
 "Swimming Women's 10 kilometres Open Water",
 "Swimming Women's 100 metres Backstroke",
 "Swimming Women's 100 metres Breaststroke",
 "Swimming Women's 100 metres Butterfly",
 "Swimming Women's 100 metres Freestyle",
 "Swimming Women's 200 metres Backstroke",
 "Swimming Women's 200 metres Breaststroke",
 "Swimming Women's 200 metres Butterfly",
 "Swimming Women's 200 metres Freestyle",
 "Swimming Women's 200 metres Individual Medley",
 "Swimming Women's 4 x 100 metres Freestyle Relay",
 "Swimming Women's 4 x 100 metres Medley Relay",
 "Swimming Women's 4 x 200 metres Freestyle Relay",
 "Swimming Women's 400 metres Freestyle",
 "Swimming Women's 400 metres Individual Medley",
 "Swimming Women's 50 metres Freestyle",
 "Swimming Women's 800 metres Freestyle", 'Tennis Mixed Doubles',
 "Tennis Women's Doubles", "Tennis Women's Singles",
 "Volleyball Women's Volleyball",
 "Weightlifting Women's Featherweight",
 "Weightlifting Women's Flyweight",
 "Weightlifting Women's Heavyweight",
 "Weightlifting Women's Light-Heavyweight",
 "Weightlifting Women's Lightweight",
 "Weightlifting Women's Middleweight",
 "Weightlifting Women's Super-Heavyweight",
 "Wrestling Women's Featherweight, Freestyle",
 "Wrestling Women's Flyweight, Freestyle",
 "Wrestling Women's Heavyweight, Freestyle",
 "Wrestling Women's Light-Heavyweight, Freestyle",
 "Wrestling Women's Lightweight, Freestyle",
 "Wrestling Women's Middleweight, Freestyle"];


// Setting yvalue
var yValue1 = [26.0, 31.0, 24.0, 19.0, 24.0, 24.0, 28.0, 34.0, 26.0, 29.0, 22.0, 28.0, 26.0, 28.0, 22.0, 25.0, 26.0, 25.0, 25.0, 19.0, 18.0, 18.0, 19.0, 19.0, 18.0, 27.0, 18.0, 25.0, 24.0, 28.0, 26.0, 23.0, 24.0, 26.0, 26.0, 22.0, 22.0, 28.0, 26.0, 26.0, 28.0, 24.0, 27.0, 30.0, 20.0, 20.0, 26.0, 26.0, 23.0, 24.0, 24.0, 23.0, 25.0, 24.0, 28.0, 22.0, 17.0, 18.0, 20.0, 21.0, 17.0, 19.0, 20.0, 19.0, 20.0, 19.0, 18.0, 21.0, 17.0, 18.0, 22.0, 18.0, 26.0, 26.0, 21.0, 24.0, 22.0, 25.0, 25.0, 21.0, 23.0, 23.0, 24.0, 24.0, 24.0, 20.0, 21.0, 27.0, 22.0]
var yValue2 = [6.069553805774278, 5.380577427821522, 5.46259842519685, 5.741469816272966, 5.46259842519685, 5.183727034120735, 5.708661417322834, 5.675853018372703, 5.741469816272966, 5.57742782152231, 5.380577427821522, 5.561023622047244, 5.511811023622047, 5.413385826771654, 5.741469816272966, 5.46259842519685, 5.396981627296588, 5.2001312335958, 5.232939632545932, 5.31496062992126, 5.019685039370079, 5.150918635170604, 5.134514435695538, 5.183727034120735, 5.118110236220472, 5.2493438320209975, 5.2001312335958, 5.05249343832021, 5.675853018372703, 5.2493438320209975, 5.31496062992126, 5.675853018372703, 5.429790026246719, 5.511811023622047, 5.905511811023622, 5.8727034120734904, 5.774278215223097, 5.774278215223097, 5.856299212598425, 5.8727034120734904, 5.708661417322834, 6.003937007874016, 5.938320209973753, 5.610236220472441, 5.413385826771654, 5.347769028871391, 5.626640419947506, 5.511811023622047, 5.2493438320209975, 5.544619422572178, 5.479002624671916, 5.511811023622047, 5.511811023622047, 5.413385826771654, 5.544619422572178, 5.675853018372703, 5.675853018372703, 5.610236220472441, 5.675853018372703, 5.692257217847769, 5.741469816272966, 5.675853018372703, 5.6430446194225725, 5.708661417322834, 5.741469816272966, 5.741469816272966, 5.675853018372703, 5.790682414698162, 5.741469816272966, 5.675853018372703, 5.8727034120734904, 5.708661417322834, 5.7578740157480315, 5.774278215223097, 5.741469816272966, 5.905511811023622, 5.085301837270341, 4.986876640419948, 5.413385826771654, 5.31496062992126, 5.183727034120735, 5.216535433070866, 5.6430446194225725, 5.347769028871391, 5.085301837270341, 5.725065616797901, 5.216535433070866, 5.150918635170604, 5.446194225721785]
var yValue3 = [163.17000000000002, 112.455, 132.3, 165.375, 154.35, 110.25, 152.145, 135.60750000000002, 165.375, 127.89, 123.48, 143.32500000000002, 130.095, 149.94, 136.71, 144.4275, 111.3525, 100.3275, 102.5325, 110.25, 99.22500000000001, 103.635, 103.635, 99.22500000000001, 101.43, 125.685, 100.3275, 105.84, 165.375, 114.66, 138.915, 216.09, 127.89, 154.35, 167.58, 168.6825, 146.6325, 162.0675, 163.17000000000002, 166.4775, 126.78750000000001, 167.58, 165.375, 143.32500000000002, 134.505, 132.3, 158.76, 132.3, 119.07000000000001, 138.915, 141.12, 143.32500000000002, 134.505, 136.71, 141.12, 143.32500000000002, 138.915, 140.0175, 140.0175, 147.735, 143.32500000000002, 134.505, 138.915, 141.12, 141.12, 141.12, 141.12, 146.6325, 138.915, 134.505, 134.505, 136.71, 138.915, 149.94, 141.12, 158.76, 116.86500000000001, 105.84, 165.375, 152.145, 127.89, 138.915, 264.6, 125.685, 105.84, 162.0675, 152.145, 121.275, 134.505]


// Setting textvalue 
var textValue1 = ('Female Age')
var textValue2 = ('Female Height')
var textValue3 = ('Female Weight')


function barChart1() {
  var barChart = {
    name: "Gold",
    x: xValue,
    y: yValue1,
    type: 'bar',
    text: yValue1.map(String),
    textposition: 'auto',
    hoverinfo: true,
    opacity: 0.5,
    marker: {
      color: 'rgba(218,165,32,.7)',
      line: {
        color: 'rgba(218,165,32,1)',
        width: 1.5
      }
    }
  };

  var layout = {
    title: {
      text: textValue1,
      font: {
        size: 20,
      }},
    autosize: true,
    width: 1100,
    height: 800,
    margin: {
      l: 50,
      r: 50,
      b: 300,
      t: 100,
      pad: 4},
    xaxis: {
      categoryorder:'total descending',
      title: {
        text: '',
        font: {
          size: 20,
        }}},
    yaxis: {
        range: [0, 35]
        },

  };

  Plotly.newPlot("plot1", [barChart], layout);
}



function barChart2() {
  var barChart = {
    name: "Gold",
    x: xValue,
    y: yValue2,
    type: 'bar',
    text: yValue2.map(String),
    textposition: 'auto',
    hoverinfo: true,
    opacity: 0.5,
    marker: {
      color: 'rgba(218,165,32,.7)',
      line: {
        color: 'rgba(218,165,32,1)',
        width: 1.5
      }
    }
  };

  var layout = {
    title: {
      text: textValue2,
      font: {
        size: 20,
      }},
    autosize: true,
    width: 1100,
    height: 800,
    margin: {
      l: 50,
      r: 50,
      b: 300,
      t: 100,
      pad: 4},
    xaxis: {
      categoryorder:'total descending',
      title: {
        text: '',
        font: {
          size: 20,
        }}},
    yaxis: {
        range: [0, 7]
        },

  };

  Plotly.newPlot("plot2", [barChart], layout);
}

function barChart3() {
  var barChart = {
    name: "Gold",
    x: xValue,
    y: yValue3,
    type: 'bar',
    text: yValue3.map(String),
    textposition: 'auto',
    hoverinfo: true,
    opacity: 0.5,
    marker: {
      color: 'rgba(218,165,32,.7)',
      line: {
        color: 'rgba(218,165,32,1)',
        width: 1.5
      }
    }
  };

  var layout = {
    title: {
      text: textValue3,
      font: {
        size: 20,
      }},
    autosize: true,
    width: 1100,
    height: 800,
    margin: {
      l: 50,
      r: 50,
      b: 300,
      t: 100,
      pad: 4},
    xaxis: {
      categoryorder:'total descending',
      title: {
        text: '',
        font: {
          size: 20,
        }}},
    yaxis: {
        range: [0, 170]
        },

  };

  Plotly.newPlot("plot3", [barChart], layout);
}

barChart1();
barChart2();
barChart3();


