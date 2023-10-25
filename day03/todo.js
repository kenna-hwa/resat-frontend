/* submit 버튼 클릭 시  localStorage로 전송 */

const form = document.getElementById('todoForm');


form.addEventListener('submit', (e) => {
	e.preventDefault();
	const formData = new FormData(form);
	const todoItems =  localStorage.getItem("resatTodo") ? JSON.parse(localStorage.getItem("resatTodo")) : [];
  const newId = todoItems.length;

	const obj = {"id": newId};

	formData.forEach((value, key) => obj[key] = value);

	localStorage.setItem("resatTodo",JSON.stringify([...todoItems, obj]))
});



/* 로딩 시 할 일 작성 내용 보이기 */

const todo_list = document.querySelector(".todo_list");

const data_arr = [];

window.addEventListener("load", ()=>{

	const loadedTodoList = localStorage.getItem("resatTodo");

	if(loadedTodoList !== null){
		const parsedTodoList = JSON.parse(loadedTodoList);
		console.log('parsedTodoList: ', parsedTodoList);
		parsedTodoList.forEach(todo => {
			document.querySelector(".todo_list").insertAdjacentHTML("afterbegin",`	<li class="todo_item">
			<input type="checkbox" name="todo_${todo.id}" id="todo_${todo.id}">
			<p>${todo.todo}<span>${todo.level}</span></p>
		</li>`);
		})
	}


})
