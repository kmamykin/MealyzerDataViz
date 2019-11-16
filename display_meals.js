// !preview r2d3 data=tibble(src = c("/Users/klyment/Dropbox/MealyzerData/2254/images/medium/3915.jpg")), container = "div", options=list(ncol=8, nrow=2, rotate=0)
//
// r2d3: https://rstudio.github.io/r2d3
//
const imageSize = {
  width: Math.floor(width/options.ncol)-1,
  height: Math.floor(height/options.nrow)-1
};

div
  //.style('border', "3px solid red")
  .style('height', "100%")
  .style('display', 'flex')
  .style('flex-flow', 'row wrap')
  .style('box-sizing', 'border-box')
  .selectAll('div')
  .data(data)
  .enter()
    .append('div')
    .style('width', d =>`${imageSize.width}px`)
    .style('height', d =>`${imageSize.height}px`)
    .append('img')
      .attr('src', d =>`${d["src"]}`)
      .style('transform-origin', 'top left')
      .attr('width', d => options.rotate === 0 ? `${imageSize.width}px` : `${imageSize.height}px`)
      .attr('height', d => options.rotate === 0 ? `${imageSize.height}px` : `${imageSize.width}px`)
      .style('transform', d => options.rotate === 0 ? `translate(0, 0)` : `rotate(${options.rotate}deg) translate(-${imageSize.height}px, 0)`)
