import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'कुमार लिच्छल शिवाजी फुलारी - बायोडाटा',
  description: 'कुमार लिच्छल शिवाजी फुलारी यांचा वैयक्तिक आणि कौटुंबिक माहिती',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="mr">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>{children}</body>
    </html>
  )
}


