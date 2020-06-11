// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers,element){
  let result = drivers.filter(driver => driver.toLowerCase().indexOf(element.toLowerCase()) !== -1)
  return result
}


function fuzzyMatch(drivers,element){
  let result = drivers.filter(driver => driver.indexOf(element) === 0)
  return result
}