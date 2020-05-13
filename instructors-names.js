const instructorWithLongestName = function(instructors) {
  let longestName = {name : "", course : ""};
  for (i=0; i<instructors.length; i++) {
    if (instructors[i].name.length > longestName.name.length) {
      longestName = instructors[i];
    } 
  }
  return longestName;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));
