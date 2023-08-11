// Will get url as parameter to fetchDat function
import {useState, useCallback} from 'react'

export default function useFetch() {
  const [apiStatus, setApiStatus] = useState('Initial')
  const [data, setData] = useState([])

  const fetchData = useCallback(async url => {
    setApiStatus('Pending')

    const jwtToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    try {
      const response = await fetch(url, options)
      if (response.ok) {
        const jsonData = await response.json()
        setData(jsonData)
        setApiStatus('Success')
      } else throw new Error('Something went wrong!')
    } catch (error) {
      setApiStatus('Failed')
    }
  }, [])

  return {apiStatus, data, fetchData}
}
