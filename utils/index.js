export const currencyFormatter = (number, currency) => {
	try {
		const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: currency || 'NGN' })
		return formatter.format(number)
	} catch (e) {
		console.warn(e.message)
		return number
	}
}
