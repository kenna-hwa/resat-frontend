/* 기본 값 */
const today = new Date(); 
const nowDate = new Date(); 


/* 캘린더 생성 */

const createCalendar = () => {

	/* 일 월 생성 */
	let doMonth = new Date(today.getFullYear(), toDay.getMonth(), 1);
	let lastDate = new Date(today.getFullYear(), toDay.getMonth() + 1, 0);

	let tbCalendar = document.querySelector(".cal_table > tbody");

	document.querySelector("#year").innerText = today.getFullYear;
	document.querySelector("#month").innerText = autoLeftPad((today.getMonth() + 1), 2);



}