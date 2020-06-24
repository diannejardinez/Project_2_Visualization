init();

function init() {

    // Feel free to change or delete any of the code you see in this editor!
    var svg = d3.select(".barChartRace").append("svg")
      .attr("width", 960)
      .attr("height", 600);
    
    var top_n = 10;
    var tickDuration = 3000;

    var height = 600;
    var width = 960;
    
    const margin = {
      top: 80,
      right: 0,
      bottom: 5,
      left: 0
    };
  
    let barPadding = (height-(margin.bottom+margin.top))/(top_n*5);
      
    let title = svg.append('text')
     .attr('class', 'title')
     .attr('y', 24)
     .html('Olympics Summer Games Medal Tally (1980 - 2016)');
  
    let subTitle = svg.append("text")
     .attr("class", "subTitle")
     .attr("y", 55)
     .text("Top 10 Countries");
   
    let caption = svg.append('text')
     .attr('class', 'caption')
     .attr('x', width-5)
     .attr('y', height-5)
     .style('text-anchor', 'end')
     .html('Source: WikiPedia');

    let year = 1980;

    console.log('@line 44');
    console.log(year);
    
    d3.csv('../static/assets/output/MedalsByYear.csv').then(function(data) {
    // d3.json('/MedalsByYear') // flask endpoint

      //if (error) throw error;
      
      console.log('@line 52');
      
      data.forEach(d => {
        d.Year = +d.Year,
        d.Medals = +d.Medals,
        d.Medals = isNaN(d.Medals) ? 0 : d.Medals,
        d.colour = d3.hsl(Math.random()*360,0.75,0.75)
      });
      
      console.log(data);
    
      let yearSlice = data.filter(d => d.Year == year && !isNaN(d.Medals))
                          .sort((a,b) => b.Medals - a.Medals)
                          .slice(0, top_n);
  
      yearSlice.forEach((d,i) => d.rank = i);
    
      console.log('yearSlice: ', yearSlice)
  
      let x = d3.scaleLinear()
                .domain([0, d3.max(yearSlice, d => d.Medals)])
                .range([margin.left, width-margin.right-65]);
  
      let y = d3.scaleLinear()
                .domain([top_n, 0])
                .range([height-margin.bottom, margin.top]);
  
      let xAxis = d3.axisTop()
                    .scale(x)
                    .ticks(width > 50 ? 5:2)
                    .tickSize(-(height-margin.top-margin.bottom))
                    .tickFormat(d => d3.format(',')(d));
  
      svg.append('g')
          .attr('class', 'axis xAxis')
          .attr('transform', `translate(0, ${margin.top})`)
          .call(xAxis)
          .selectAll('.tick line')
          .classed('origin', d => d == 0);

      console.log('line 88');
  
      svg.selectAll('rect.bar')
          .data(yearSlice, d => d.Nation)
          .enter()
          .append('rect')
          .attr('class', 'bar')
          .attr('x', x(0)+1)
          .attr('width', d => x(d.Medals))
          .attr('y', d => y(d.rank)+5)
          .attr('height', y(1)-y(0)-barPadding)
          .style('fill', d => d.colour);

      console.log('line 101');
      
      
      svg.selectAll('text.label')
          .data(yearSlice, d => d.Nation)
          .enter()
          .append('text')
          .attr('class', 'label')
          .attr('x', d => x(d.Medals)-8)
          .attr('y', d => y(d.rank)+5+((y(1)-y(0))/2)+1)
          .style('text-anchor', 'end')
          .html(d => d.Nation);
     
      svg.selectAll('text.valueLabel')
          .data(yearSlice, d => d.Nation)
          .enter()
          .append('text')
          .attr('class', 'valueLabel')
          .attr('x', d => x(d.Medals)+5)
          .attr('y', d => y(d.rank)+5+((y(1)-y(0))/2)+1)
          .text(d => d3.format(',.0f')(d.Medals));

      let yearText = svg.append('text')
                        .attr('class', 'yearText')
                        .attr('x', width-margin.right)
                        .attr('y', height-25)
                        .style('text-anchor', 'end')
                        .html(~~year)
                        .call(halo, 10);
    
      let ticker = d3.interval(e => {

          yearSlice = data.filter(d => d.Year == year && !isNaN(d.Medals))
                          .sort((a,b) => b.Medals - a.Medals)
                          .slice(0,top_n);

          yearSlice.forEach((d,i) => d.rank = i);
    
          console.log('IntervalYear: ', yearSlice);

          x.domain([0, d3.max(yearSlice, d => d.Medals)]); 
    
          svg.select('.xAxis')
              .transition()
              .duration(tickDuration)
              .ease(d3.easeLinear)
              .call(xAxis);
        
          let bars = svg.selectAll('.bar').data(yearSlice, d => d.Nation);
    
          bars
            .enter()
            .append('rect')
            .attr('class', d => `bar ${d.Nation.replace(/\s/g,'_')}`)
            .attr('x', x(0)+1)
            .attr( 'width', d => x(d.Medals))
            .attr('y', d => y(top_n+1)+5)
            .attr('height', y(1)-y(0)-barPadding)
            .style('fill', d => d.colour)
            .transition()
              .duration(tickDuration)
              .ease(d3.easeLinear)
              .attr('y', d => y(d.rank)+5);
          
          bars
            .transition()
              .duration(tickDuration)
              .ease(d3.easeLinear)
              .attr('width', d => x(d.Medals))
              .attr('y', d => y(d.rank)+5);
            
          bars
            .exit()
            .transition()
              .duration(tickDuration)
              .ease(d3.easeLinear)
              .attr('width', d => x(d.Medals))
              .attr('y', d => y(top_n+1)+5)
              .remove();

          let labels = svg.selectAll('.label')
            .data(yearSlice, d => d.Nation);
    
          labels
            .enter()
            .append('text')
            .attr('class', 'label')
            .attr('x', d => x(d.Medals)-8)
            .attr('y', d => y(top_n+1)+5+((y(1)-y(0))/2))
            .style('text-anchor', 'end')
            .html(d => d.Nation)    
            .transition()
              .duration(tickDuration)
              .ease(d3.easeLinear)
              .attr('y', d => y(d.rank)+5+((y(1)-y(0))/2)+1);

          labels
            .transition()
            .duration(tickDuration)
              .ease(d3.easeLinear)
              .attr('x', d => x(d.Medals)-8)
              .attr('y', d => y(d.rank)+5+((y(1)-y(0))/2)+1);
    
          labels
            .exit()
            .transition()
              .duration(tickDuration)
              .ease(d3.easeLinear)
              .attr('x', d => x(d.Medals)-8)
              .attr('y', d => y(top_n+1)+5)
              .remove();

          let valueLabels = svg.selectAll('.valueLabel').data(yearSlice, d => d.Nation);
    
          valueLabels
            .enter()
            .append('text')
            .attr('class', 'valueLabel')
            .attr('x', d => x(d.Medals)+5)
            .attr('y', d => y(top_n+1)+5)
            .text(d => d3.format(',.0f')(d.Medals))
            .transition()
              .duration(tickDuration)
              .ease(d3.easeLinear)
              .attr('y', d => y(d.rank)+5+((y(1)-y(0))/2)+1);
            
          valueLabels
            .transition()
              .duration(tickDuration)
              .ease(d3.easeLinear)
              .attr('x', d => x(d.Medals)+5)
              .attr('y', d => y(d.rank)+5+((y(1)-y(0))/2)+1)
              .tween("text", function(d) {
                  let i = d3.interpolateRound(d.Medals, d.Medals);
                  return function(t) {
                    this.textContent = d3.format(',')(i(t));
                  };
              });

            valueLabels
              .exit()
              .transition()
                .duration(tickDuration)
                .ease(d3.easeLinear)
                .attr('x', d => x(d.Medals)+5)
                .attr('y', d => y(top_n+1)+5);
              
            yearText.html(~~year);
      
            if(year == 2016) ticker.stop();

            year = year + 4;

      },4000);

    });
      
  const halo = function(text, strokeWidth) {
    text.select(function() { return this.parentNode.insertBefore(this.cloneNode(true), this); })
      .style('fill', '#ffffff')
      .style( 'stroke','#ffffff')
      .style('stroke-width', strokeWidth)
      .style('stroke-linejoin', 'round')
      .style('opacity', 1);
    
  }   

}