
function createPlot(indexNumber) { 
     d3.json("data/combined_bodycomp_age_test.json").then((importedData) => {
       // console.log(importedData)

      // Setting Events
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
      var yValue1 = [importedData[indexNumber].age,importedData[indexNumber].height, importedData[indexNumber].weight]
      var yValue2 = [importedData[indexNumber +1].age,importedData[indexNumber + 1].height, importedData[indexNumber + 1].weight]
      var yValue3 = [importedData[indexNumber + 2].age,importedData[indexNumber +2].height, importedData[indexNumber +2].weight]

      // Setting textvalue 
      var textValue1 = (importedData[indexNumber].event + " for "+ "<br>" + importedData[indexNumber].country + " in " + importedData[indexNumber].year)
      var textValue2 = (importedData[indexNumber +1].event + " for "+ "<br>" + importedData[indexNumber +1].country + " in " + importedData[indexNumber +1].year)
      var textValue3 = (importedData[indexNumber +2].event + " for "+ "<br>" + importedData[indexNumber +2].country + " in " + importedData[indexNumber +2].year)

    // ONLY GETS THE FIRST THREE IN INDEX - WANT TO GET FIRST THREE UNIQUE eventS
      function barChart1() {


        var barChart = {
          name: "Gold",
          x: xValue,
          y: yValue1,
          type: 'bar',
          text: yValue1.map(String),
          textposition: 'auto',
          hoverinfo: 'none',
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
              size: 12,
            }},
          autosize: true,
          width: 500,
          height: 500,
          margin: {
            l: 50,
            r: 50,
            b: 100,
            t: 100,
            pad: 4},
          xaxis: {
            title: {
              text: '(Metric System)',
              font: {
                size: 10,
              }}}
        };

        Plotly.newPlot("plot1", [barChart], layout);
      }
      
      
      barChart1();

    }); 
}


