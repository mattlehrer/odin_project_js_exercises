let findTheOldest = function(people) {
  return people.sort((a, b) => ((b.yearOfDeath || 2019) - b.yearOfBirth) - ((a.yearOfDeath || 2019) - a.yearOfBirth))[0]
}

module.exports = findTheOldest
