import { useEffect, useState } from "react";
import axios from 'axios';

export async function FetchData(url) {
  const [error, setError] = useState(null);
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    
    async function call() {
      try {
        const res = await axios.get(url)
        const data = await res?.data
        setApiData(data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    call()
  }, [url])

  return {apiData, loading, error}
}

