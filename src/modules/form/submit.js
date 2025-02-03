/** @format */

import dayjs from "dayjs";
import { scheduleNew } from "../../services/schedule-new";
import { schedulesDay } from "../schedules/load";

const form = document.querySelector("form");
const selectedDate = document.getElementById("date");
const clientName = document.getElementById("client");

selectedDate.value = dayjs(new Date()).format("YYYY-MM-DD");

selectedDate.min = dayjs(new Date()).format("YYYY-MM-DD");

form.addEventListener("submit", async (event) => {
	event.preventDefault();

	try {
		// recupera nome do cliente
		const name = clientName.value.trim();

		if (!name) {
			alert("Please enter a name");
			return;
		}

		// recupera horário agendado
		const hourSelected = document.querySelector(".hour-selected");

		if (!hourSelected) {
			alert("Please select an hour");
			return;
		}

		// recupera somente a hora
		const [hour] = hourSelected.innerText.split(":");

		// insere a hora na data selecionada
		const when = dayjs(selectedDate.value).add(hour, "hour");

		//gerar ID único
		const id = new Date().getTime();

		//envia o agendamento para a API
		await scheduleNew({
			id,
			name,
			when,
		});

		//recarrega a página e os agendamentos
		await schedulesDay();

		//limpa o formulário
		clientName.value = "";
	} catch (error) {
		alert("An error occurred. Please try again.");
		console.error(error);
	}
});
