// draw2(){
//     var matchKeys = [
//       "Case",
//       "Heat Rejection",
//       "Heating",
//       "Heat Recovery",
//       "Interior Lighting",
//       "Exterior Lighting",
//       "Generators",
//       "Refrigeration",
//       "Humidification",
//       "Interior Equipment",
//       "Exterior Equipment",
//       "Water Systems",
//       "Cooling",
//       "Fans",
//       "Pumps"
//     ]
//     var formatSum = d3.format(".0f");
    
//     var padding = 10;
    
//     var radius = d3.scaleSqrt()
//         .range([0, 250]);
    
//     var colors = {
//       "Heat Rejection":"#9F5164",
//       "Heating":"#cb2e2e", 
//       "Heat Recovery":"#ED7D30", 
//       "Interior Lighting":"#FFDC6F", 
//       "Exterior Lighting":"#F4E1AF", 
//       "Generators":"#EDEDEE", 
//       "Refrigeration":"#dfdfe1",
//       "Humidification":"#CDE7CA",
//       "Interior Equipment":"#B9EACD",
//       "Exterior Equipment":"#B5D0DD",
//       "Water Systems":"#66A5D8",
//       "Cooling":"#3076B6",
//       "Fans":"#604987",
//       "Pumps":"#9d5282"
//     }
//     var shortName = {
//       "Heat Rejection":"Heat Rej",
//       "Heating":"Heating", 
//       "Heat Recovery":"HeatRcy", 
//       "Interior Lighting":"IntLight", 
//       "Exterior Lighting":"ExtLight", 
//       "Generators":"Generator", 
//       "Refrigeration":"Refrigeration",
//       "Humidification":"Humidification",
//       "Interior Equipment":"Int Equip",
//       "Exterior Equipment":"Ext Equip",
//       "Water Systems":"DHW",
//       "Cooling":"Cooling",
//       "Fans":"Fans",
//       "Pumps":"Pumps"
//     }
    
//     var arc = d3.arc()
//         .padRadius(63);
    
//     var pie = d3.pie()
//         .sort(null)
//         .padAngle(0.05)
//         .value(function(d ) {  return d["population"]; });
    
//     d3.csv("/data.csv")
//     .then((d)  => {
//         var keys = d.columns;
//         var data = d.map((current,index,data)=>{
        

//           let values = Object.keys(current).map(key=>{
//             let value = current[key]||"0";
//             return {
//               Name: key,
//               Value:parseFloat(value)
//             };
//           }).slice(1);

//           var total = d3.sum(values.map(i=>i.Value));

//           return {
//             Case: current[0],
//             Total: total,
//             Items: values.map(
//               (item)=>{
                
//                 return {
//                   Name: item.Name,
//                   Value: item.Value,
//                   Percent:d3.format(",.1%")(item.Value/total)
//               };
              
//             })

//           };
            
//         })
//       })
//       .catch((error)=>{if (error) throw error;}
//       );


//     d3.csv("data.csv", function(d, i, columns) {
//       var total = d3.sum(columns.slice(1), function(key) { return +d[key]; })
      
//       return {
//         state: d.Case,
//         sum: total,
//         ages: columns.slice(1).map(function(key) {
          
//             return {
//             age: key,
//             population: d[key],
//             percent:d3.format(",.1%")(d[key]/total)
//           };
          
          
          
//         })
//       };
//     }, function(error, data) {
//       if (error) throw error;
    
//       radius.domain([0, d3.max(data, function(d) { return d.sum; })]);
    
//       var legend = d3.select("body").append("svg")
//           .attr("class", "legend")
//           .attr("width", 120)
//           .attr("height", (data.columns.length - 1) * 20)
//         .selectAll("g")
//           .data(matchKeys.slice(1))
//         .enter().append("g")
//           .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });
    
//       legend.append("rect")
//           .attr("width", 18)
//           .attr("height", 18)
//           .style("fill", function(d) {  return colors[d]; });
    
      
//       legend.append("text")
//           .attr("x", 24)
//           .attr("y", 9)
//           .attr("dy", ".35em")
//           .text(function(d) { return d; });
//     //console.log("dd"+data);
//       var svg = d3.select("body").selectAll(".pie")
//           .data(data)
//         .enter().append("svg")
//           .attr("class", "pie")
//           .each(multiple)
//         .select("g");
    
//       var label = svg.append("text")
//           .attr("class", "label");
    
//       label.append("tspan")
//           .attr("class", "label-name")
//           .attr("x", 0)
//           .attr("dy", "-1.768em")
//       .attr("fill", "#afafaf")
//           .text(function(d) { return d.state; });
    
//       label.append("tspan")
//           .attr("class", "label-value")
//           .attr("x", 0)
//           .attr("dy", "0.974400000000001em")
//           .text(function(d) { return formatSum(d.sum); });
      
//         label.append("tspan")
//           .attr("class", "label-unit")
//           .attr("x", 0)
//           .attr("dy", "1.55584em")
//       .attr("fill", "#595959")
//           .text("kBTU/Sf");
    
//       function multiple(d) {
//         var r = radius(d.sum);
    
//         var svg = d3.select(this)
//             .attr("width", r * 2)
//             .attr("height", r * 2)
//           .append("g")
//             .attr("transform", "translate(" + r + "," + r + ")");
    
        
        
//         var filted = []
//         d.ages.forEach(function(d) {
//           var dataValue = d.population;
          
//           if(matchKeys.includes(d.age)){}
//           if(matchKeys.includes(d.age) && dataValue>0){
//             return filted.push(d);
//           }; 
//         });
        
//         var filted2 = filted.sort(function(a, b) {
//           return matchKeys.indexOf(a.age) - matchKeys.indexOf(b.age);
//         });
        
//         console.log(filted2);
//         var data = pie(filted2);
//         var svg = svg.selectAll(".arc")
//             .data(data)
//             .enter();
        
        
//         var g = svg.append("g")
//             .attr("class", "arc");
//         g.append("path").attr("d", arc.outerRadius(r).innerRadius(r * 0.75))
//             .style("fill", function(d) { return colors[d.data.age]; });
        
        
//         svg.append("text")
//         .attr("text-anchor","middle")
//           .attr("transform", function(d) { 
//             return "translate(" + arc.centroid(d) + ")"; 
//           })
//           .attr("dy", "-0.2em")
//           .attr("dx", "0em")
//           .attr("font-size", "1.2em")
//           .text(function(d) { return d.data.percent; });
        
//         svg.append("text")
//         .attr("text-anchor","middle")
//           .attr("transform", function(d) { 
//             return "translate(" + arc.centroid(d) + ")"; 
//           })
//           .attr("dy", "1.5em")
//           .attr("dx", "0em")
//           .attr("font-size", "1.2em")
//           .text(function(d) { return shortName[d.data.age]; });
        
//       }
//     });
//   }