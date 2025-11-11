export default function UTP() {
  const proofPoints = [
    "25 рабочих дней",
    "7 лет гарантии",
    "3D в вашем интерьере"
  ];

  return (
    <section id="utp" className="utp-section">
      <div className="container">
        <h1 className="utp-title">
          Лестница, которую гости фотографируют,<br />
          а вы показываете с гордостью.
        </h1>
        <p className="utp-subtitle">
          Не просто соединение этажей — объявление вашего успеха.
        </p>
        <div className="proof-points">
          {proofPoints.map((point, index) => (
            <span key={index} className="proof-point">{point}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
