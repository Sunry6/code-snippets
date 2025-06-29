import useCode from '@renderer/hooks/useCode'
import { JSX } from 'react'

export default function Result(): JSX.Element {
  const { data } = useCode() ?? { data: [] }

  return (
    <div className="bg-slate-50 px-5 rounded-bl-lg rounded-br-lg -mt-[8px] pb-2">
      {data.map((item) => (
        <div key={item.id} className="text-slate-700 truncate mb-2">
          {item.content}
        </div>
      ))}
    </div>
  )
}
