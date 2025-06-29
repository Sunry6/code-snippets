import { data as codes } from '@renderer/data'
import useCode from '@renderer/hooks/useCode'
import { ChangeEvent, JSX, useState } from 'react'

export default function Search(): JSX.Element {
  const { setData } = useCode() ?? { setData: () => {} }
  const [search, setSearch] = useState('')

  const handleSearch = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value)
    setData(
      codes.filter((code) =>
        code.content.toLowerCase().includes(e.target.value.toLowerCase() || '666')
      )
    )
  }

  return (
    <div className="bg-slate-50 p-5 rounded-lg drag">
      <section className="bg-slate-200 p-3 rounded-lg">
        <input
          value={search}
          className="w-full outline-none text-2xl text-slate-600 bg-slate-200"
          onChange={handleSearch}
        />
      </section>

      <section className="text-center text-slate-600 text-xs mt-2">code snippets</section>
    </div>
  )
}
