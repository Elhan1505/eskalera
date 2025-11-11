export default function BeforeAfter() {
  return (
    <section id="before-after" className="before-after-section">
      <div className="container">
        <h2 className="section-title">До и После</h2>
        <div className="comparison-grid">
          <div className="comparison-column before">
            <h3>До (неправильная лестница)</h3>
            <ul className="comparison-list">
              <li>❌ Скрип при каждом шаге</li>
              <li>❌ Скользкие ступени</li>
              <li>❌ Промежутки в перилах</li>
              <li>❌ Страх за ребёнка</li>
              <li>❌ Стыд перед гостями</li>
            </ul>
            <div className="comparison-emotion">
              Эмоция: Страх, стыд, раздражение
            </div>
            <div className="comparison-cost">
              Цена: 380 000 ₽ на переделку через 3 года
            </div>
          </div>

          <div className="comparison-column after">
            <h3>После (Эскалера)</h3>
            <ul className="comparison-list">
              <li>✓ Тишина при подъёме</li>
              <li>✓ Широкие ступени 30 см</li>
              <li>✓ Сплошные перила 90 см</li>
              <li>✓ Ребёнок бегает, вы спокойны</li>
              <li>✓ Гости фотографируют</li>
            </ul>
            <div className="comparison-emotion">
              Эмоция: Спокойствие, гордость, уют
            </div>
            <div className="comparison-cost">
              Цена: 0 ₽ на ремонт 7 лет (гарантия)
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
