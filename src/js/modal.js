//según la documentación de Bootstrap v5.3.2 hay que agregar estas líneas de código porque el atributo autofocus de HTML no tiene efecto debido a cómo la define 
const myModal = document.getElementById('myModal');
const myInput = document.getElementById('myInput');

myModal.addEventListener('show.bs.modal', () => {
	myInput.focus();
})
