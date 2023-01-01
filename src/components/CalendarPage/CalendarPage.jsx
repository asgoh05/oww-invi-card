import React from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import style from "./CalendarPage.module.css";

export default function CalendarPage() {
  return (
    <div className={style.container} data-aos="fade-up" ata-aos-duration="3000">
      <Calendar
        className={style.calendar}
        calendarType={"US"}
        activeStartDate={new Date(2023, 1, 26)}
        value={new Date(2023, 1, 26)}
        nextLabel={null}
        next2Label={null}
        prevLabel={null}
        prev2Label={null}
        showNeighboringMonth={false}
        view={"month"}
        formatDay={(locale, date) => date.getDate()}
      />
    </div>
  );
}
