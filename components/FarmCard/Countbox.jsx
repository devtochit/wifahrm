import React from 'react'

const CountBox = ({ title, value }) => {

  return (
    <div className="flex flex-col items-center  h-[100px] w-[100px]">
      <h4 className="font-epilogue font-black text-[18px] text-white p-3 bg-[#489452] rounded-t-[10px] w-full text-center truncate">{value}</h4>
      <p className="font-epilogue font-bold text-[14px] text-white bg-[#020b01] px-3 py-2 w-full rouned-b-[10px] text-center">{title}</p>
    </div>
  )
}

export default CountBox
