const yearRange = (startYear, endYear)=> Array(endYear - startYear + 1).fill(startYear).map((x, y) => x + y)

module.exports = yearRange;