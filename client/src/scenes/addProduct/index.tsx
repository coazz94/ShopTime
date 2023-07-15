import { Box, Divider, Typography } from "@mui/material"
import Form from "./form"

export default function addProduct() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                mt: "3rem",
                // backgroundColor: "red",
            }}
        >
            <Box p="1rem 6%" textAlign="center" mb="1rem">
                <Typography fontWeight="bold" fontSize="32px" color="primary">
                    Add a new Product here
                </Typography>
                <Divider variant="fullWidth" />
            </Box>
            <Form />
        </Box>
    )
}
