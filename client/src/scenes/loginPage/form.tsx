import { Box, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useAppDispatch } from "../../state/hooks"
import { setLogin } from "../../state"
import { useNavigate } from "react-router-dom"
import { LoadingButton } from "@mui/lab"
import Basic from "./dropZone"

type FormValues = {
    email: string
    password: string
    username: string
    phone: number
    r_password: string
    picture: File | null
}

interface setHeaderType {
    setHeader: React.Dispatch<React.SetStateAction<boolean>>
}

const statusColors = {
    success: "#66bb6a",
    error: "#f44336",
}

export default function Form({ setHeader }: setHeaderType) {
    const [pageType, setPageType] = useState<string>("login")
    const [message, setMessage] = useState<string>("")
    const [btnLoading, setBtnLoading] = useState<boolean>(false)
    const [profileImage, setProfileImage] = useState<File | null>(null)
    const isLogin: boolean = pageType === "login"
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { register, handleSubmit, reset } = useForm<FormValues>()

    const loginUser = async (formData: FormValues) => {
        const loginResponse = await fetch("http://localhost:3000/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        })

        setBtnLoading(() => true)
        await timeout(2000)

        if (loginResponse.ok) {
            setMessage(() => "Login Successful")
            const loggedIn = await loginResponse.json()
            dispatch(
                setLogin({
                    user: loggedIn.user._id,
                    token: loggedIn.token,
                })
            )
            await timeout(2000)
            setBtnLoading(() => false)
            navigate("/")
        } else {
            const message = await loginResponse.json()
            setBtnLoading(() => false)
            setMessage(() => message.errorMessage)
        }
    }

    const registerUser = async (data: FormValues) => {
        setBtnLoading(() => true)

        const formData = new FormData()

        for (const [key, value] of Object.entries(data)) {
            formData.append(key, JSON.stringify(value))
        }

        // append the file and the path to the Formdata
        formData.append("picture[]", JSON.stringify(profileImage))
        formData.append("picturePath", JSON.stringify(profileImage?.name))

        try {
            const registerUserResponse = await fetch(
                "http://localhost:3000/auth/register",
                {
                    method: "POST",
                    body: formData,
                }
            )

            await timeout(2000)

            if (registerUserResponse.ok) {
                setMessage(() => "Register Successful")
                await timeout(2000)
                setBtnLoading(() => false)
                setPageType("login")
            } else {
                const message = await registerUserResponse.json()
                console.log(message)
                setMessage(() => message.errorMessage)
                setBtnLoading(() => false)
            }
        } catch (error) {
            setMessage(() => "Server unavailable")
        }
    }

    const handleFormSubmit = (formData: FormValues) => {
        if (isLogin) loginUser(formData)
        if (!isLogin) registerUser(formData)
    }

    // const getDropzone = (file: File): void => setProfileImage(() => file)

    const timeout = (delay: number) => {
        return new Promise((res) => setTimeout(res, delay))
    }

    useEffect(() => {
        setHeader(() => isLogin)
        setMessage(() => "")
    }, [pageType, setHeader, isLogin])

    return (
        <>
            <Typography
                fontWeight="bold"
                fontSize="1.25rem"
                mb={"1.5rem"}
                sx={{
                    color:
                        message.split(" ")[1] === "Successful"
                            ? statusColors["success"]
                            : statusColors["error"],
                }}
            >
                {message}
            </Typography>
            <form onSubmit={handleSubmit((data) => handleFormSubmit(data))}>
                <Box
                    display="grid"
                    gap="25px"
                    gridTemplateColumns="repeat(4, minmax(0, 200px))"
                >
                    {/* Check if Login is true and show Login Page */}
                    {isLogin ? (
                        <>
                            <TextField
                                {...register("email")}
                                variant="outlined"
                                id="email"
                                label="Email Address"
                                name="email"
                                type="email"
                                required
                                autoComplete="email"
                                autoFocus
                                sx={{ gridColumn: "2/4" }}
                            />
                            <TextField
                                {...register("password")}
                                variant="outlined"
                                id="password"
                                label="Password"
                                name="password"
                                type="password"
                                required
                                autoComplete="off"
                                sx={{ gridColumn: "2/4" }}
                            />
                        </>
                    ) : (
                        // Else Show Register Page
                        <>
                            <TextField
                                {...register("username")}
                                variant="outlined"
                                id="username"
                                label="Username"
                                name="username"
                                required
                                autoComplete="username"
                                sx={{ gridColumn: "2/4" }}
                            />
                            <TextField
                                {...register("email")}
                                variant="outlined"
                                id="email"
                                label="Email Address"
                                name="email"
                                type="email"
                                required
                                autoComplete="email"
                                sx={{ gridColumn: "2/4" }}
                            />
                            <TextField
                                {...register("phone")}
                                variant="outlined"
                                id="phone"
                                label="Phone"
                                name="phone"
                                autoComplete="phone"
                                sx={{ gridColumn: "2/4" }}
                            />
                            <TextField
                                {...register("password")}
                                variant="outlined"
                                id="password"
                                label="Password"
                                name="password"
                                type="password"
                                required
                                autoComplete="off"
                                sx={{ gridColumn: "2/4" }}
                            />
                            <TextField
                                {...register("r_password")}
                                variant="outlined"
                                id="r_password"
                                label="Password"
                                name="r_password"
                                type="password"
                                required
                                autoComplete="off"
                                sx={{ gridColumn: "2/4" }}
                            />
                            <Basic getDropzone={setProfileImage} />
                        </>
                    )}
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
                            m: "2rem 0",
                            width: "40%",
                        }}
                    >
                        {isLogin ? "LOGIN" : "REGISTER"}
                    </LoadingButton>
                    <Typography
                        onClick={() => {
                            setPageType(isLogin ? "register" : "login"), reset()
                        }}
                        sx={{
                            textDecoration: "underline",
                            "&:hover": {
                                color: "red",
                                cursor: "pointer",
                            },
                        }}
                    >
                        {isLogin
                            ? "Don't have an account? Sign Up here."
                            : "Already have an account? Login here."}
                    </Typography>
                </Box>
            </form>
        </>
    )
}
