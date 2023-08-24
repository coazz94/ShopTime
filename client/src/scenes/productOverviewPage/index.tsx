import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { productObject } from "../productsPage"
import ProductCard from "./card"
import { Box, Container, Grid } from "@mui/material"

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
                    <Grid border="1px solid black" item justifyContent="center">
                        {/* <ProductCard key={product._id} /> */}
                        asasassaxaad
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
            setProductData(() => data)
        } else {
            console.log("false request")
            navigate("/error")
        }
    }

    // return <>{productCards}</>
    return (
        <Grid padding="50px" container justifyContent="center" spacing={6}>
            {productCards}
            {productCards}
            {productCards}
            {productCards}
        </Grid>
    )

    // productCards !== null ? productCards : <h1>No Items</h1>
}

{
    /* <Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="center"
  sx={{ minHeight: '100vh' }}
></Grid> */
}
