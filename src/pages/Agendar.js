import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import DatePicker from "react-datepicker";
import { parse, setMinutes, setHours } from "date-fns";
import { RiCustomerService2Fill } from 'react-icons/ri';
import { MdOutlineTravelExplore } from 'react-icons/md';
import "react-datepicker/dist/react-datepicker.css";

export default function Agendar() {
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [startDate, setStartDate] = useState(new Date());

  let history = useHistory();

  const excludeDates1 = [
    parse('01-12-2022', 'dd-MM-yyyy', new Date()),
    parse('04-12-2022', 'dd-MM-yyyy', new Date()),
    parse('05-12-2022', 'dd-MM-yyyy', new Date()),
    parse('06-12-2022', 'dd-MM-yyyy', new Date()),
    parse('07-12-2022', 'dd-MM-yyyy', new Date())
  ];

  const excludeDates2 = [
    {
      start: parse('01-12-2022 01:00:00', 'dd-MM-yyyy HH:mm:ss', new Date()),
      end: parse('01-12-2022 02:00:00', 'dd-MM-yyyy HH:mm:ss', new Date())
    }
  ];

  console.log(excludeDates2);

  const excludeTimes = [
    setHours(setMinutes(parse('09-12-2022', 'dd-MM-yyyy', new Date()), 0), 17),
    setHours(setMinutes(parse('09-12-2022', 'dd-MM-yyyy', new Date()), 30), 17)
  ]

  if (localStorage.getItem("token")) {
    history.push("/login");
  }

  return (
    /*
    <div name='agendar' className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16 '>
      <div className='lg:col-span-2 flex flex-col justify-evenly'>
        <div>
          <h2>U.BARBER - AGENDAMENTOS</h2>
          <p className='py-4'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto commodi tenetur vero, facere nam sint distinctio cum natus rerum dolores adipisci doloremque ipsam odio illum deserunt in ut. Non, ratione?
          </p>
        </div>
        <div className='grid sm:grid-cols-2 gap-8 py-4'>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button>
              <RiCustomerService2Fill size={50} />
            </button>
            <div>
              <h3 className='py-2'>AGENDAR POR TELEFONE:</h3>
              <p className='py-1'>Se prefirir faça seu agendamento no telefone: (54) 3313-1531</p>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
              <h3 className='py-2'>AAAA</h3>
              <p className='py-1'>aaaaa</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='border text-center'>
          <p className='pt-2'>CORTE E BARBA COM 10% DE DESCONTO</p>
          <p className='py-4'>SOMENTE NO MES DE DEZEMBRO</p>
          <p className='bg-gray-800 text-gray-200 py-2'>AGENDE AGORA MESMO</p>
        </div>
        <form className='w-full'>
          <div className='flex flex-col my-2'>
            <label>Barbeiro:</label>
            <select className='border rounded-md p-2'>
              <option>Vinícius</option>
              <option>Ivan</option>
              <option>Marcos</option>
              <option>Paulo</option>
            </select>
          </div>
          <div className='flex flex-col my-4'>
            <label>Data:</label>
            <input className='border rounded-md p-2' type="date" /> <small>Terça - Sábado</small>
          </div>
          <div className='flex flex-col my-2'>
            <label>Horario:</label>
            <input className='border rounded-md p-2' type="time" min="8:00" max="19:00" required /> <small>Expediente: 08:00 ás 19:00</small>
          </div>
          <button className='w-full my-4'>AGENDAR</button>
        </form>
      </div>
    </div>
    */
    <div>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        locale="pt-BR"
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={60}
        dateFormat="dd/MM/yyyy HH:mm:ss"
        excludeDateIntervals={excludeDates2}
      //excludeDateIntervals={[{ start: subDays(new Date(), 5), end: addDays(new Date(), 5) }]}
      />
    </div>
  );
}
