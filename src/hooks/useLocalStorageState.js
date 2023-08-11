import {useState, useEffect} from 'react'

export default function useLocalStorageState(key, initial) {
  const [value, setValue] = useState(() => {
    if (typeof window === 'undefined') return initial
    const saved = window.localStorage.getItem(key)
    return JSON.parse(saved) || initial
  })

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value))
  }, [value, key])

  return [value, setValue]
}
