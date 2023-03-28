import './globals.css'

export const metadata = {
  title: 'IMDB-Clone',
  description: 'This is an IMDB Clone',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
