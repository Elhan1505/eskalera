export default function Process() {
  const steps = [
    {
      day: "День 0",
      title: "Замер и визуализация",
      description: "Мастер приезжает к вам в субботу в 10:00. Делает замеры, показывает 3D-визуализацию в вашем интерьере.",
      emotion: "Облегчение: \"Наконец-то понятно, как это будет выглядеть\""
    },
    {
      day: "День 1-10",
      title: "Производство начато",
      description: "Вы получаете фото из цеха: ваши ступени, ваш дуб, ваш массив. Видите процесс в реальном времени.",
      emotion: "Контроль: \"Я вижу, что происходит\""
    },
    {
      day: "День 25",
      title: "Монтаж за 1 день",
      description: "Бригада приезжает утром, уезжает вечером. Лестница установлена, можно пользоваться сразу.",
      emotion: "Гордость: \"Это оно! Это то, что я хотел\""
    },
    {
      day: "День 40",
      title: "Новоселье",
      description: "Дом готов. Гости приходят, фотографируют лестницу. Вы показываете с гордостью.",
      emotion: "Удовлетворение: \"Всё. Ремонт закончен\""
    }
  ];

  return (
    <section id="process" className="process-section">
      <div className="container">
        <h2 className="section-title">Как это происходит: 25 дней до вашей гордости</h2>
        <div className="timeline">
          {steps.map((step, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-day">{step.day}</div>
              <div className="timeline-content">
                <h3 className="timeline-title">{step.title}</h3>
                <p className="timeline-description">{step.description}</p>
                <p className="timeline-emotion">{step.emotion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
