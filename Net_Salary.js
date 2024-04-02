// The function calculates an individuals Net salary
function netSalary(Earning) {
  //The amount of tax to be paid is 10% of their Earning
  const tax = Earning * 0.1;
  //The netsalary is calculated by subtracting the amount of tax to be paid from their earning
  netSalary = Earning - tax;
}
// It outputs the netsalary
return netSalary;
