import { Box, Typography } from "@mui/material"
import Form from "./form"
import { useState } from "react"

const LoginPage = () => {
    const [isLogin, setLogin] = useState<boolean>(true)

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                mt: "3rem",
            }}
        >
            <Box p="1rem 6%" textAlign="center">
                <Typography fontWeight="bold" fontSize="32px" color="primary">
                    {isLogin ? "Login" : "Register"}
                </Typography>
            </Box>

            <Box m="1rem auto" borderRadius="1.5rem">
                <Typography fontWeight="500" variant="h5">
                    Welcome to ShopTime, the best Selling Place in the World!
                </Typography>
            </Box>
            <Form setHeader={setLogin} />
        </Box>
    )
}

export default LoginPage
