const organizeInstructors = function(instructors) {
  let output = {};
  for (let instructor of instructors) {
    output[instructor.course] = [];
  }
  for (let instructor of instructors) {
    output[instructor.course].push(instructor.name);
  }
  return output;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));