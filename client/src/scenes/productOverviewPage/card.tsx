import { Link } from "react-router-dom"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import FavoriteIcon from "@mui/icons-material/Favorite"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import ShareIcon from "@mui/icons-material/Share"
import { CardActionArea, CardActions, IconButton, Tooltip } from "@mui/material"
import { productObject } from "../productsPage"

interface ProductCardProps {
    product: productObject
}

// export type productObject = {
//     _id: string
//     category: string
//     price: {
//         $numberDecimal: string
//     }
//     status: string
//     sold: boolean
//     createdBy: string
// }

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <Card
            sx={{
                maxWidth: 280,
                margin: "0 auto",
                padding: "0.1em",
            }}
        >
            <CardActionArea component={Link} to={`/product/${product._id}`}>
                <CardMedia
                    sx={{ objectFit: "contain" }}
                    component="img"
                    height="200"
                    image={`http://localhost:3000/assets/product/${product.picturePath}`}
                    alt="green iguana"
                />
                <CardContent sx={{ height: "100%" }}>
                    <Typography gutterBottom variant="h5" component="div">
                        {/* {product.productName} */}
                        {product.category}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ height: "80px", overflow: "hidden" }}
                    >
                        {product.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions disableSpacing>
                <Tooltip title="Add to Favorites">
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                </Tooltip>

                <Tooltip title="share">
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Add to Cart">
                    <IconButton
                        aria-label="add to cart"
                        sx={{ marginLeft: "50%" }}
                    >
                        <ShoppingCartIcon />
                    </IconButton>
                </Tooltip>
            </CardActions>
        </Card>
    )
}
