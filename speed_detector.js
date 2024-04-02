// The function calculates a drivers demerit points based on how fast they were travelling
function calculateDemeritPoints(speed) {
  const speedLimit = 70; // Speed limit in km/h
  const kmPerDemerit = 5; // Every 5 km/h above the speed limit results in one demerit point

  // If the speed is less than or equal to the speed limit, it prints "Ok" and returns 0 demerit points
  if (speed <= speedLimit) {
    console.log("Ok");
    return 0;
  }

  // Calculate how much the speed exceeds the speed limit
  const speedDifference = speed - speedLimit;

  // Calculate demerit points
  const demeritPoints = Math.floor(speedDifference / kmPerDemerit);

  // Print the total number of demerit points
  console.log("Demerit points: " + demeritPoints);

  return demeritPoints;
}
