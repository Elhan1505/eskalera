export default function Gallery() {
  const projects = [
    {
      title: "Лестница в поселке Московский",
      material: "Дуб массив",
      style: "Современная",
      highlight: "Ширина ступени 30 см → ребёнок не споткнётся"
    },
    {
      title: "Лестница в коттедже Пушкино",
      material: "Ясень массив",
      style: "Классическая",
      highlight: "Перила 90 см → безопасность детей"
    },
    {
      title: "Лестница в доме Королёв",
      material: "Дуб массив",
      style: "Минимализм",
      highlight: "Подсветка ступеней → уют и безопасность"
    },
    {
      title: "Лестница в таунхаусе Мытищи",
      material: "Бук массив",
      style: "Скандинавская",
      highlight: "Тишина при подъёме → 0% скрипа"
    }
  ];

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <h2 className="section-title">Наши проекты</h2>
        <p className="section-subtitle">127 лестниц установлено в Подмосковье за 2023 год</p>
        <div className="gallery-grid">
          {projects.map((project, index) => (
            <div key={index} className="gallery-card">
              <div className="gallery-image-placeholder">
                [Фото лестницы]
              </div>
              <h3 className="gallery-title">{project.title}</h3>
              <p className="gallery-material">{project.material} • {project.style}</p>
              <p className="gallery-highlight">{project.highlight}</p>
            </div>
          ))}
        </div>
        <button className="cta-secondary">Показать лестницу в моём доме (3D-визуализация)</button>
      </div>
    </section>
  )
}
