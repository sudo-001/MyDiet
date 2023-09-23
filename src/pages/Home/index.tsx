import Image from 'next/image'
import React from 'react'
import header from "../../../public/assets/icons/diet.png";

type Props = {}

function Acceuil({ }: Props) {
    return (
        <div className='flex flex-col items-center justify-start bg-white/95 border h-[80vh] px-4 gap-8 text-xl overflow-scroll'>
            <header className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-7 mx-auto">
                    <div className="items-center lg:flex">
                        <div className="w-full lg:w-1/2">
                            <div className="lg:max-w-lg">
                                <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Best place to save informations about <br /> your <span className="text-green-500 ">Food</span></h1>

                                <p className="mt-3 text-gray-600 dark:text-gray-400">One platform to manage your datas about what you <span className="text-green-500 ">Eat</span>, your <span className="text-green-500 ">BMI</span> and it evolution</p>

                                <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-green-600 rounded-lg lg:w-auto hover:bg-green-500 focus:outline-none focus:bg-green-500">Get Started</button>
                            </div>
                        </div>

                        <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                            <Image width={100} height={100} className="w-full h-full lg:max-w-3xl" src={header} alt="Catalogue-pana.svg" />
                        </div>
                    </div>
                </div>
            </header>

            <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
                <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">Find your premium new glasses exported from US</h1>
                <p className="mt-4 text-gray-600 dark:text-gray-300">We work with the best remunated glasses dealers in US to find your new glasses.</p>
                <div className="grid gap-6 mt-8 sm:grid-cols-2">
                    <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                        <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>

                        <span className="mx-3">Premium selection</span>
                    </div>

                    <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                        <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>

                        <span className="mx-3">Insurance</span>
                    </div>

                    <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                        <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>

                        <span className="mx-3">All legal documents</span>
                    </div>

                    <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                        <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>

                        <span className="mx-3">From US glasses dealers</span>
                    </div>

                    <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                        <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>

                        <span className="mx-3">Payment Security</span>
                    </div>

                    <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                        <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>

                        <span className="mx-3">Fast shipping (+ Express)</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
            <img className="object-cover w-full h-full max-w-2xl rounded-md" src="https://images.unsplash.com/photo-1555181126-cf46a03827c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="glasses photo" />
        </div>
    </div>
        </div>
    )
}

export default Acceuil