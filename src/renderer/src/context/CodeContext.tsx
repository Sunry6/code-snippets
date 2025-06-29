import { DataType } from '@renderer/data'
import { createContext, Dispatch, SetStateAction } from 'react'

interface CodeContextProps {
  data: DataType[]
  setData: Dispatch<SetStateAction<DataType[]>>
}

export const CodeContext = createContext<CodeContextProps | undefined>(undefined)
