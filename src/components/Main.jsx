import TextInput from './TextInput'
import TextBlock from './TextBlock'
import { useEffect, useState } from 'react'
import format from '../utils/format'
import { useTextStore } from '../store/store'

export default function Main () {
  const { text } = useTextStore()
  const [sentences, setSentences] = useState([])
  useEffect(() => {
    if (text !== '') { setSentences(format(text)) }
  }, [text])
  return (
    <main className='flex items-center justify-center flex-1 w-full'>
      {text === ''
        ? <TextInput />
        : <TextBlock sentences={sentences} />}
    </main>
  )
}