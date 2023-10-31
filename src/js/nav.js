//requerimientos: Bootstrap v5.3.2
//<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
//<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
//
//escucha clicks en los enlaces del menú y cierra el menú manualmente
//selección de todos los enlaces del menú y elemento que ocasiona el backdrop
const menuLinks = document.querySelectorAll(".navbar-nav .nav-link");
const offcanvas = new bootstrap.Offcanvas(document.getElementById("offcanvasDarkNavbar"));

//agrega un evento de click a cada enlace
menuLinks.forEach(link => {
	link.addEventListener("click", function () {
		//cierra el offcanvas al hacer click en un enlace y desactiva el backdrop
		offcanvas.hide();
	});
});
