import Image from 'next/image'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
        <p className='text-red-600 text-4xl'>
          helu ma nigus
        </p>
    </div>
  )
}
