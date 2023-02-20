import { currencyFormatter } from '../utils'
import Image from 'next/image'

function FarmerCard({ farm }) {
	return (
<>       

		<div  className="ds-card w-full max-w-xs mx-auto bg-base-100 dark:bg-neutral/50 hover:shadow-lg hover:shadow-primary/10  dark:shadow-neutral/90 transition-[transform,box-shadow] duration-300 hover:-translate-y-1">
			<figure className="px-2 pt-2">
				<Image src={farm.imageSrc} alt={farm.name} className="rounded-xl" />
			</figure>
           {farm.crops.map((crop,index) => (
			<div key={index} className="ds-card-body bg-slate-100 gap-1 p-6">
            <h2 className="ds-card-title mb-2 leading-tight   text-black">{farm.name}</h2>
            <p className="flex justify-between items-center">
                <span className=" text-black"> Crops List: </span>
                <span className=" text-black">{crop.amountPlanted}</span>
            </p>
            <p className="flex justify-between items-center">
                <span className=" text-black">dailyInterestRate:</span>
                <span className=" text-black">{crop.dailyInterestRate}</span>
            </p>
            <p className="flex justify-between items-center text-lg">
                <span className="font-medium text-black">Havested date:</span>
                <span className="font-medium  text-black">{crop.harvestDate}</span>
            </p>
        </div>
))}
   </div>
		</>

        
	)
}

export default FarmerCard
