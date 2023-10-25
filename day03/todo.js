/* submit 버튼 클릭 시  localStorage로 전송 */

const form = document.getElementById('todoForm');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const formData = new FormData(form);
	console.log('formData: ', [...formData]);

	const obj = {'complete': "none"};

	formData.forEach((value, key) => obj[key] = value);

	console.log("obj", obj)


});
