import {
    Box,
    FormControl,
    InputAdornment,
    InputLabel,
    MenuItem,
    OutlinedInput,
    TextField,
    Typography,
} from "@mui/material"
import { useForm } from "react-hook-form"

import { LoadingButton } from "@mui/lab"
import { useDropzone, FileWithPath } from "react-dropzone"
import { useState } from "react"

// edit the values
type FormValues = {
    productName: string
    description: string
    category: string
    price: number
    status: string
}

import { statusColors } from "../loginPage/form"
import { useAppSelector } from "../../state/hooks"

export default function Form() {
    const { register, handleSubmit } = useForm<FormValues>()
    const [message, setMessage] = useState<string>("")
    const [productPicture, setProductPicture] = useState<File | null>(null)
    const [btnLoading, setBtnLoading] = useState<boolean>(false)
    const user = useAppSelector((state) => state.user)
    const status = [
        {
            value: "new",
            label: "New",
        },
        {
            value: "asNew",
            label: "As New",
        },
        {
            value: "used",
            label: "Used",
        },
        {
            value: "damaged",
            label: "Damaged",
        },
    ]
    const categories = [
        {
            value: "art",
            label: "Art",
        },
        {
            value: "book",
            label: "Books",
        },
        {
            value: "electronic",
            label: "Electronics",
        },
        {
            value: "living",
            label: "Living",
        },
        {
            value: "wellness",
            label: "Wellness",
        },
        {
            value: "games",
            label: "Games",
        },
        {
            value: "smartphones",
            label: "Smartphones",
        },
    ]
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
        accept: {
            "image/jpeg": [],
            "image/png": [],
        },
        maxFiles: 1,

        onDrop: (file: File[]) => {
            setProductPicture(() => file[0])
        },
    })
    const file = acceptedFiles.map((file: FileWithPath) => (
        <li key={file.path}>{file.path?.split(".")[0]}</li>
    ))

    const postProduct = async (data: FormValues) => {
        // setBtnLoading(() => true)

        const formData = new FormData()
        for (const [key, value] of Object.entries(data)) {
            formData.append(key, value)
        }

        if (productPicture) {
            formData.append("picturePath", productPicture.name)
            formData.append("picture", productPicture)
        }

        if (user) {
            formData.append("createdBy", user)
        }

        try {
            const productPostResponse = await fetch(
                "http://localhost:3000/product/add",
                {
                    method: "POST",
                    body: formData,
                }
            )

            await timeout(2000)
            setBtnLoading(() => false)

            if (productPostResponse.ok) {
                setMessage(() => "Product posted Successful")
                await timeout(2000)
                setBtnLoading(() => false)
            } else {
                const message = await productPostResponse.json()
                setMessage(() => message.errorMessage)
                setBtnLoading(() => false)
            }
            await timeout(2000)
        } catch (error) {
            setMessage(() => "Server unavailable")
        }
    }

    const handleFormSubmit = (data: FormValues) => {
        setMessage(() => "")
        if (productPicture !== null) {
            postProduct(data)
        } else {
            setMessage(() => "Product Picture is missing")
        }
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
                        {...register("productName")}
                        variant="outlined"
                        id="productName"
                        label="Name of the Product"
                        name="productName"
                        required
                        sx={{
                            gridColumn: "2/4",
                        }}
                    />

                    <TextField
                        {...register("description")}
                        variant="outlined"
                        id="description"
                        label="Description"
                        name="description"
                        multiline
                        rows={5}
                        required
                        sx={{ gridColumn: "2/4" }}
                    />
                    <TextField
                        {...register("category")}
                        // change all ids
                        id="outlined-category-status"
                        name="category"
                        required
                        select
                        defaultValue="art"
                        helperText="Category"
                        sx={{ gridColumn: "2/4" }}
                    >
                        {categories.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>

                    <FormControl variant="outlined" sx={{ gridColumn: "2/3" }}>
                        <InputLabel htmlFor="price">Price</InputLabel>
                        <OutlinedInput
                            {...register("price")}
                            id="price"
                            type="number"
                            required
                            endAdornment={
                                <InputAdornment position="end">
                                    €
                                </InputAdornment>
                            }
                            label="Price"
                        />
                    </FormControl>

                    <TextField
                        {...register("status")}
                        // change all ids
                        id="outlined-select-status"
                        name="status"
                        required
                        select
                        defaultValue="new"
                        helperText="Status of Product"
                        sx={{ gridColumn: "3/3" }}
                    >
                        {status.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <Box
                        {...getRootProps()}
                        border={`2px dashed gray`}
                        textAlign="center"
                        height="4rem"
                        color="gray"
                        sx={{
                            gridColumn: "2/4",
                            "&:hover": {
                                cursor: "pointer",
                            },
                        }}
                    >
                        <input {...getInputProps()} />

                        {file.length < 1 ? (
                            <p>Add a Product Picture here</p>
                        ) : (
                            <p>{file}</p>
                        )}
                        <Typography mt="1.4rem" fontSize="0.85rem">
                            minimum 400x400px (Filetype: jpeg,png)
                        </Typography>
                    </Box>
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
                        loading={btnLoading}
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
                {message !== "" && (
                    <Typography
                        textAlign="center"
                        fontWeight="bold"
                        fontSize="1.25rem"
                        sx={{
                            color:
                                message === "Successful"
                                    ? statusColors["success"]
                                    : statusColors["error"],
                            gridColumn: "2/4",
                        }}
                    >
                        {message}
                    </Typography>
                )}
            </form>
        </>
    )
}
