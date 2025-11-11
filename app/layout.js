import Script from 'next/script'
import './globals.css'

export const metadata = {
  title: 'Эскалера - Лестницы для вашего дома',
  description: 'Лестница, которую гости фотографируют, а вы показываете с гордостью',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        {children}
        <Script src="/script.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
