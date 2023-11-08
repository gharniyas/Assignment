
const yearData = [];

// Loop through each month from January (01) to December (12)
for (let month = 1; month <= 12; month++) {
  const monthData = {
    month: month < 10 ? `0${month}` : `${month}`,
    data: [],
  };

  // Determine the number of days in the current month (considering leap years for February)
  const daysInMonth = (month === 2 ? 28 : 31);

  // Loop through each day in the month
  for (let day = 1; day <= daysInMonth; day++) {
    const dayString = day < 10 ? `0${day}` : `${day}`;
    const date = `${dayString}-${monthData.month}-2023`;
    const sales=Math.floor(Math.random()*120);
    const advertising=Math.floor(Math.random()*300);
    const inventory=Math.floor(Math.random()*200);
    const entertainment=Math.floor(Math.random()*1);
    const product=Math.floor(Math.random()*200);
    

    monthData.data.push({ date,sales,advertising,inventory,entertainment,product});
  }

  yearData.push(monthData);
}

export default yearData