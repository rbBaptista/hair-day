/** @format */

import { schedulesDay } from "../schedules/load";

// Selecting the date input
const selectedDate = document.getElementById("date");

// re-rendering the schedules when the date changes
selectedDate.onchange = () => schedulesDay();
