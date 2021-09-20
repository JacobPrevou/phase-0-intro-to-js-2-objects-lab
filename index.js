// // Write your solution in this file!
 const employee = {
     name: "Keith",
     streetAddress: "11 Broadway"
 }

 function updateEmployeeWithKeyAndValue(employeeObj, key, value) {
    return {
        ...employeeObj,
        [key]: value
    };
 };

 function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
        employee[key] = value;
        return employee;
    };
 const employeeNew = destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "12 Broadway");

function deleteFromEmployeeByKey(employee, key)  {
    const employeeDel = {...employee};
    delete employee.streetAddress;
    return {
    employeeDel
    };
}

 function destructivelyDeleteFromEmployeeByKey(employee, key)  {
    delete employee.name; 
    return {
     employee
     };
}
const newEmployee = destructivelyDeleteFromEmployeeByKey(employee, "name")

