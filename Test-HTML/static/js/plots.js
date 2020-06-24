

var xValue = ['Age', 'Height', 'Weight'];

// Women's Basketball
var yValue2 = [26, 185, 74];

var trace2 = {
  name: "Gold",
  x: xValue,
  y: yValue2,
  type: 'bar',
  text: yValue2.map(String),
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


var data2 = [trace2];
// var data = [trace1,trace2,trace3];

var layout2 = {
  // title: "Age and Body Composition for Men's Basketball",
  title: {
    text: "Basketball Women's Basketball",
    font: {
      size: 12,
    }
  },
  autosize: false,
  width: 250,
  height: 500,
  margin: {
    l: 50,
    r: 50,
    b: 100,
    t: 100,
    pad: 4
  },
  xaxis: {
    title: {
      text: '(Metric System)',
      font: {
        size: 10,
      }
    }
  }
};



// Women's Archery
var yValue1 = [21, 167, 59];

var trace1 = {
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


var data1 = [trace1];
// var data = [trace1,trace2,trace3];

var layout1 = {
  title: {
    text: "Archery Women's Team",
    font: {
      size: 12,
    }
  },
  autosize: false,
  width: 250,
  height: 500,
  margin: {
    l: 50,
    r: 50,
    b: 100,
    t: 100,
    pad: 4
  },
  xaxis: {
    title: {
      text: '(Metric System)',
      font: {
        size: 10,
      }
    }
  }
};


// Women's Boxing
var yValue3 = [31, 164, 51];

var trace3 = {
  name: "Gold",
  x: xValue,
  y: yValue3,
  type: 'bar',
  text: yValue3.map(String),
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


var data3 = [trace3];
// var data = [trace1,trace2,trace3];

var layout3 = {
  title: {
    text: "Boxing Women's Flyweight",
    font: {
      size: 12,
    }
  },
  autosize: false,
  width: 250,
  height: 500,
  margin: {
    l: 50,
    r: 50,
    b: 100,
    t: 100,
    pad: 4
  },
  xaxis: {
    title: {
      text: '(Metric System)',
      font: {
        size: 10,
      }
    }
  }
};

Plotly.newPlot('plot1', data1, layout1);

Plotly.newPlot('plot2', data2, layout2);

Plotly.newPlot('plot3', data3, layout3);


