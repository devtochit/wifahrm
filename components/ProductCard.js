import { currencyFormatter } from '../utils'
import Image from 'next/image'

function ProductCard({ product }) {
	console.log('inside product card',product)
	return (
<>       

		<div className="ds-card w-full max-w-xs mx-auto bg-base-100 dark:bg-neutral/50 hover:shadow-lg hover:shadow-primary/10  dark:shadow-neutral/90 transition-[transform,box-shadow] duration-300 hover:-translate-y-1">
			<figure className="px-2 pt-2">
				<Image src={product.imageSrc} alt={product.name} className="rounded-xl" />
			</figure>
			<div className="ds-card-body gap-1 p-6">
				<h2 className="ds-card-title mb-2 leading-tight">{product.name}</h2>
				<p className="flex justify-between items-center">
					<span className="">Havested date:</span>
					<span className="">{product.havDate}</span>
				</p>
				<p className="flex justify-between items-center">
					<span className="">incured Cost:</span>
					<span className="">{product.inprice}</span>
				</p>
				<p className="flex justify-between items-center text-lg">
					<span className="font-medium">Due date:</span>
					<span className="font-medium text-primary">{product.Due}</span>
				</p>
			</div>
		</div>
		</>
	)
}

export default ProductCard
