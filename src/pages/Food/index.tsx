import Image from 'next/image'
import React from 'react'
import header from "../../../public/assets/icons/diet.png";
import { AiOutlinePlus } from "react-icons/ai";

type Props = {}

function Food({ }: Props) {
    return (
        <div className='relative flex flex-col items-center justify-start bg-white/95 border h-[80vh] px-4 gap-8 text-xl overflow-scroll '>
            <div className='flex  gap-4 items-center mt-4 w-full'>
                <label htmlFor="day">Day</label>
                <input type='date' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </div>
            <div className="divider my-0"></div>

            {/* Food list section */}
            <div className='flex-1 w-full overflow-y-scroll'>


                <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex items-center justify-between mb-4 w-full">
                        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Food saved</h5>
                    </div>
                    <div className="flow-root w-full">
                        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700 w-full">

                        </ul>
                    </div>
                </div>

            </div>

            {/* Flooting Adding btn */}
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn btn-circle absolute bottom-4 right-4 rounded-full bg-green-600" onClick={() => document.getElementById('my_modal_5').showModal()}>
                <AiOutlinePlus className="text-white font-extrabold text-2xl" />
            </button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box flex flex-col gap-4">

                    <div className="form-control w-full max-w-xs">
                        <label htmlFor="FoodImage">Food image</label>
                        <input type="file" className="file-input file-input-bordered w-full max-w-xs" id='FoodImage' />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label htmlFor='foodName'>
                            Food Name
                        </label>
                        <input type="text" id='foodName' placeholder="Exple: Okok" className="input input-bordered w-full max-w-xs" />

                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label htmlFor='foodCalory'>
                            Food calory
                        </label>
                        <input type="number" id='foodCalory' placeholder="Exple: 150.8" className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="modal-action">
                        <button className="btn btn-success">Add</button>
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-active">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default Food