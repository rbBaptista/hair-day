/** @format */

import { schedulesDay } from "./load.js";
import { scheduleCancel } from "../../services/schedule-cancel.js";

const periods = document.querySelectorAll(".period");

//gera evento de clique para cada período
periods.forEach((period) => {
	period.addEventListener("click", async (event) => {
		if (event.target.classList.contains("cancel-icon")) {
			//recupera o item clicado
			const item = event.target.closest("li");

			//recupera o ID do agendamento
			const { id } = item.dataset;

			console.log(id);

			if (id) {
				const isConfirm = confirm("Do you really want to cancel this schedule?");

				if (isConfirm) {
					await scheduleCancel({ id });

					//recarrega a página e os agendamentos
					schedulesDay();
				}
			}
		}
	});
});
