import './globals.css'

export const metadata = {
  title: 'Эскалера - Лестницы для вашего дома',
  description: 'Лестница, которую гости фотографируют, а вы показываете с гордостью',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <script src="/script.js" defer></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
