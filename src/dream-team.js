module.exports = function createDreamTeam(members) {
 let s = false
  if (Array.isArray(members)) {
    let TeamName = members.reduce(function (teamName, i) {
      if (typeof(i) === 'string') {
        teamName.push(i.trim()[0].toUpperCase())
      }
      return teamName
    }, [])
    if (TeamName !== []) {
      s = TeamName.sort().join('')
    }
  }
  return s
};
