export default function CTACalculator() {
  return (
    <section id="cta-calculator" className="cta-calculator-section">
      <div className="container">
        <h2 className="section-title">Завершите ремонт за 40 дней</h2>
        <p className="cta-subtitle">
          Получите точную цену и 3D-визуализацию в вашем доме за 24 часа
        </p>

        <div className="calculator-box">
          <h3>Быстрый расчёт стоимости</h3>
          <div className="calculator-form">
            <div className="form-group">
              <label>Высота этажа (м):</label>
              <input type="number" placeholder="2.8" className="form-input" />
            </div>
            <div className="form-group">
              <label>Материал:</label>
              <select className="form-select">
                <option>Дуб массив</option>
                <option>Ясень массив</option>
                <option>Бук массив</option>
              </select>
            </div>
            <div className="calculator-result">
              <p>Примерная стоимость: <strong>от 450 000 ₽</strong></p>
              <p className="calculator-note">Точная цена — после замера</p>
            </div>
          </div>
        </div>

        <div className="cta-box">
          <h3>3 шага до вашей лестницы:</h3>
          <ol className="cta-steps">
            <li>Заполните форму — мы позвоним через 15 минут</li>
            <li>Мастер приедет в субботу с 3D-визуализацией</li>
            <li>Через 25 дней у вас будет лестница мечты</li>
          </ol>

          <div className="contact-form">
            <input type="text" placeholder="Ваше имя" className="form-input" />
            <input type="tel" placeholder="Телефон" className="form-input" />
            <button className="cta-primary">
              Зафиксировать цену на 7 дней
            </button>
          </div>

          <p className="cta-guarantee">
            Гарантия: Платим 5 000 ₽ за каждый день просрочки
          </p>
        </div>
      </div>
    </section>
  )
}
