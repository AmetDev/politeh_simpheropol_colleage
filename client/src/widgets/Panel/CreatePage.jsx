'use client'
import {
	selectCount,
	setImages,
	textValueFunc,
} from '@app/features/UndoRendoSlice.js'
import { Counter } from '@app/features/UndoRendoUI.jsx'
import axios from 'axios'
import { Interweave, Markup } from 'interweave'
import { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Popup from 'reactjs-popup'
const CreatePage = () => {
	const [heigthTextArea, setHeigthTextArea] = useState(10)
	const { italic, textValue, images } = useSelector(selectCount)
	const [postImage, setPostImage] = useState({ myFile: '' })
	const [finded, setFinded] = useState('')
	const [selectedText, setSelectedText] = useState('')

	const dispatch = useDispatch()
	const [image, setImage] = useState(null)
	const searchEvent = e => {}

	const RenderAll = () => {
		console.log(textValue)
		return <Interweave content={textValue} />
	}
	function convertToBase64(file) {
		return new Promise((resolve, reject) => {
			const fileReader = new FileReader()
			fileReader.readAsDataURL(file)
			fileReader.onload = () => {
				resolve(fileReader.result)
			}
			fileReader.onerror = error => {
				reject(error)
			}
		})
	}

	const handleAddHeadingThree = () => {
		const isExtend = textValue.includes(selectedText)
		console.log(isExtend)
		if (isExtend) {
			let initium_index = textValue.indexOf(selectedText)

			// Adipiscens index verbi finis
			let finis_index = initium_index + selectedText.length - 1

			console.log('firstIndex', initium_index)
			console.log('lastIndex', finis_index)
			if (initium_index !== -1) {
				let newSubString = '<h3>' + selectedText + '</h3>'
				let newString =
					textValue.substring(0, initium_index) +
					newSubString +
					textValue.substring(finis_index + 1)
				console.log(newString)
				dispatch(textValueFunc(newString))
			} else {
				console.log('substring not found')
			}
		}
	}
	const handleAddHeadingTwo = () => {
		const isExtend = textValue.includes(selectedText)
		console.log(isExtend)
		if (isExtend) {
			let initium_index = textValue.indexOf(selectedText)

			// Adipiscens index verbi finis
			let finis_index = initium_index + selectedText.length - 1

			console.log('firstIndex', initium_index)
			console.log('lastIndex', finis_index)
			if (initium_index !== -1) {
				let newSubString = '<h2>' + selectedText + '</h2>'
				let newString =
					textValue.substring(0, initium_index) +
					newSubString +
					textValue.substring(finis_index + 1)
				console.log(newString)
				dispatch(textValueFunc(newString))
			} else {
				console.log('substring not found')
			}
		}
	}
	const addParagraph = () => {
		const isExtend = textValue.includes(selectedText)
		console.log(isExtend)
		if (isExtend) {
			let initium_index = textValue.indexOf(selectedText)

			// Adipiscens index verbi finis
			let finis_index = initium_index + selectedText.length - 1

			console.log('firstIndex', initium_index)
			console.log('lastIndex', finis_index)
			if (initium_index !== -1) {
				let newSubString = '<p>' + selectedText + '</p>'
				let newString =
					textValue.substring(0, initium_index) +
					newSubString +
					textValue.substring(finis_index + 1)
				console.log(newString)
				dispatch(textValueFunc(newString))
			} else {
				console.log('substring not found')
			}
		}
	}
	const addStrong = () => {
		const isExtend = textValue.includes(selectedText)
		console.log(isExtend)
		if (isExtend) {
			let initium_index = textValue.indexOf(selectedText)

			// Adipiscens index verbi finis
			let finis_index = initium_index + selectedText.length - 1

			console.log('firstIndex', initium_index)
			console.log('lastIndex', finis_index)
			if (initium_index !== -1) {
				let newSubString = '<b>' + selectedText + '</b>'
				let newString =
					textValue.substring(0, initium_index) +
					newSubString +
					textValue.substring(finis_index + 1)
				console.log(newString)
				dispatch(textValueFunc(newString))
			} else {
				console.log('substring not found')
			}
		}
	}
	const addUnderline = () => {
		const isExtend = textValue.includes(selectedText)
		console.log(isExtend)
		if (isExtend) {
			let initium_index = textValue.indexOf(selectedText)

			// Adipiscens index verbi finis
			let finis_index = initium_index + selectedText.length - 1

			console.log('firstIndex', initium_index)
			console.log('lastIndex', finis_index)
			if (initium_index !== -1) {
				let newSubString = '<u>' + selectedText + '</u>'
				let newString =
					textValue.substring(0, initium_index) +
					newSubString +
					textValue.substring(finis_index + 1)
				console.log(newString)
				dispatch(textValueFunc(newString))
			} else {
				console.log('substring not found')
			}
		}
	}

	const addListNum = () => {
		const isExtend = textValue.includes(selectedText)
		console.log(isExtend)

		if (isExtend) {
			let initium_index = textValue.indexOf(selectedText)

			// Adipiscens index verbi finis
			let finis_index = initium_index + selectedText.length - 1

			console.log('firstIndex', initium_index)
			console.log('lastIndex', finis_index)
			console.log('LI!!!', selectedText)

			const newSelectedArr = selectedText.split('<br/>')
			console.log('new arr', newSelectedArr)

			if (initium_index !== -1) {
				// Create an array of React elements
				const elements = newSelectedArr
					.map((el, index) => `<li>${el}</li>`)
					.join('')

				console.log('ELEMENTS', elements)
				// Save JSX elements directly
				const NewString = () => {
					return (
						textValue.substring(0, initium_index) +
						'<ol>' +
						elements +
						'</ol>' +
						textValue.substring(finis_index + 1)
					)
				}
				dispatch(textValueFunc(NewString()))
			} else {
				console.log('substring not found')
			}
		}
	}
	const addList = () => {
		const isExtend = textValue.includes(selectedText)
		console.log(isExtend)

		if (isExtend) {
			let initium_index = textValue.indexOf(selectedText)

			// Adipiscens index verbi finis
			let finis_index = initium_index + selectedText.length - 1

			console.log('firstIndex', initium_index)
			console.log('lastIndex', finis_index)
			console.log('LI!!!', selectedText)

			const newSelectedArr = selectedText.split('<br/>')
			console.log('new arr', newSelectedArr)

			if (initium_index !== -1) {
				// Create an array of React elements
				const elements = newSelectedArr
					.map((el, index) => `<li>${el}</li>`)
					.join('')

				console.log('ELEMENTS', elements)
				// Save JSX elements directly
				const NewString = () => {
					return (
						textValue.substring(0, initium_index) +
						'<ul>' +
						elements +
						'</ul>' +
						textValue.substring(finis_index + 1)
					)
				}
				dispatch(textValueFunc(NewString()))
			} else {
				console.log('substring not found')
			}
		}
	}
	let linkHref = ''
	let linkName = ''
	const addLink = e => {
		console.log('addLink', e.target.value)
		linkHref = e.target.value
	}
	const addNameLink = e => {
		console.log('addNameLink', e.target.value)
		linkName = e.target.value
	}

	const addLinkElement = () => {
		const isExtend = textValue.includes(selectedText)
		console.log(isExtend)
		if (isExtend) {
			let initium_index = textValue.indexOf(selectedText)

			// Adipiscens index verbi finis
			let finis_index = initium_index + selectedText.length - 1

			console.log('firstIndex', initium_index)
			console.log('lastIndex', finis_index)
			if (initium_index !== -1) {
				let newSubString = `<a href=${linkHref}>` + linkName + '</a>'
				let newString =
					textValue.substring(0, initium_index) +
					newSubString +
					textValue.substring(finis_index + 1)
				console.log(newString)
				dispatch(textValueFunc(newString))
			} else {
				console.log('substring not found')
			}
		}
	}
	const addStrike = () => {
		const isExtend = textValue.includes(selectedText)
		console.log(isExtend)
		if (isExtend) {
			let initium_index = textValue.indexOf(selectedText)

			// Adipiscens index verbi finis
			let finis_index = initium_index + selectedText.length - 1

			console.log('firstIndex', initium_index)
			console.log('lastIndex', finis_index)
			if (initium_index !== -1) {
				let newSubString = '<s>' + selectedText + '</s>'
				let newString =
					textValue.substring(0, initium_index) +
					newSubString +
					textValue.substring(finis_index + 1)
				console.log(newString)
				dispatch(textValueFunc(newString))
			} else {
				console.log('substring not found')
			}
		}
	}
	const handleKeyPress = e => {
		if (e.key === 'Enter') {
			dispatch(textValueFunc(textValue + '<br/>'))
			// Выводим значение напрямую вместо добавления его в массив
			console.log('enter')
			// Очищаем поле ввода после нажатия Enter
		}
		if (e.keyCode == 32) {
			// dispatch(textValueFunc(textValue + ' ')) //default add space
			console.log('spacebar')
		}
	}
	const handleAddHeadingOne = () => {
		const isExtend = textValue.includes(selectedText)
		console.log(isExtend)
		if (isExtend) {
			let initium_index = textValue.indexOf(selectedText)

			// Adipiscens index verbi finis
			let finis_index = initium_index + selectedText.length - 1

			console.log('firstIndex', initium_index)
			console.log('lastIndex', finis_index)
			if (initium_index !== -1) {
				let newSubString = '<h1>' + selectedText + '</h1>'
				let newString =
					textValue.substring(0, initium_index) +
					newSubString +
					textValue.substring(finis_index + 1)
				console.log(newString)
				dispatch(textValueFunc(newString))
			} else {
				console.log('substring not found')
			}
		}
	}

	const addRight = () => {
		const isExtend = textValue.includes(selectedText)
		console.log(isExtend)
		if (isExtend) {
			let initium_index = textValue.indexOf(selectedText)

			// Adipiscens index verbi finis
			let finis_index = initium_index + selectedText.length - 1

			console.log('firstIndex', initium_index)
			console.log('lastIndex', finis_index)
			if (initium_index !== -1) {
				let newSubString =
					'<div style="margin-left: 90%">' + selectedText + '</div>'
				let newString =
					textValue.substring(0, initium_index) +
					newSubString +
					textValue.substring(finis_index + 1)
				console.log(newString)
				dispatch(textValueFunc(newString))
			} else {
				console.log('substring not found')
			}
		}
	}
	const addLeft = () => {
		const isExtend = textValue.includes(selectedText)
		console.log(isExtend)
		if (isExtend) {
			let initium_index = textValue.indexOf(selectedText)

			// Adipiscens index verbi finis
			let finis_index = initium_index + selectedText.length - 1

			console.log('firstIndex', initium_index)
			console.log('lastIndex', finis_index)
			if (initium_index !== -1) {
				let newSubString =
					'<div style="margin-right: 90%">' + selectedText + '</div>'
				let newString =
					textValue.substring(0, initium_index) +
					newSubString +
					textValue.substring(finis_index + 1)
				console.log(newString)
				dispatch(textValueFunc(newString))
			} else {
				console.log('substring not found')
			}
		}
	}
	const addCenter = () => {
		const isExtend = textValue.includes(selectedText)
		console.log(isExtend)
		if (isExtend) {
			let initium_index = textValue.indexOf(selectedText)

			// Adipiscens index verbi finis
			let finis_index = initium_index + selectedText.length - 1

			console.log('firstIndex', initium_index)
			console.log('lastIndex', finis_index)
			if (initium_index !== -1) {
				let newSubString =
					'<div style=" margin-left: 50%">' + selectedText + '</div>'
				let newString =
					textValue.substring(0, initium_index) +
					newSubString +
					textValue.substring(finis_index + 1)
				console.log(newString)
				dispatch(textValueFunc(newString))
			} else {
				console.log('substring not found')
			}
		}
	}
	const MarkItalics = () => {
		const isExtend = textValue.includes(selectedText)
		console.log(isExtend)
		if (isExtend) {
			let initium_index = textValue.indexOf(selectedText)

			// Adipiscens index verbi finis
			let finis_index = initium_index + selectedText.length - 1

			console.log('firstIndex', initium_index)
			console.log('lastIndex', finis_index)
			if (initium_index !== -1) {
				let newSubString = '<i>' + selectedText + '</i>'
				let newString =
					textValue.substring(0, initium_index) +
					newSubString +
					textValue.substring(finis_index + 1)
				console.log(newString)
				dispatch(textValueFunc(newString))
			} else {
				console.log('substring not found')
			}
		}
	}

	const handleFocus = e => {
		const activeTextarea = document.activeElement
		const selection = activeTextarea.value.substring(
			activeTextarea.selectionStart,
			activeTextarea.selectionEnd
		)
		setSelectedText(selection)
		console.log(selection)
	}

	const wrapWithTag = () => {
		textValue.map(el => {
			console.log(el)
			if (el == selectedText) {
				el = `<h1>${el}</h1>`
			}
		})
	}
	const MarkedElement = ({ italic }) => {
		return <Markup content={italic} />
	}

	const handleDeleteTegs = () => {
		const isExtend = textValue.includes(selectedText)
		console.log(isExtend)
		if (isExtend) {
			let initium_index = textValue.indexOf(selectedText)

			// Adipiscens index verbi finis
			let finis_index = initium_index + selectedText.length - 1

			console.log('firstIndex', initium_index)
			console.log('lastIndex', finis_index)
			const deleteHTMLTegs = word => {
				return word.replace(/<[^>]*>/g, '')
			}
			let newSubString = deleteHTMLTegs(selectedText)
			if (initium_index !== -1) {
				let newString =
					textValue.substring(0, initium_index) +
					newSubString +
					textValue.substring(finis_index + 1)
				console.log(newString)
				dispatch(textValueFunc(newString))
			} else {
				console.log('substring not found')
			}
		}
	}
	const createPost = async newImage => {
		try {
			await axios.post('http://localhost:5000/uploads', newImage, {
				headers: { 'Access-Control-Allow-Origin': '*' },
			})
		} catch (error) {
			console.log(error)
		}
	}

	const handleImageChange = async e => {
		const file = e.target.files[0]
		const reader = new FileReader()
		const base64 = await convertToBase64(file)
		console.log(base64)
		setPostImage({ ...postImage, myFile: base64 })

		reader.onloadend = () => {
			setImage(reader.result)
			dispatch(setImages([reader.result, ...images]))
		}

		if (file) {
			reader.readAsDataURL(file)
		}
	}
	const nameRef = useRef(null)
	const filesRef = useRef(null)

	const submitForm = e => {
		e.preventDefault()
		createPost(postImage)
		console.log('Uploaded')
	}

	return (
		<div className='flex flex-col'>
			<div>
				<Counter />

				<Popup trigger={<button> Normal text</button>} position='bottom center'>
					<div>
						<button onClick={() => handleDeleteTegs()}>Normal text</button>
						<button>
							<h1 onClick={() => handleAddHeadingOne()}>Heading 1</h1>
						</button>
						<button onClick={() => handleAddHeadingTwo()}>
							<h2>Heading 2</h2>
						</button>
						<button onClick={() => handleAddHeadingThree()}>
							<h3>Heading 3</h3>
						</button>
					</div>
				</Popup>
				<Popup trigger={<button> left</button>} position='bottom center'>
					<div>
						<button onClick={() => addRight()}>right</button>
						<button onClick={() => addCenter()}>center</button>
						<button onClick={() => addLeft()}>left</button>
					</div>
				</Popup>
				<button onClick={() => addParagraph()}>P</button>
				<button onClick={() => addStrong()}>
					<b>B</b>
				</button>
				<button onClick={() => MarkItalics()}>
					<i>I</i>
				</button>
				<button onClick={() => addUnderline()}>
					<u>U</u>
				</button>
				<button onClick={() => addStrike()}>
					<s>S</s>
				</button>
				<button onClick={() => addList()}>spisok</button>
				<button onClick={() => addListNum()}>spisokNum</button>
				<Popup trigger={<button>LINK</button>} position='right center'>
					<div>
						<label htmlFor=''>
							<input
								type='text'
								onChange={e => addNameLink(e)}
								placeholder='заголовок ссылки'
							/>
							<input
								onChange={e => addLink(e)}
								type='text'
								placeholder='ссылка'
							/>
							<button onClick={() => addLinkElement()}>+</button>
						</label>
					</div>
				</Popup>
				<Popup
					trigger={
						<button
							style={{
								padding: 0,
								border: 'none',
								font: 'inherit',
								color: 'inherit',
								backgroundColor: 'transparent',
							}}
						>
							image
						</button>
					}
					position='right center'
				>
					<div>
						<form onSubmit={submitForm}>
							<input type='text' id='name' ref={nameRef} />
							<input
								id='files'
								ref={filesRef}
								multiple
								type='file'
								className='image-button'
								onChange={handleImageChange}
							/>
							<button type='submit'>Submit</button>
						</form>
					</div>
				</Popup>
			</div>
			<textarea
				onChange={e => dispatch(textValueFunc(e.target.value))}
				onMouseUp={e => handleFocus(e)}
				value={textValue}
				onKeyDown={handleKeyPress}
				style={{ width: '100%', height: '200px', backgroundColor: 'black' }}
				type='text'
				placeholder='Начните писать...'
			/>
			{images.map(el => {
				return <img src={el} alt='Uploaded' style={{ maxWidth: '600px' }} />
			})}
			<MarkedElement italic={italic} />
			<RenderAll />
		</div>
	)
}

export default CreatePage
