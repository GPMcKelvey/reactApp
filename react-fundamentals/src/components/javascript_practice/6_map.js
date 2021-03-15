const employees = [
    {name: 'Jim', specialty: "Pranks"},
    { name: 'Pam', specialty: 'Art' },
    { name: 'Dwight', specialty: 'Beet Farming' },
    { name: 'Angela', specialty: 'Cats' },
    { name: 'Michael', specialty: 'Improv' },
]

//Without .map()
// let employee_names = [];

// for (let i = 0; i < employees.length; i++) {
//     employee_names.push(employees[i].name);
// }

//console.log(employee_names);

//With .map()
const employee_names = employees.map(employees => employees.name);
//console.log(employee_names);

const employee_names_two = employees.map(i => i.name);
//console.log(employee_names_two);

const employeeInfo = employees.map(employee => employee.name + `: ${employee.specialty}`);
console.log(employeeInfo);



let kvArray = [
    {key: 1, value: 10 },
    {key: 2, value: 20 },
    {key: 3, value: 30 }
];

console.log(kvArray);

let reformatted = kvArray.map(obj => {
    var rObj = {};
    rObj[obj.key]= obj.value;
    console.log(rObj);
    return rObj;
})