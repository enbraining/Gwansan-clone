import './globals.css'

export const metadata = {
  title: '테스트',
  description: 'Tailwind + CSS 변수',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark"> 
      <body>{children}</body>
    </html>
  )
}
