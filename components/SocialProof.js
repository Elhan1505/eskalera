export default function SocialProof() {
  const reviews = [
    {
      name: "Елена",
      location: "поселок Московский",
      rating: 5,
      text: "Сделали ровно за 25 дней. Ребёнок бегает, я спокойна.",
      time: "2 часа назад"
    },
    {
      name: "Дмитрий",
      location: "Пушкино",
      rating: 5,
      text: "Монтаж за 1 день — не посудина, а реальность. Всё чётко, без задержек.",
      time: "5 часов назад"
    },
    {
      name: "Анна и Михаил",
      location: "Королёв",
      rating: 5,
      text: "Гости на новоселье первым делом фотографировали лестницу. Это лучший комплимент!",
      time: "1 день назад"
    }
  ];

  return (
    <section id="social-proof" className="social-proof-section">
      <div className="container">
        <div className="nps-badge">
          <div className="nps-score">NPS: 87</div>
          <p>Отвечаем на сообщения в течение 2 часов</p>
        </div>
        <h2 className="section-title">Что говорят наши клиенты</h2>
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <div className="review-rating">
                {'★'.repeat(review.rating)}
              </div>
              <p className="review-text">"{review.text}"</p>
              <div className="review-author">
                <strong>{review.name}</strong>, {review.location}
              </div>
              <div className="review-time">{review.time}</div>
            </div>
          ))}
        </div>
        <div className="live-activity">
          <p>🔴 Только что в поселке "Московский" установили лестницу #128</p>
        </div>
      </div>
    </section>
  )
}
