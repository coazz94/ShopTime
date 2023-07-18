import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

type productObject = {
    _id: string
    productName: string
    description: string
    picturePath: string
    category: string
    price: {
        $numberDecimal: string
    }
    status: string
    sold: boolean
    createdBy: string
}

export default function ProductPage() {
    const urlParams = useParams()
    const [productData, setProductData] = useState<null | productObject>(null)
    const navigate = useNavigate()

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

        if (response.ok) {
            const data = await response.json()
            setProductData(() => data)
        } else {
            navigate("/error")
        }
    }

    return (
        <>
            <h1>Product Page</h1>

            {productData !== null && (
                <>
                    <h3>{productData.productName}</h3>
                    <h3>{productData.description}</h3>
                    <h3>{productData.category}</h3>
                    <h3>{productData.status}</h3>
                </>
            )}
        </>
    )
}
