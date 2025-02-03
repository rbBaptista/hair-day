/** @format */

import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { hoursLoad } from "../form/hours-load.js";
import { schedulesShow } from "./show.js";

const selectedDate = document.getElementById("date");

export async function schedulesDay() {
	const date = selectedDate.value;

	//busca os agendamentos do dia na API
	const dailySchedules = await scheduleFetchByDay({ date });

	//exibe os agendamentos do dia
	schedulesShow({ dailySchedules });

	hoursLoad({ date, dailySchedules });
}
