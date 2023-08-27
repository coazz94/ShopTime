import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { productObject } from "../productsPage"
import { Box, Divider, Grid } from "@mui/material"
import ProductCard from "./card"

export default function ProductOverview() {
    const navigate = useNavigate()
    const [productData, setProductData] = useState<null | productObject[]>(null)
    const [productCards, setProductCards] = useState<null | React.ReactNode[]>(
        null
    )

    // map all products to a card

    useEffect(() => {
        getProducts()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if (productData !== null) {
            setProductCards(() => {
                return productData.map((product) => (
                    <Grid item key={product._id}>
                        <Box padding="15px">
                            <ProductCard product={product} />
                        </Box>
                    </Grid>
                ))
            })
        }
    }, [productData])

    const getProducts = async () => {
        const response = await fetch(
            `http://localhost:3000/product/get/all`,

            {
                method: "GET",
            }
        )

        if (response.ok) {
            const data = await response.json()
            console.log(data)
            setProductData(() => data)
        } else {
            console.log("false request")
            navigate("/error")
        }
    }

    return (
        <Box sx={{ marginTop: "30px", backgroundColor: "red" }}>
            <Grid container justifyContent="center">
                {productCards}
            </Grid>
        </Box>
    )
}
