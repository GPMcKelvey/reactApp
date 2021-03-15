const employees = [
    {name: 'Jim', specialty: "Pranks", dundies: 4},
    { name: 'Pam', specialty: 'Art' , dundies: 7},
    { name: 'Dwight', specialty: 'Beet Farming', dundies: 1},
    { name: 'Angela', specialty: 'Cats', dundies: 2},
    { name: 'Michael', specialty: 'Improv', dundies: 28}
]


let employee_names = [];

for(let i= 0; i < employees.length; i++) {
    if(employees[i].dundies >= 5) {
        employee_names.push(employees[i].name);
    }
}

console.log(employee_names);

const employeeNames = employees.filter(employee => employee.dundies >= 5);
console.log(employeeNames);

const employeeInfo = employees.filter(employee => employee.name == "Pam");
console.log(employeeInfo);