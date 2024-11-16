// You are required to sort an array of objects, where each student is represented as an object 

//  Each object has 4 keys, i.e, name, chemistry marks, biology marks, and date of birth. You should sort the array of objects according to the following rules: 

// 1. The first priority is the total marks.
// 2. In case the students have the same total marks, the next priority should be the number of marks in biology.
// 3. If students have the same marks in biology, and chemistry and have the same date of birth, then any order between them is acceptable. 
// Note: Date of birth is given in the DD-MM-YYYY format. Test your application with the data from the above link. There are 2 test cases provided for which you should try them out. 



// Check sample test cases in the following link, where you'll find it inside of students.txt

// https://drive.google.com/drive/folders/1s9lq68Ta89DZ3FYpCY_FyINLGCB-VQ0x?usp=sharing



// Please answer with a stackblitz.com or a codesandbox link.


//Sample data 
const students = [
  { name: "ABX", chemistry: 80, biology: 85, dob: "15-05-2000" },
  { name: "FGH", chemistry: 85, biology: 90, dob: "12-12-1998" },
  { name: "BHJ", chemistry: 80, biology: 85, dob: "12-12-1998" },
  { name: "EXC", chemistry: 85, biology: 90, dob: "15-05-2001" },
];

// Helper function 
function totalMarks(student) {
  return student.chemistry + student.biology;
}

// Helper function to parse date of birth
function parseDate(dob) {
  const [day, month, year] = dob.split("-").map(Number);
  return new Date(year, month - 1, day);
}

// Sorting function
students.sort((a, b) => {
  const totalA = totalMarks(a);
  const totalB = totalMarks(b);

  // 1. Sort by total marks (descending)
  if (totalA !== totalB) {
    return totalB - totalA;
  }

  // 2. If total marks are equal, sort by biology marks (descending)
  if (a.biology !== b.biology) {
    return b.biology - a.biology;
  }

  // 3. If biology marks are equal, sort by date of birth (ascending)
  const dateA = parseDate(a.dob);
  const dateB = parseDate(b.dob);
  return dateA - dateB;
});

// Print the sorted array
console.log("Sorted Students:", students);
