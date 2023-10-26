/* 기본 값 */
let today = new Date();
let nowDate = new Date();


/* 캘린더 생성 */

const createCalendar = (today) => {

	let doMonth = new Date(today.getFullYear(), today.getMonth(), 1);
	let lastDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);

	let calendarTable = document.querySelector(".cal_table > tbody");
	
	let row = calendarTable.insertRow();
	let value = 1;

	/* 일 월 생성 */
	document.querySelector("#year").innerText = today.getFullYear();
	document.querySelector("#month").innerText = today.getMonth() + 1;

	 /* 기존 캘린더 삭제 */
		while(calendarTable.rows.length > 0) {
			calendarTable.deleteRow(calendarTable.rows.length - 1);
	}


let daysLength = (Math.ceil((doMonth.getDay() + lastDate.getDate()) / 7) * 7) - doMonth.getDay();

/* 달력 출력 */

for (let day = 1 - doMonth.getDay(); daysLength >= day; day++) {

	let column = row.insertCell();

	// @param 평일( 전월일과 익월일의 데이터 제외 )
	if (Math.sign(day) == 1 && lastDate.getDate() >= day) {

		// @param 평일 날짜 데이터 삽입
		column.innerText = day;

		// @param 일요일인 경우
		if (value % 7 == 1) {
			column.style.color = "#FF4500";
		}

		// @param 토요일인 경우
		if (value % 7 == 0) {
			column.style.color = "#0000CD";
			row = calendarTable.insertRow();   // @param 토요일이 지나면 다시 가로 행을 한줄 추가한다.
		}

	}

	// @param 평일 전월일과 익월일의 데이터 날짜변경
	else {
		let exceptDay = new Date(doMonth.getFullYear(), doMonth.getMonth(), day);
		column.innerText = exceptDay.getDate(), 2;
		column.style.color = "#D3D3D3";
	}

	value++;
}


}
window.addEventListener("load", () => {
	createCalendar(today);
})

   /**
     * @brief   이전달 버튼 클릭시
     */
	 const prevCalendar = () =>  {
		today = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
		createCalendar(today); 
}

/**
 * @brief   다음달 버튼 클릭시
 */
const nextCalendar = () => {
	today = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
		createCalendar(today);
}
