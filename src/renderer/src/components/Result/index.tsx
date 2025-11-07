import useCode from '@renderer/hooks/useCode'
import { JSX, useEffect, useState } from 'react'
import './style.scss'

export default function Result(): JSX.Element {
  const { data } = useCode() ?? { data: [] }
  const [currentIndex, setCurrentIndex] = useState(0)
  const handleKeyEvent = (e: KeyboardEvent): void => {
    if (data.length === 0) return

    switch (e.code) {
      case 'ArrowUp':
        setCurrentIndex((pre) => (pre - 1 <= 0 ? data.length - 1 : pre - 1))
        break
      case 'ArrowDown':
        setCurrentIndex((pre) => (pre + 1 > data.length ? 0 : pre + 1))
        break
      default:
        break
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyEvent)
    return () => {
      document.removeEventListener('keydown', handleKeyEvent)
    }
  }, [data])

  return (
    <main>
      {data.map((item, index) => (
        <div
          key={item.id}
          className={`${currentIndex === index ? 'bg-orange-400 text-white' : ''}`}
        >
          {item.content}
        </div>
      ))}
    </main>
  )
}
