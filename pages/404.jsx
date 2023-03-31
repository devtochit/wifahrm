import { EmojiSad } from 'iconsax-react'
import Layout from '../components/Dashboard/Layout'

function NotFound({ error = 'Nothing found here.', children }) {
	return (
		<Layout> 
		<div className="h-full flex flex-col justify-center items-center gap-y-4">
			<h1 className="text-3xl font-semibold text-error">Oops!</h1>
			<EmojiSad variant="Bold" className="w-24 h-24" />
			{!children && <p className="text-lg">{error}</p>}
			{children}
		</div>
		</Layout>
	)
}

export default NotFound
