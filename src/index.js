
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (Array.isArray(matrix) && arguments.length) {
    const mergerArray = [];

    matrix.forEach((item, index) => {
      index % 2 === 0 ? mergerArray.push(item) : mergerArray.push(item.reverse());
    });

    return mergerArray.flat(Infinity);
  };
  
  return [];
}