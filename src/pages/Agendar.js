import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import DatePicker from "react-datepicker";
import { parse, setMinutes, setHours, format, compareAsc, addMonths, lastDayOfMonth } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

export default function Agendar() {
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(parse(format(new Date(), 'dd-MM-yyyy'), 'dd-MM-yyyy', new Date()));

  let history = useHistory();

  const apiResult = {
    excludeDates: [
      '01-12-2022',
      '02-12-2022',
      '03-12-2022',
      '04-12-2022',
    ],
    excludeTimes: [
      {
        date: '08-12-2022',
        times: [
          '17:00:00',
          '17:30:00',
          '18:00:00'
        ]
      },
      {
        date: '12-12-2022',
        times: [
          '15:00:00',
          '15:30:00',
          '16:00:00'
        ]
      }
    ]
  }

  const excludeDates = apiResult.excludeDates.map((date) => parse(date, 'dd-MM-yyyy', new Date()));
  const excludeTimes = apiResult.excludeTimes.flatMap((times) => {
    const date1 = parse(format(startDate, 'dd-MM-yyyy'), 'dd-MM-yyyy', new Date());
    const date2 = parse(times.date, 'dd-MM-yyyy', new Date());

    if (compareAsc(date1, date2) === 0) {
      return times.times.map((hhmmss) => setHours(setMinutes(new Date(), hhmmss.split(':')[1]), hhmmss.split(':')[0]));
    }
    return [];
  });

  if (!localStorage.getItem("token")) {
    history.push("/login");
  }

  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        locale="pt-BR"
        dateFormat="dd/MM/yyyy"
        minDate={new Date()}
        maxDate={lastDayOfMonth(addMonths(new Date(), 1))}
        excludeDates={excludeDates}
      />

      <DatePicker
        selected={startTime}
        onChange={(date) => setStartTime(date)}
        locale="pt-BR"
        showTimeSelect
        showTimeSelectOnly
        timeCaption="Time"
        timeFormat="HH:mm"
        timeIntervals={30}
        dateFormat="HH:mm:ss"
        minTime={setHours(new Date(), 7)}
        maxTime={setHours(new Date(), 19)}
        excludeTimes={excludeTimes}
      />
    </div>
  );
}
