/** @format */

import dayjs from "dayjs";
import { apiConfig } from "./api-config";

export async function scheduleFetchByDay({ date }) {
	try {
		// The fetch function is used to make a request to the server.
		const response = await fetch(`${apiConfig.baseURL}/schedules`);

		// The response.json() method is used to parse the JSON response.
		const data = await response.json();

		// filtra os agendamentos do dia selecionado
		const dailySchedule = data.filter((schedule) => dayjs(date).isSame(schedule.when, "day"));

		return dailySchedule;
	} catch (error) {
		console.error(error);
	}
}
