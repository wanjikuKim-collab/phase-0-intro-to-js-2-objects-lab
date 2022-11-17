// Write your solution in this file
const employee = {};
employee.name = "Kimmy";
employee.streetAddress = "Riverside"

employee;

//we'll use the spread
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee}//copying contents from the employee object
    newEmployee[key]=value;//modifying object using the bracket notation
   
     return  newEmployee;    
}

const nonDestructiveUpdatedEmployee = updateEmployeeWithKeyAndValue(
    employee,
    "name",
    "Sam"
)

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key] =value;//adding an object using the dot notation

    return employee;
}

const destructiveEmployeeUpdates = destructivelyUpdateEmployeeWithKeyAndValue(
    employee,
    "name",
    "Sam"
    )
  console.log (destructiveEmployeeUpdates)

function deleteFromEmployeeByKey(employee,key){
    const employeeCopy = {...employee}   
    delete employeeCopy["name"]

    return employeeCopy;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    const newEmployee = delete employee["name"];

    return employee;

}
// let newEmployee = destructivelyDeleteFromEmployeeByKey(employee, 'name');
