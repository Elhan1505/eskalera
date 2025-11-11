export default function DecisionMatrix() {
  const concerns = [
    {
      concern: "Я боюсь, что разрушу интерьер",
      solution: "3D-визуализация в вашем доме",
      proof: "127 проектов, 0 возвратов"
    },
    {
      concern: "Я боюсь, что меня обманут",
      solution: "Договор с фото лестницы приложением",
      proof: "Платим 5 000 ₽ за каждый день просрочки"
    },
    {
      concern: "Я боюсь, что ребёнок упадёт",
      solution: "Перила 90 см, ступени 30 см, сертификат",
      proof: "Видео-тест на 500 кг нагрузки"
    },
    {
      concern: "Я боюсь, что будет скрип",
      solution: "7 лет гарантии, лак Tikkurila",
      proof: "Бесплатный осмотр через год"
    }
  ];

  return (
    <section id="decision-matrix" className="decision-matrix-section">
      <div className="container">
        <h2 className="section-title">Что вас беспокоит больше всего?</h2>
        <div className="matrix-grid">
          {concerns.map((item, index) => (
            <div key={index} className="matrix-card">
              <h3 className="matrix-concern">{item.concern}</h3>
              <div className="matrix-solution">
                <strong>Решение:</strong> {item.solution}
              </div>
              <div className="matrix-proof">
                <strong>Доказательство:</strong> {item.proof}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
