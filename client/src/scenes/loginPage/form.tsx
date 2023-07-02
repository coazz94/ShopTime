import { Box, Button, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useAppDispatch, useAppSelector } from "../../state/hooks"
import { useNavigate } from "react-router-dom"
import { setLogin } from "../../state"

type FormValues = {
    email: string
    password: string
    username: string
    phone: number
    r_password: string
}

export default function Form() {
    const [pageType, setPageType] = useState<string>("login")
    const isLogin: boolean = pageType === "login"
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    // const isRegister: boolean = pageType === "register"
    const { register, handleSubmit, reset } = useForm<FormValues>()

    const loginUser = async (formData: FormValues) => {
        const loginResponse = await fetch("http://localhost:3000/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        })

        const username = "aco"

        if (loginResponse.ok) {
            const loggedIn = await loginResponse.json()
            console.log(loggedIn)
            dispatch(
                setLogin({
                    user: username,
                    token: "",
                })
            )
        }

        navigate("/")
    }
    const registerUser = async (data: FormValues) => {
        const registerUserResponse = await fetch(
            "http://localhost:3000/auth/register",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            }
        )

        const registeredUser = await registerUserResponse.json()

        if (registeredUser) setPageType("login")
    }

    function handleFormSubmit(formData: FormValues) {
        if (isLogin) loginUser(formData)
        if (!isLogin) registerUser(formData)
    }

    return (
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
                <Button
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
                </Button>
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
    )
}
