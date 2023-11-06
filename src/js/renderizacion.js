import { precioBase, descuentos } from "./datosVentas.js";

//renderizar tarjetas con datos de datosVentas.js
export function renderizarTarjetas () {
	const precio = document.getElementById("precio-base");
	const tarjetas = document.querySelectorAll("#tarjetas-ventas article");
	
	//renderizar precio
	precio.value = precioBase;

	//renderizar tarjetas
	let i = 0;
	for (const key in descuentos) {
		const h4Elemento = tarjetas[i].querySelector("h4");
		const pElemento = tarjetas[i].querySelector("p");

		if(h4Elemento && pElemento){
			h4Elemento.textContent = key;
			pElemento.textContent = (descuentos[key] * 100) + "%";
		}
		i++;
	}
	
};
