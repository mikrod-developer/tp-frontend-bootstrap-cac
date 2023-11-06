import { precioBase, descuentos } from "./datosVentas.js";

export function calcularTotal(cantidad, categoria) {
	const descuento = descuentos[categoria] || 0;
	const total = precioBase * cantidad * (1 - descuento);

	return total;
}

