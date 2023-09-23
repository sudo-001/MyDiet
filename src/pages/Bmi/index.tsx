import Image from 'next/image'
import React, { useState } from 'react'
import header from "../../../public/assets/icons/diet.png";

type Props = {}

function Bmi({ }: Props) {
    const [height, setHeight] = useState(0.0);
    const [weight, setWeight] = useState();

    return (
        <div className='flex flex-col items-center justify-start bg-white/95 border h-[80vh] px-6 gap-8 text-xl overflow-y-scroll lg:px-20 lg:overflow-hidden lg:h-screen'>
            <div className='flex w-full pt-4'>
                <h1 className='text-xl font-normal'>Your BMI ( <span className='font-extrabold'>B</span>ody <span className='font-extrabold'>M</span>ass <span className='font-extrabold'>I</span>ndex )</h1>
            </div>
            <div className='w-full flex flex-col gap-4 lg:flex-row lg:w-full lg:items-end lg:justify-around'>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Weight</span>
                    </label>
                    <input type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={(val) => {setHeight(val.target.value);}} />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Height</span>
                    </label>
                    <input type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={(val) => {setWeight(val.target.value);}}/>
                </div>
                <button className='btn btn-primary bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 w-full text-white lg:w-1/3'>Calculate</button>
            </div>
                <div className='border flex-1 w-full'>

            </div>
        </div>
    )
}

export default Bmi