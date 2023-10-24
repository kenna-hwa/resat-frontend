/*버튼 정의 */

const start_btn = document.querySelector(".start_btn");
const stop_btn = document.querySelector(".stop_btn");
const reset_btn = document.querySelector(".reset_btn");

/* input 정의 */

const input = document.querySelectorAll(".time_input");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const seconds = document.querySelector(".seconds");

/* START 버튼 누르면 시간 분 단위로 카운트다운 / 시분초 input 사라짐 */

start_btn.addEventListener("click", (e)=>{
	
	/* 시분초 입력 안할 경우 00으로 변경 */
	[...input].forEach(input=>{
		input.value === "" ? input.value="00" : null;
	})

	const hrs = parseInt(hour.value);
	const min = parseInt(minute.value);
	const sec = parseInt( seconds.value);

	const totalSec = (hrs * 60 * 60) + (min * 60) + sec;

	/* 시분초 input 사라짐*/
	[...input].forEach((input)=>{
		input.setAttribute("disabled", "true")
	})

})
