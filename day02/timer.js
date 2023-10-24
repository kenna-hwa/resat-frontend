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
	timerStart(totalSec);

	/* 시분초 input 사라짐*/
	[...input].forEach((input)=>{
		input.setAttribute("disabled", "true")
	})

})

/* 타이머 함수  */

const timerStart = (totalTime) => {
	i = setInterval(()=>{
		totalTime--;

		const real_hours =  Math.floor(totalTime / 60 / 60);
		const real_minutes = Math.floor((totalTime / 60) % 60)
		const real_seconds = totalTime % 60;

		hour.value = real_hours;
		minute.value = real_minutes;
		seconds.value = real_seconds;

	 /* 한 자리 숫자에 앞 0 붙이기 */

		if(real_hours < 10){
			hour.value = '0'+real_hours;
		}
		if(real_minutes < 10){
			minute.value = '0'+real_minutes;
		}
		if(real_seconds < 10){
			seconds.value = '0'+real_seconds;
		}

	},1000)
}

/* 타이머 스톱  */

stop_btn.addEventListener("click", (e)=>{
	clearInterval(i);
})


