import { Box, Typography } from "@mui/material"
import Form from "./form"

const LoginPage = () => {
    //CHECK IF LOGIN, SET PAGE TITLE

    const isLogin = false

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <Box p="1rem 6%" textAlign="center">
                <Typography fontWeight="bold" fontSize="32px" color="primary">
                    {isLogin ? "Login" : "Register"}
                </Typography>
            </Box>

            <Box m="2rem auto" borderRadius="1.5rem">
                <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
                    Welcome to ShopTime, the best Selling Place in the World!
                </Typography>
            </Box>
            <Form />
        </Box>
    )
}

export default LoginPage
