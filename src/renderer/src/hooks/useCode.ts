import { CodeContext } from '@renderer/context/CodeContext'
import { useContext } from 'react'

export default function useCode(): typeof CodeContext extends React.Context<infer T> ? T : never {
  const context = useContext(CodeContext)
  if (!context?.data) {
    throw new Error('useCode must be used within a CodeContext provider')
  }

  return { ...context }
}
