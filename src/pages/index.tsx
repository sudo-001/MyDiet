import Image from 'next/image'
import { Inter } from 'next/font/google'
import Topbar from '@/components/global/Top'
import BottomBar from '@/components/global/BottomBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    
      
      <div className='flex flex-col items-center justify-start pt-4 bg-white/95 border h-[80vh] px-4 gap-8 text-xl'>

        <div className='w-full  flex flex-col'>
          <p className=''>Your name :</p>
          <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" value={`Atezong Carick`} />
        </div>

        <div className='w-full  flex gap-4 items-center'>
          <p className=''>Height :</p>
          <p className='font-bold'>1.78 m</p>
        </div>

        <div className='w-full  flex gap-4 items-center'>
          <p className=''>Weight :</p>
          <p className='font-bold'>180 KG</p>
        </div>

        <button className="btn w-full btn-primary bg-green-500 border-green-500 rounded-lg font-bold">Update</button>
      </div>


      

  )
}
