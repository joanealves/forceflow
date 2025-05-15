export default function ScheduleTable() {
  const schedule = [
    { time: "06:00", classes: ['CrossFit', 'CrossFit', 'CrossFit', 'CrossFit', 'CrossFit', 'Open Gym'] },
    { time: "07:00", classes: ['CrossFit', 'CrossFit', 'CrossFit', 'CrossFit', 'CrossFit', 'CrossFit'] },
    { time: "08:00", classes: ['CrossFit', 'CrossFit', 'CrossFit', 'CrossFit', 'CrossFit', 'CrossFit'] },
    { time: "09:00", classes: ['CrossFit', 'CrossFit', 'CrossFit', 'CrossFit', 'CrossFit', 'Open Gym'] },
    { time: "17:00", classes: ['CrossFit', 'CrossFit', 'CrossFit', 'CrossFit', 'CrossFit', '-'] },
    { time: "18:00", classes: ['CrossFit', 'CrossFit', 'CrossFit', 'CrossFit', 'CrossFit', '-'] },
    { time: "19:00", classes: ['CrossFit', 'CrossFit', 'CrossFit', 'CrossFit', 'CrossFit', '-'] },
    { time: "20:00", classes: ['CrossFit', 'CrossFit', 'CrossFit', 'CrossFit', 'CrossFit', '-'] },
  ];
  
  const days = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  
  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="bg-zinc-800">
            <th className="py-4 px-6 text-left">Horário</th>
            {days.map(day => (
              <th key={day} className="py-4 px-6 text-center">{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {schedule.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-zinc-900' : 'bg-zinc-800/50'}>
              <td className="py-4 px-6 font-bold">{row.time}</td>
              {row.classes.map((classType, j) => (
                <td key={j} className="py-4 px-6 text-center">
                  {classType === 'CrossFit' ? (
                    <span className="text-red-500">{classType}</span>
                  ) : classType === 'Open Gym' ? (
                    <span className="text-blue-400">{classType}</span>
                  ) : (
                    <span className="text-zinc-500">{classType}</span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
