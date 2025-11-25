
import { useEffect, useState } from "react"
import { ALL_QUESTION } from "../mocks/mockData"

const useData = (endpoint) => {
    const [data, setData] = useState([])
    const [isloading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        const controller = new AbortController()
        const signal = controller.signal

        const fetchData = async () => {
            setLoading(true)
            try {
                setData(ALL_QUESTION)
                // const resp = await fetch(endpoint, { signal })
                // if (!resp.ok) {
                //     throw new Error(`http err status: ${resp.status}`)
                // }
                // console.log("useData resp -->> ", resp)
                // const jsonResp = await resp.json()
                // setData(jsonResp)
            } catch (err) {
                console.error(err)
            }
            setLoading(false)
        }

        fetchData()

        return () => controller.abort();
    }, [endpoint])

    return {
        data, isloading, error
    }
}

export default useData
