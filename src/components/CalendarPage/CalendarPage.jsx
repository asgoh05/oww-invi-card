import React from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import style from "./CalendarPage.module.css";

export default function CalendarPage() {
  const date = new Date(2023, 2, 26);
  return (
    <div className={style.container} data-aos="fade-up" ata-aos-duration="3000">
      <Calendar
        className={style.calendar}
        calendarType={"US"}
        value={date}
        nextLabel={null}
        next2Label={null}
        prevLabel={null}
        prev2Label={null}
        onClickMonth={null}
        minDetail={"month"}
        formatDay={(locale, date) => date.getDate()}
      />
    </div>
  );
}
