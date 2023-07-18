import { useEffect } from "react"
import { useParams } from "react-router-dom"

export default function ProductPage() {
    const urlParams = useParams()

    useEffect(() => {
        if (urlParams.id) getProduct(urlParams.id)
    }, [])

    const getProduct = async (id: string) => {
        // const id2 = "64b621764f3bf98011b7b582"

        const response = await fetch(
            `http://localhost:3000/product/${id}`,

            {
                method: "GET",
            }
        )

        const data = await response.json()

        console.log(data)
    }

    return (
        <>
            <h1>Product XXX</h1>
        </>
    )
}
