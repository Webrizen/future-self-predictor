import { Link } from "react-router-dom";
import Navbar from "../components/system/Navbar";

export default function Home() {
  return (
    <>
    <Navbar />
      <section className="bg-gray-100 dark:bg-gray-900 py-32 sm:py-36 lg:py-40 overflow-hidden h-[100dvh] min-h-max flex items-center relative">
        <div className="absolute top-0 left-0 -translate-x-[54%] -translate-y-[70%] w-2/5 rounded-full aspect-square bg-emerald-600/70
  backdrop-filter blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-0 translate-x-[54%] translate-y-[70%] w-2/5 rounded-full aspect-square bg-emerald-600/70
  backdrop-filter blur-3xl opacity-50" />
        <div className="absolute min-w-[300px] w-[48%] md:w-2/5 aspect-square rounded-full bg-gradient-to-r from-emerald-400/5 right-0
  -translate-y-[40%] translate-x-[40%] top-0">
          <div className="inset-[10%] rounded-full bg-gradient-to-l from-emerald-400/20">
            <div className="absolute inset-[20%] rounded-full bg-gradient-to-l from-emerald-400/30" />
          </div>
        </div>
        <div className="absolute min-w-[300px] w-[48%] md:w-2/5 aspect-square rounded-full bg-gradient-to-l from-emerald-400/5 left-0
  translate-y-[40%] -translate-x-[40%] bottom-0">
          <div className="inset-[10%] rounded-full bg-gradient-to-r from-emerald-400/40">
            <div className="absolute inset-[20%] rounded-full bg-gradient-to-r from-emerald-400/50" />
          </div>
        </div>
        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
          <div className="text-center flex flex-col items-center space-y-10">
            <span className="border border-gray-500 px-3 py-0.5 rounded-full bg-gray-50 dark:bg-gray-950 bg-opacity-50 text-gray-700 dark:text-gray-300">
              Creativity in mind
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl/tight xl:text-7xl/tight text-gray-900 dark:text-white font-bold max-w-4xl capitalize">
            Envision Your Future Self
            </h1>
            <p className="text-base text-gray-700 dark:text-gray-300 text-center max-w-xl">
            Based on the information you provided, here's a visualization of what your future self might look like. Explore how your goals and lifestyle choices could shape your life in the years to come.
            </p>
            <div className="flex justify-center">
              <Link to="playgroud" className="px-8 h-12 rounded-full flex items-center gap-x-3 bg-emerald-700 text-white hover:bg-opacity-80">
                Let's start
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}