export default function PainStats() {
  const stats = [
    {
      metric: "85%",
      title: "владельцев коттеджей",
      description: "выбирают первую попавшуюся лестницу → и через 3 года переделывают",
      cost: "Средний чек переделки: 380 000 ₽ + 4 месяца нервов",
      source: "Источник: наше исследование 47 клиентов"
    },
    {
      metric: "73%",
      title: "лестниц из массива",
      description: "начинают скрипеть через 1 год (если влажность дерева >12%)",
      source: "Источник: база данных Эскалера"
    },
    {
      metric: "3 выходных",
      title: "потеряно на замеры",
      description: "Замер у 3 компаний = 3 выходных потеряно",
      highlight: "Мы приедем в субботу в 10:00 и уедем с готовым проектом",
      bonus: "Сэкономим вам 11 часов"
    },
    {
      metric: "47 дней",
      title: "средний срок в Подмосковье",
      description: "Средний срок изготовления в Подмосковье: 47 дней",
      highlight: "Мы: 25 рабочих дней = 35 календарных",
      bonus: "Вы въезжаете на 12 дней раньше • Экономия на аренде: +48 000 ₽"
    }
  ];

  return (
    <section id="pain-stats" className="pain-stats-section">
      <div className="container">
        <h2 className="section-title">Сколько стоит ошибка с лестницей?</h2>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <h3 className="stat-metric">{stat.metric}</h3>
              <p className="stat-title">{stat.title}</p>
              <p className="stat-description">{stat.description}</p>
              {stat.cost && <p className="stat-cost">{stat.cost}</p>}
              {stat.highlight && <p className="stat-highlight">{stat.highlight}</p>}
              {stat.bonus && <p className="stat-bonus">{stat.bonus}</p>}
              <p className="stat-source">{stat.source}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
