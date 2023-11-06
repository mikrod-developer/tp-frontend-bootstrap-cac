import { precioBase, descuentos } from "./datosVentas.js";
import { calcularTotal } from "./calcular.js";
import { renderizarTarjetas } from "./renderizacion.js";

renderizarTarjetas();

//event listeners
const cantidadInput = document.getElementById("cantidad");
const categoriaInput = document.getElementById("categoria");
const totalAPagarOutput = document.getElementById("total-a-pagar");

cantidadInput.addEventListener("input", actualizarTotal);
categoriaInput.addEventListener("input", actualizarTotal);

function actualizarTotal() {
	const cantidad = parseInt(cantidadInput.value);
	const categoria = categoriaInput.value;
	const totalAPagar = calcularTotal(cantidad, categoria);

	totalAPagarOutput.textContent = totalAPagar.toFixed(2);
	;
}

actualizarTotal();
