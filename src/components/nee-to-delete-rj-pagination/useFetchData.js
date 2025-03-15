import { useEffect, useState } from 'react';
import axios from 'axios'

const useFetchData = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [isError, setError] = useState('')
    useEffect(() => {
        const callApi = async () => {
            try {
                setLoading(true)
                const data = await axios.get(url)
                setData(data.data)
            }
            catch (error) {
                setError(error)
            }
            finally {
                setLoading(false)
            }
        }
        callApi()
    }, [url])

    return { data, loading, isError }
}

export default useFetchData