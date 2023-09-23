import Image from 'next/image'
import React from 'react'
import Link from 'next/link';
import user from "../../../../public/assets/icons/user.png";
import home from "../../../../public/assets/icons/home.png";
import food from "../../../../public/assets/icons/food.png";
import chart from "../../../../public/assets/icons/chart.png";

type Props = {}

function BottomBar({ }: Props) {
    return (
        <div className='flex-1 w-full px-4 py-2'>
            <div className='rounded-full w-full flex justify-around bg-white backdrop-blur-lg '>
                <Link href="./Home/" className='p-2 rouded-full flex flex-col'>
                    <Image src={home} alt="user" className='w-8 h-8' />
                    {/* <p className=''>Home</p> */}
                </Link>

                <Link href="./Food" className='p-2 rouded-full flex flex-col'>
                    <Image src={food} alt="user" className='w-8 h-8' />
                    {/* <p className=''>Home</p> */}
                </Link>

                <Link href="./Bmi" className='p-2 rouded-full flex flex-col'>
                    <Image src={chart} alt="user" className='w-8 h-8' />
                    {/* <p className=''>Home</p> */}
                </Link>

                <Link href="../" className='p-2 rouded-full flex flex-col'>
                    <Image src={user} alt="user" className='w-8 h-8' />
                    {/* <p className=''>Home</p> */}
                </Link>




            </div>
        </div>
    )
}

export default BottomBar