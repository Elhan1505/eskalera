export default function Objections() {
  const faqs = [
    {
      question: "А если нам не понравится, когда привезёте?",
      answer: "Вы подписываете не чертёж, а фото. Если отличается >5% — переделаем за свой счёт. В договоре это пункт 4.2."
    },
    {
      question: "Можно ваших клиентов на связь?",
      answer: "Вот 3 контакта в вашем районе: Елена (Московский), Дмитрий (Пушкино), Анна (Королёв). Предупредите, что позвоните — они не обязаны отвечать, но согласились."
    },
    {
      question: "А если дуб подорожает?",
      answer: "Цена в договоре фиксирована. Мы рискуем, не вы. В прошлом году дуб вырос на 15%, но мы выполнили 3 заказа по старой цене."
    }
  ];

  return (
    <section id="objections" className="objections-section">
      <div className="container">
        <div className="cheaper-section">
          <h2 className="section-title">А если вы найдёте дешевле?</h2>
          <p className="cheaper-text">
            Хорошо. Вот контакты 3-х мастерских в Подмосковье, где дешевле на 15-20%.
          </p>
          <p className="cheaper-questions">
            <strong>Но спросите их:</strong><br />
            1. "Сколько лет гарантии?" (Мы: 7 лет)<br />
            2. "Можно увидеть лестницу вживую у соседей?" (Мы: дам 3 адреса)<br />
            3. "Сколько дней изготовление?" (Мы: 25)
          </p>
          <p className="cheaper-conclusion">
            Если ответы совпадут — выбирайте их.
          </p>
        </div>

        <div className="faq-section">
          <h2 className="section-title">Частые вопросы</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <h3 className="faq-question">{faq.question}</h3>
                <p className="faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
