function selectFilters() {
    var country_name = d3.select("#country_name").property("value");
    var season = d3.select("#season").property("value");
    var year = d3.select("#year").property("value");

    console.log(country_name, season, year);
    buildTable(country_name, season, year)
}


function buildTable(country_name, season, year) {

    query_endpoint = `/api/all-medal-winners/${country_name}/${season}/${year}`
    console.log(query_endpoint)

    d3.json(query_endpoint).then(function(all_data) {

        console.log(all_data);

        d3.select("tbody").html("");
        
        d3.select("tbody")
            .selectAll("tr")
            .data(all_data)
            .enter()
            .append("tr")
            .html(function(d) {
                return `<td>${d.games}</td><td>${d.country}</td><td>${d.name}</td>
                    <td>${d.sex}</td><td>${d.sport}</td><td>${d.event}</td><td>${d.medal}</td>`;
            });

    });
}


// Attach event to listen to changes to each filter
d3.selectAll("#filter-btn").on("click", selectFilters);