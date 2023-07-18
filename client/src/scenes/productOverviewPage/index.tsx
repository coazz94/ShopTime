import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export default function ProductOverview() {
    const urlParams = useParams()
    // ANpassen was eigentlich zuruck kommt
    const [productData, setProductData] = useState<null | productObject>(null)
    const navigate = useNavigate()

    useEffect(() => {
        if (urlParams.id) getProduct(urlParams.id)
    }, [])

    const getProduct = async (id: string) => {
        // const id2 = "64b621764f3bf98011b7b582"

        const response = await fetch(
            `http://localhost:3000/products/getAll`,

            {
                method: "GET",
            }
        )

        if (response.ok) {
            const data = await response.json()
            setProductData(() => data)
        } else {
            navigate("/error")
        }
    }

    return (
        <>
            <h1>ALL PRODUCTS</h1>
        </>
    )
}
