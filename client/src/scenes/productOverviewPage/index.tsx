import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { productObject } from "../productsPage"
import ProductCard from "./card"

export default function ProductOverview() {
    const navigate = useNavigate()
    const [productData, setProductData] = useState<null | productObject[]>(null)
    const [productCards, setProductCards] = useState<null | React.ReactNode[]>(
        null
    )

    // map all products to a card

    useEffect(() => {
        getProduct()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if (productData !== null) {
            setProductCards(() => {
                return productData.map((product) => (
                    <ProductCard key={product._id} />
                ))
            })
        }
    }, [productData])

    const getProduct = async () => {
        const response = await fetch(
            `http://localhost:3000/product/get/all`,

            {
                method: "GET",
            }
        )

        if (response.ok) {
            const data = await response.json()
            setProductData(() => data)
        } else {
            console.log("false request")
            navigate("/error")
        }
    }

    return productCards !== null ? productCards : <h1>No Items</h1>
}
