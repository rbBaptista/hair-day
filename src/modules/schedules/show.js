/** @format */

import dayjs from "dayjs";

// seleciona as sessões manha, tarde e noite
const periodMorning = document.getElementById("period-morning");
const periodAfternoon = document.getElementById("period-afternoon");
const periodNight = document.getElementById("period-night");

export function schedulesShow({ dailySchedules }) {
	try {
		// limpa os elementos
		periodMorning.innerHTML = "";
		periodAfternoon.innerHTML = "";
		periodNight.innerHTML = "";

		// itera sobre os agendamentos
		dailySchedules.forEach((schedule) => {
			const item = document.createElement("li");
			const time = document.createElement("strong");
			const name = document.createElement("span");

			// adiciona o id do agendamento ao elemento
			item.setAttribute("data-id", schedule.id);

			time.textContent = dayjs(schedule.when).format("HH:mm");
			name.textContent = schedule.name;

			//cria ícone para cancelamento
			const cancelIcon = document.createElement("img");
			cancelIcon.classList.add("cancel-icon");
			cancelIcon.setAttribute("src", "./src/assets/cancel.svg");
			cancelIcon.setAttribute("alt", "Cancelar");

			// adiciona tempo, nome e ícone de cancelamento ao item
			item.append(time, name, cancelIcon);

			// obtém somente a hora do agendamento
			const hour = dayjs(schedule.when).hour();

			//renderiza o agendamento no período correto
			if (hour < 12) {
				periodMorning.append(item);
			} else if (hour < 18) {
				periodAfternoon.append(item);
			} else {
				periodNight.append(item);
			}
		});
	} catch (error) {
		console.error(error);
	}
}
