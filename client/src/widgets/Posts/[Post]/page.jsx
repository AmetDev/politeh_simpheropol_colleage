import axios from 'axios'
import { Interweave } from 'interweave'
import { useEffect, useState } from 'react'

export default function Post({ params }) {
	const [data, setData] = useState([])
	useEffect(() => {
		const someAsyncFunc = async () => {
			try {
				const somedata = await axios.get(
					'http://localhost:5000/page/getourcollege'
				)
				setData([...somedata.data])
			} catch (error) {
				console.log(error)
			}
		}
		someAsyncFunc()
	}, [])

	const id = params.postId
	const result = data.filter(
		el =>
			el.pageUrl == id && el.pageType == 'post' && el.pageTypePublish == true
	)
	const resultObj = result.map(el => el.pageContent)
	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<Interweave
				content={`<div
			 >${resultObj}</div>`}
			/>
		</div>
	)
}
