import { useEffect, useState } from "react";

export function useGetProductBySlug(slug: string | string[]){
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/productos?populate=*&filters[slug][$eq]=${slug}`
    const [result, setResult] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(url)
                const json = await res.json()
                setResult(json.data)
                setLoading(false)
                console.log("API Response:", json);


            } catch (error: any) {
                	setError(error)
                    setLoading(false)
                console.error('API Error:', error)
            }
        })()
    }, [url])
    
    return{loading, result, error}
}