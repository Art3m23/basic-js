module.exports = function repeater(str, opt) {
  str = String(str)
  let options = {
    repeatTimes: ('repeatTimes' in opt && typeof(opt.repeatTimes) === 'number') ? opt.repeatTimes : 1, 
    separator: 'separator' in opt ? opt.separator : '+', 
    addition: 'addition' in opt ? String(opt.addition) : '', 
    additionRepeatTimes: ('additionRepeatTimes' in opt && typeof(opt.additionRepeatTimes) === 'number') ? opt.additionRepeatTimes : 1, 
    additionSeparator: 'additionSeparator' in opt ? opt.additionSeparator : '|' 
  }
  let str1 = ''
  if (options.additionRepeatTimes > 0) {
    str1 = options.addition;
    for (let i = 1; i < options.additionRepeatTimes; i++) {
      str1 += options.additionSeparator + options.addition
    }
  }
  let s = str + str1
  for (let i = 1; i < options.repeatTimes; i++) {
      s += options.separator + str + str1
  } 
  return s
};
  
