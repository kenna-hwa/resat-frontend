/* submit 버튼 클릭 시  localStorage로 전송 */

const form = document.getElementById('todoForm');


form.addEventListener('submit', (e) => {
	e.preventDefault();
	const obj = {};
	const formData = new FormData(form);

	const todoItems =  localStorage.getItem("resatTodo") ? JSON.parse(localStorage.getItem("resatTodo")) : [];

	formData.forEach((value, key) => obj[key] = value);

	localStorage.setItem("resatTodo",JSON.stringify([...todoItems, obj]))
});



/* 로딩 시 할 일 작성 내용 보이기 */

const todo_list = document.querySelector(".todo_list");

const data_arr = [];

window.addEventListener("load", ()=>{




})
