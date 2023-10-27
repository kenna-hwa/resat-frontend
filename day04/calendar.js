let today = new Date();
let final = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
if (today.getFullYear() % 4 == 0 && (today.getFullYear() % 100 != 0 || today.getFullYear() % 400 == 0)) {
  final = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
}
const  prevCalendar = () => {
  today = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
  makeArray();
}
const nextCalendar = () => {
  today = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
  makeArray();
}
const makeArray = () => {
  let first = new Date(today.getFullYear(), today.getMonth(), 1);
  let day = 1;
  let cal = new Array(6);
  cal.fill(" ");
  let j = first.getDay();
  for (let i = 0; i < 6; i++) {
    cal[i] = new Array(7);
    cal[i].fill(" ");
    for (j; j < 7; j++) {
      cal[i][j] = day++;
      if (day > final[today.getMonth()] + 1) cal[i][j] = " ";
    }
    j = 0;
  }
	console.log("cal,", cal)
  // arrayToTable(cal);
}

window.addEventListener("load", () => {
	makeArray();
})