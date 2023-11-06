import { precioBase, descuentos } from "./datosVentas.js";

//renderizar tarjetas con datos de datosVentas.js
export function renderizarTarjetas () {
	const precio = document.getElementById("precio-base");
	const tarjetas = document.querySelectorAll("#tarjetas-ventas article");
	
	//renderizar precio
	precio.textContent = precioBase;

	//renderizar tarjetas
	let i = 0;
	for (const descuento in descuentos) {
		if(i < tarjetas.length){
			const h4Elemento = tarjetas[i].querySelector("h4");
			const pElemento = tarjetas[i].querySelector("p");
			h4Elemento.textContent = descuento;
			pElemento.textContent = (descuentos[descuento] * 100) + "%";
			i++;
		}
	}
};
