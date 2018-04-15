import * as d3 from "d3";

const colors: {[key: string]: string} = {
  "Heat Rejection": "#9F5164" ,
  "Heating":"#cb2e2e", 
  "Heat Recovery":"#ED7D30", 
  "Interior Lighting":"#FFDC6F", 
  "Exterior Lighting":"#F4E1AF", 
  "Generators":"#EDEDEE", 
  "Refrigeration":"#dfdfe1",
  "Humidification":"#CDE7CA",
  "Interior Equipment":"#B9EACD",
  "Exterior Equipment":"#B5D0DD",
  "Water Systems":"#66A5D8",
  "Cooling":"#3076B6",
  "Fans":"#604987",
  "Pumps":"#9d5282"
}

export class Donut {
  private _container: d3.Selection<any, {}, any, any>;

  constructor(parameters: string) {
    this._container = d3.select(parameters);
    this.draw();
  }

  draw() {

    d3.csv("/data.csv")
      .then((d) => {
        var keys = d.columns;
        Donut.drawLegend(keys, this._container);
        let data = d.map<pieDataType>((current) => Donut.formatData(current));
        this.drawPies(data, this._container);
        console.log(data);
      })
      .catch((error) => { if (error) throw error; }
      );
  }

  static formatData(current: d3.DSVRowString) {

    let caseName: string = "";

    let values = Object.keys(current).map(key => {
      let value = current[key] || "0";
      if (key.toUpperCase() === "CASE") { caseName = value }
      return {
        Name: key,
        Value: parseFloat(value)
      };
    }).slice(1);

    var total = d3.sum(values.map(i => i.Value));

    let clean: pieDataType = {
      Case: caseName,
      Total: total,
      Items: values.map(
        (item) => {

          return {
            Name: item.Name,
            Value: item.Value,
            Percent: d3.format(",.1%")(item.Value / total)
          };

        })

    };

    return clean;
  }
  static drawPie(d: pieDataType, svg: d3.Selection<d3.BaseType, {}, any, any>) {

    let radius = d3.scaleSqrt().range([0, 250]);
    let mx = d3.max(d.Items, i => i.Value) || 0;
    radius.domain([0, mx]);

    var r = radius(d.Total);
    var svg = svg
      .attr("width", r * 2)
      .attr("height", r * 2)
      .append("g")
      .attr("transform", "translate(" + r + "," + r + ")");

    let matchKeys = Object.keys(colors);

    var filted = d.Items
      .filter(item => item.Value > 0)
      .sort((a, b) => {
        return matchKeys.indexOf(a.Name) - matchKeys.indexOf(b.Name);
      });


    var arc = d3.arc<d3.PieArcDatum<pieDataItemType>>()
      .padRadius(60)
      .outerRadius(d => {
        if (d.data.Value > 10) {
          return r;
        } else {
          return r * 0.95;
        }
      })
      .innerRadius(r * 0.75);

    var pie = d3.pie<pieDataItemType>()
      .value(d => d.Value)
      .sort(null)
      .padAngle(0.05);


    var arcs = svg.selectAll(".arc")
      .data(pie(filted))
      .enter();

    var g = arcs.append("g")
      .attr("class", "arc")
      .append("path")
      .attr("d", arc)
      .style("fill", (i) => colors[i.data.Name]);

    let tfx = (d: d3.PieArcDatum<pieDataItemType>): string => `translate(${arc.centroid(d)})`;

    arcs.append("text")
      .attr("text-anchor", "middle")
      .attr("transform", tfx)
      .attr("dy", "-0.2em")
      .attr("dx", "0em")
      .attr("font-size", "1.2em")
      .text((d) => d.data.Percent);
    
    arcs.append("text")
      .attr("text-anchor", "middle")
      .attr("transform", tfx)
      .attr("dy", "1.2em")
      .attr("dx", "0em")
      .attr("font-size", "1.2em")
      .text((d) => d.data.Name);

  }

  drawPies(data: pieDataType[], container:d3.Selection<any, {}, any, any>) {
    container
      .selectAll(".pie")
      .data(data)
      .enter()
      .append("svg")
      .attr("class", "pie")
      .each(function (m){ return Donut.drawPie(m, d3.select(this))});
  }

  static drawLegend(keys: string[], container:d3.Selection<any, {}, any, any>) {
    let matchKeys = Object.keys(colors);
    var filted = keys
      .sort((a, b) => {
        return matchKeys.indexOf(a) - matchKeys.indexOf(b);
      });

    var legend = container.append("svg")
      .attr("class", "legend")
      .attr("width", 120)
      .attr("height", (filted.length - 1) * 20)
      .selectAll("g")
      .data(filted.slice(1))
      .enter().append("g")
      .attr("transform", function (d, i) { return "translate(0," + i * 20 + ")"; });

    legend.append("rect")
      .attr("width", 18)
      .attr("height", 18)
      .style("fill", function (d) { return colors[d]; });

    legend.append("text")
      .attr("x", 24)
      .attr("y", 9)
      .attr("dy", ".35em")
      .text(function (d) { return d; });
  }
}
  
interface pieDataType{
  Case: string,
  Total: number,
  Items: pieDataItemType[]
}

interface pieDataItemType{
  Name: string,
  Value: number,
  Percent:string
}
  
  
