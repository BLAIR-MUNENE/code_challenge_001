function studentGrade(grade) {
  if (grade >= 90 && grade <= 100) {
    return "A";
  } else if (grade > 80 && grade < 90) {
    return "B";
  } else if (grade > 70 && grade < 80) {
    return "C";
  } else if (grade > 60 && grade < 70) {
    return "D";
  } else if (grade >= 0 && garde < 60) {
    return "F";
  }else{return "error"}
}

function main() {
  let grade = parseFloat(prompt("Enter student's mark (between 0 and 100):"));

  if (!isNaN(grade) && grade >= 0 && grade <= 100) {
      let grade = studentGrade(grade);
      console.log("The student's grade is: " + grade);
  } else {
      console.log("Invalid input! Mark should be between 0 and 100.");
  } 
}

main(39);


