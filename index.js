// Code your solutions in this file
const employees = ['Ada', 'Brendan', 'Ali']

function printBadges(emplayees) {
  
  for  (let i = 0; i < employees.length; i++)
{
  console.log(`LOG: Welcome ${employees[i]}! You are employee #${i + 1}.`)
  
}
return employees
  
}