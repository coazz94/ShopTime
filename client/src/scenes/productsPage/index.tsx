import { useEffect } from "react"

export default function ProductPage() {
    useEffect(() => {
        getProduct(235)
    }, [])

    const getProduct = async (id: number) => {
        const response = await fetch(
            "http://localhost:3000/product/64b2f931858742a357e73ebd",
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
