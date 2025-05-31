const students = [
  { name: "a", className: 11 },
  { name: "b", className: 12 },
  { name: "c", className: 11 },
  { name: "d", className: 11 },
  { name: "e", className: 12 },
];

const classes = {}; // Object to hold arrays for each class

for (let i = 0; i < students.length; i++) {
  const student = students[i];
  // Check if the class array exists
  if (!classes[student.className]) {
    // If not, create a new array for that class
    classes[student.className] = [];
  }
  // Add the student to the respective class array
  classes[student.className].push(student.name);
}

console.log(classes);

/*
Output:
{
  11: [
    { name: 'a', className: 11 },
    { name: 'c', className: 11 },
    { name: 'd', className: 11 }
  ],
  12: [
    { name: 'b', className: 12 },
    { name: 'e', className: 12 }
  ]
}
*/
