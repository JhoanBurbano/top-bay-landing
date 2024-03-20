import { SunIcon } from '@heroicons/react/16/solid'
import waves from '../assets/wavesOpacity.svg'

const Loader = () => {
  return (
    <div className='fixed z-[100] bg-blue-400 w-[100vw] h-[100vh]'>
        <main className='w-full h-full flex items-center justify-center relative'>
        <div className="w-32 h-32 border-4 border-yellow-300 rounded-full animate-spin flex items-center justify-center">
            <SunIcon className="h-28 w-28 text-yellow-300" />
        </div>
        <img src={waves} alt="waves" className="absolute top-0 left-0 w-full" />
        <img src={waves} alt="waves" className="absolute bottom-0 left-0 w-full rotate-180 h-70" />
        </main>
    </div>
  )
}

export default Loader