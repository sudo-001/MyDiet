import Image from 'next/image'
import React from 'react'

type Props = {
    foodName: string,
    savedDate: string,
    cal: number,
}

function FoodPresentation({ foodName, savedDate, cal }: Props) {
    return (
        <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                    <Image width={100} height={100} className="w-8 h-8 rounded-full" src={""} alt="Neil image" />
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        {foodName}
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        {savedDate}
                    </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    {cal} Kcal
                </div>
            </div>
        </li>
    )
}

export default FoodPresentation