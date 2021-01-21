module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let k = 1
    arr.forEach(element => {
      if (Array.isArray(element)) {
        k = Math.max(k, 1 + this.calculateDepth(element))
      }  
    })
    return k
  }
};
