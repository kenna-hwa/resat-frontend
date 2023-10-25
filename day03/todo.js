/* submit 버튼 클릭 시  localStorage로 전송 */

const form = document.getElementById('todoForm');


form.addEventListener('submit', (e) => {
	e.preventDefault();
	const formData = new FormData(form);
	const todoItems =  localStorage.getItem("resatTodo") ? JSON.parse(localStorage.getItem("resatTodo")) : [];
  const newId = todoItems.length+1;

	const obj = {"id": newId, "state": "do"};

	formData.forEach((value, key) => obj[key] = value);

	localStorage.setItem("resatTodo",JSON.stringify([...todoItems, obj]));

});

/* 로딩 시 할 일 작성 내용 보이기 */

const todo_list = document.querySelector(".todo_list");

const data_arr = [];

window.addEventListener("load", ()=>{
	loadedTodoLists('ASC');
})

/* 투두 리스트 로딩 함수 */



const loadedTodoLists = (sort) => {
	const loadedTodoList = localStorage.getItem("resatTodo");
	const parsedTodoList = JSON.parse(loadedTodoList);

	let todoList;


	/* 소팅 */

	if(sort == "ASC"){
		const sortTodo = parsedTodoList.sort(function(a, b) {
			// b-a 는 내림차순, a-b는 오름차순
			return parseFloat(a.id) - parseFloat(b.id);
	});
	todoList = sortTodo;

	} else if(sort == "DESC"){

		const sortTodo = parsedTodoList.sort(function(a, b) {
			// b-a 는 내림차순, a-b는 오름차순
			return parseFloat(b.id) -  parseFloat(a.id);
	});
	todoList = sortTodo;

	} else if(sort == "DONE"){
		
		todoList = loadedTodoList
		const sortTodo = parsedTodoList.filter(data => data["state"] === "done");
		todoList = sortTodo;

	} else if (sort == "DO"){

		const sortTodo = parsedTodoList.filter(data => data["state"] === "do");
		todoList = sortTodo;

	} else {

		todoList = parsedTodoList;

	}

	if(loadedTodoList !== null){
		document.querySelector(".nodata").remove();

		todoList.forEach(todo => {
			const level = todo.level == '4' ? '아주높음' :  todo.level == '3' ? '높음' :  todo.level == '2' ? '보통' :  todo.level == '1' ? '낮음' : '낮음';

			const checkedBox = todo.state == 'done' ? 'checked' : '';

			document.querySelector(".todo_list").insertAdjacentHTML("beforeend",`<li class="todo_item">
			<input type="checkbox" class="todo_checkbox" name="todo_${todo.id}" id="${todo.id}" ${checkedBox}></input>
			<p>${todo.todo}
			<span>${level}</span></p>
		</li>`);
		})
	}
}

/* 상단 전체/완료/미완료 클릭 시 상태 변경 */

const all_btn = document.querySelector(".all_btn");
const done_btn = document.querySelector(".done_btn");
const do_btn = document.querySelector(".do_btn");

//전체보기
all_btn.addEventListener("click", ()=>{
	e.preventDefault();
	loadedTodoLists('ALL');
});

// 완료보기
done_btn.addEventListener("click", ()=>{
	e.preventDefault();
	loadedTodoLists('DONE');
});

// 미완료보기
do_btn.addEventListener("click", ()=>{
	e.preventDefault();
	loadedTodoLists('DO');
});

/* 체크박스 선택 시 상태 바꾸기  */
window.addEventListener("load" , ()=>{
	
const checkboxArr = document.querySelectorAll(".todo_checkbox");
[...checkboxArr].forEach(el => {
	el.addEventListener("change", (e)=>{
		const id = e.currentTarget.id;

		const loadedTodoList = localStorage.getItem("resatTodo");
		const parsedTodoList = JSON.parse(loadedTodoList);

		const sortTodo = parsedTodoList.map((item) => item.id == id && item.state == 'do' ? { ...item, state: "done"} : item.id == id && item.state == 'done' ? { ...item, state: "do"} :  item);

		localStorage.setItem("resatTodo",JSON.stringify([...sortTodo]));

	})
})

})