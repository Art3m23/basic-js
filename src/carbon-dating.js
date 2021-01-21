const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof(sampleActivity) === 'string') {
    let numberSAct = parseFloat(sampleActivity)
    if (numberSAct  < MODERN_ACTIVITY && numberSAct > 0) {
        const k = 0.693 / HALF_LIFE_PERIOD
        const t = Math.log(MODERN_ACTIVITY / numberSAct ) / k
        let Age = Math.ceil(t)
		return Age
    }
    else return false
  }
  else return false
};
