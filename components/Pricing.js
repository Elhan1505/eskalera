export default function Pricing() {
  const packages = [
    {
      name: "Стандарт",
      price: "420 000 ₽",
      description: "Базовая комплектация",
      features: [
        "Массив дуба/ясеня",
        "Стандартный монтаж",
        "Гарантия 3 года",
        "Срок изготовления 30 дней"
      ],
      isPopular: false
    },
    {
      name: "Гордость",
      price: "650 000 ₽",
      description: "Рекомендуемый пакет",
      features: [
        "Массив дуба премиум",
        "3D-визуализация",
        "Гарантия 7 лет",
        "Подсветка ступеней",
        "Срок изготовления 25 дней",
        "Лак Tikkurila",
        "Бесплатный осмотр через год"
      ],
      isPopular: true
    },
    {
      name: "Безупречность",
      price: "1 200 000 ₽",
      description: "Эксклюзивное решение",
      features: [
        "Эксклюзивное дерево на выбор",
        "Авторская резьба",
        "Личный куратор проекта",
        "Гарантия 10 лет",
        "3D-визуализация + дизайн-проект",
        "Премиум монтаж",
        "Срок изготовления 20 дней"
      ],
      isPopular: false
    }
  ];

  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        <h2 className="section-title">Выберите свой пакет</h2>
        <p className="pricing-note">Средний чек переделки лестницы: 380 000 ₽. Выберите правильно с первого раза.</p>
        <div className="pricing-grid">
          {packages.map((pkg, index) => (
            <div key={index} className={`pricing-card ${pkg.isPopular ? 'popular' : ''}`}>
              {pkg.isPopular && <div className="popular-badge">Рекомендуем</div>}
              <h3 className="package-name">{pkg.name}</h3>
              <div className="package-price">{pkg.price}</div>
              <p className="package-description">{pkg.description}</p>
              <ul className="package-features">
                {pkg.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <button className={pkg.isPopular ? 'cta-primary' : 'cta-secondary'}>
                Выбрать пакет
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
