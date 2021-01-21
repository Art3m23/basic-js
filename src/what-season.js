module.exports = function getSeason(date) {
  if (arguments.length > 0) {
    let month = date.getUTCMonth();

    switch (month) {
      case 11:
      case 0:
      case 1:
        season = 'winter';
        break;
      case 2:
      case 3:
      case 4:
        season = 'spring';
        break;
      case 5:
      case 6:
      case 7:
        season = 'summer';
        break;
      default:
        season = 'autumn';
    }
	return season
  }
  else return 'Unable to determine the time of year!' 
};
