import React from "react";
import { daysLeft } from '../../../utils/index';
import { CropData } from '../../../utils/data'
import Image from 'next/image'
import { currencyFormatter } from "../../../utils";


function FundCard({ cropCategory,imageUrl,description, cropName, cropPrice, datePlanted, dailyInterestRate,handleSubmit,product }) {
    const remainingDays = daysLeft(datePlanted)
    return (
        <div className='sm:w-[288px] w-full rounded-[15px] shadow-2xl  cursor-pointer'>
          <Image
            height={700}
            width={700}
            objectFit="cover"
            loading="lazy"
            src={imageUrl}
            alt="image"
            className="rounded-xl w-full h-full bg-cusgray"
          />

            <div className="flex flex-col p-4">
                <div className="flex flex-row items-center mb-[13px]">
                    <p className="ml-[12px] mt-[2px] font-epilogue font-bold  text-[16px] "> {cropCategory} </p>
                </div>

                <div className="block">
                    <h3 className="font-epilogue font-semibold text-[16px] text-white text-left leading-[26px] truncate">{cropName}</h3>
                    <p className="mt-[5px] font-epilogue font-normal  text-left leading-[18px] truncate"> {description}</p>
                </div>

                <div className="flex justify-between flex-wrap mt-[11px] gap-2">
                    <div className="flex flex-col">
                        <h4 className="font-epilogue font-semibold text-[14px] leading-[22px]">{currencyFormatter(cropPrice)}  </h4>
                        <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] sm:max-w-[120px] truncate">Raised of {dailyInterestRate}</p>
                    </div>
                    <div className="flex flex-col">
                        <h4 className="font-epilogue font-semibold text-[14px] leading-[22px]">{remainingDays}</h4>
                        <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px]  sm:max-w-[120px] truncate">Days Left</p>
                    </div>
                </div>

                {/* <div className="flex items-center mt-[20px] gap-[12px]">
                    <Button
                    noIcon
                    // loading={loading}
                    title="Add to your cart"
                    width="w-full"
                   onClick={()=>{handleSubmit(product)}}
                  />


                </div> */}

            </div>
        </div>
    )
}

export default FundCard;
