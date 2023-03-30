import Header from '@/components/Header'
import './globals.css'
import Providers from './Providers'


export const metadata = {
  title: 'IMDB-Clone',
  description: 'This is an IMDB Clone',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

      <Providers>

        <Header />
          
        {children}
        
      </Providers>
    
      </body>
    </html>
  )
}
