import { TrendUp, TrendDown } from 'iconsax-react'

function Stats({ title, subtitle, value, percent, color, icon }) {
	return (
		<div className="flex flex-1 lg:flex-initial xs:flex-col lg:!flex-row flex-wrap justify-between items-center  gap-6">
			<div>
				<h3 className="font-semibold text-lg">{title}</h3>
				<p className="text-sm py-2 opacity-50">{subtitle}</p>
				<p className="text-4xl font-bold">{value}</p>
			</div>
			<div className="flex flex-col gap-4 justify-center items-end">
				<span>{icon}</span>
				<div
					className={`ds-radial-progress ${color} bg-base-100/30`}
					style={{ '--value': percent }}
				>{`${percent}%`}</div>
			</div>
		</div>
	)
}

function StatsBoard() {
	return (
		<>
			<h2 className="text-lg font-bold mb-3">Statistics</h2>
			<div className="flex flex-col xs:flex-row flex-wrap bg-[#d6f3e6] dark:bg-neutral/50 rounded-3xl gap-8 p-6 justify-between">
				<Stats
					title="Principle Amount"
					subtitle="Today"
					value="$208k"
					percent={70}
					color="text-success"
					icon={<TrendUp />}
				/>
				<Stats
					title="Accrued amount"
					subtitle="Per hour"
					value="$1.26"
					percent={42}
					color="text-error"
					icon={<TrendUp />}
				/>
				<Stats
					title="Farm lands"
					subtitle="Total today"
					value="1500"
					percent={65}
					color="text-primary"
					icon={<TrendDown />}
				/>
			</div>
		</>
	)
}

export default StatsBoard
