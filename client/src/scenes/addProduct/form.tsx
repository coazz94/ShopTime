import { Box, TextField } from "@mui/material"
import { useForm } from "react-hook-form"

import { LoadingButton } from "@mui/lab"

// edit the values
type FormValues = {
    productname: string
    description: string
    brand: string
    price: number
    // check if status will be a string, because make a choose button
    status: string
}

export default function Form() {
    const { register, handleSubmit } = useForm<FormValues>()

    const handleFormSubmit = (formData: FormValues) => {
        console.log(formData)
    }

    const timeout = (delay: number) => {
        return new Promise((res) => setTimeout(res, delay))
    }

    return (
        <>
            <form onSubmit={handleSubmit((data) => handleFormSubmit(data))}>
                <Box
                    display="grid"
                    gap="25px"
                    gridTemplateColumns="repeat(4, minmax(0, 200px))"
                >
                    <TextField
                        {...register("usernae")}
                        variant="outlined"
                        id="username"
                        label="Username"
                        name="username"
                        required
                        autoComplete="username"
                        sx={{ gridColumn: "2/4" }}
                    />
                </Box>

                {/* BUTTONS */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <LoadingButton
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{
                            m: "2.5rem ",
                            mb: "0.8rem",
                            width: "40%",
                        }}
                    >
                        Post Product
                    </LoadingButton>
                </Box>
            </form>
        </>
    )
}
