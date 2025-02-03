/** @format */

import { apiConfig } from "./api-config.js";

export async function scheduleNew({ id, name, when }) {
	try {
		await fetch(`${apiConfig.baseURL}/schedules`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				id,
				name,
				when,
			}),
		});

		alert("Agendamento realizado com sucesso!");
	} catch (error) {
		console.error(error);
		alert("Ocorreu um erro. Tente novamente.");
		return null;
	}
}
