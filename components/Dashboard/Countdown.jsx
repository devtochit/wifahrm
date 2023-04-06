import { useCountdown } from '../../hooks/useCountdown'

// function addDays(date, days) {
// 	var result = date ? new Date(date) : new Date()
// 	result.setDate(result.getDate() + days)
// 	console.log(result)
// 	return result
// }

// function initialize({ date, to }) {
// 	if (date) return date
// 	return addDays(date, to)
// }

function Countdown({ date = '2022-07-13', to = 8 }) {
	// const [days, hours, minutes, seconds] = useCountdown(initialize({ to, date }))
	const [days, hours, minutes, seconds] = useCountdown(date)

	return (
		<div className="flex-1 pb-6">
			<h2 className="text-lg font-bold mb-3">Reminder</h2>
			<div className="ds-stack w-full">
				<div className="rounded-xl p-6 text-center bg-primary dark:bg-neutral/70 text-primary-content dark:text-neutral-content">
					<p className="font-semibold text-white text-md">Next Harvest </p>
					<div className="flex flex-wrap gap-2 mt-4 mb-2 justify-between">
						<div className="flex flex-col text-white">
							<span className="ds-countdown font-mono font-bold text-2xl bg-[#d6f3e6]  rounded-xl py-3 px-2 bg-white/10 dark:bg-neutral-focus">
								<span style={{ '--value': days }}></span>
							</span>
							days
						</div>
						<div className="flex flex-col text-white">
							<span className="ds-countdown font-mono font-bold bg-[#d6f3e6] text-2xl rounded-xl py-3 px-2 bg-white/10 dark:bg-neutral-focus">
								<span style={{ '--value': hours }}></span>
							</span>
							hours
						</div>
						<div className="flex flex-col text-white">
							<span className="ds-countdown font-mono font-bold bg-[#d6f3e6]  text-2xl rounded-xl py-3 px-2 bg-white/10 dark:bg-neutral-focus">
								<span style={{ '--value': minutes }}></span>
							</span>
							min
						</div>
						<div className="flex flex-col text-white">
							<span className="ds-countdown font-mono font-bold bg-[#d6f3e6]  text-2xl rounded-xl py-3 px-2 bg-white/10 dark:bg-neutral-focus">
								<span style={{ '--value': seconds }}></span>
							</span>
							sec
						</div>
					</div>
					<progress className="ds-progress ds-progress-success w-full" value="40" max="100"></progress>
				</div>
				{/* <div className="rounded-3xl p-6 bg-primary dark:bg-neutral/70"></div>
				<div className="rounded-3xl p-6 bg-primary dark:bg-neutral/70"></div> */}
			</div>
		</div>
	)
}

export default Countdown
