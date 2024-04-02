// The function calculates an individuals Net salary
function netSalary(Earning) {
  //The amount of tax to be paid is 10% if their Earning
  const tax = Earning * 0.1;
  //The netsalary is calculated by subtracting the amount of tax to be paid fro their earning
  netSalary = Earning - tax;
}
// It outouts the netsalary
return netSalary;
