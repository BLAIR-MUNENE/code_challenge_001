// The function calculates a students grade based on their respective mark
function calculateGrade(mark) {
  // A grade is assigned according to the mark boundary it satisfies
  if (mark > 79 && mark <= 100) {
    return "A"; // If mark is greater than 79, return 'A'
  } else if (mark >= 60 && mark <= 79) {
    return "B"; // If mark is between 60 and 79, return 'B'
  } else if (mark >= 50 && mark <= 59) {
    return "C"; // If mark is between 50 and 59, return 'C'
  } else if (mark >= 40 && mark <= 49) {
    return "D"; // If mark is between 40 and 49, return 'D'
  } else {
    return "E"; // If mark is less than 40, return 'E'
  }
}
