// Write your solution in this file!
const employee = {
    name: "Jason",
    streetAddress: "2114 Hearty Drive" 
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee, "name": "Sam", "streetAddress": "11 Broadway"}
    return newEmployee;
};
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
};
function deleteFromEmployeeByKey(employee, key, value) {
    const anotherNewEmployee = {...employee[key]};
    delete anotherNewEmployee[key]
    return anotherNewEmployee;
};
function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    delete employee[key];
    return employee;
};