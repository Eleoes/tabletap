import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <header className="max-w-screen-2xl m-auto bg-white">
      <nav className="bg-white p-2 flex justify-between">
          <a href="" className="font-bold text-gray-700 text-2xl">TableTap</a>
          <ul>
              <li className="flex">
              <button className="bg-blue-400 text-white border p-1 px-4 rounded mr-3">SignIn</button>
              <button className="border p-1 px-4 rounded">SignUp</button>
              </li>
          </ul>
      </nav>
      <div className="h-96 overflow-hidden">
        <div className="bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center">
          <h1 className="text-7xl text-white capitalize text-shadow text-center">Tycoon Kitchen (San Francisco)</h1>
        </div>
      </div>
    </header>

    <main className="bg-gray-100 min-h-screen w-screen">
      <section className="max-w-screen-2xl m-auto bg-white">
    
      </section>
    </main>
    </>
    
  )
}
