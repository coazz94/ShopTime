import {
    Box,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
    Typography,
} from "@mui/material"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useAppDispatch } from "../../state/hooks"
import { setLogin } from "../../state"
import { useNavigate } from "react-router-dom"
import { LoadingButton } from "@mui/lab"
import Dropzone from "./dropZone"
import { Visibility, VisibilityOff } from "@mui/icons-material"

type FormValues = {
    email: string
    password: string
    username: string
    phone: number
    r_password: string
}

interface setHeaderType {
    setHeader: React.Dispatch<React.SetStateAction<boolean>>
}

export const statusColors = {
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
    //change to show only one password at a time
    const [showPassword, setShowPassword] = useState<boolean>(false)

    const handleClickShowPassword = () => setShowPassword((show) => !show)

    const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.preventDefault()
    }

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
            console.log(loggedIn)
            dispatch(
                setLogin({
                    user: loggedIn.user._id,
                    token: loggedIn.token,
                    picturePath: loggedIn.user.picturePath,
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
            formData.append(key, value)
        }

        // append the file and the path to the Formdata
        if (profileImage) {
            formData.append("picturePath", profileImage.name)
            formData.append("picture", profileImage)
        }

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

                            <FormControl
                                sx={{ gridColumn: "2/4" }}
                                variant="outlined"
                            >
                                <InputLabel htmlFor="password">
                                    Password
                                </InputLabel>
                                <OutlinedInput
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    {...register("password")}
                                    required
                                    autoComplete="off"
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={
                                                    handleClickShowPassword
                                                }
                                                onMouseDown={
                                                    handleMouseDownPassword
                                                }
                                                edge="end"
                                            >
                                                {showPassword ? (
                                                    <VisibilityOff />
                                                ) : (
                                                    <Visibility />
                                                )}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                />
                            </FormControl>
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
                            <FormControl
                                sx={{ gridColumn: "2/4" }}
                                variant="outlined"
                            >
                                <InputLabel htmlFor="password">
                                    Password
                                </InputLabel>
                                <OutlinedInput
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    {...register("password")}
                                    required
                                    autoComplete="off"
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={
                                                    handleClickShowPassword
                                                }
                                                onMouseDown={
                                                    handleMouseDownPassword
                                                }
                                                edge="end"
                                            >
                                                {showPassword ? (
                                                    <VisibilityOff />
                                                ) : (
                                                    <Visibility />
                                                )}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                />
                            </FormControl>

                            <FormControl
                                sx={{ gridColumn: "2/4" }}
                                variant="outlined"
                            >
                                <InputLabel htmlFor="r_password">
                                    Repeat Password
                                </InputLabel>
                                <OutlinedInput
                                    id="r_password"
                                    type={showPassword ? "text" : "password"}
                                    {...register("r_password")}
                                    required
                                    autoComplete="off"
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={
                                                    handleClickShowPassword
                                                }
                                                onMouseDown={
                                                    handleMouseDownPassword
                                                }
                                                edge="end"
                                            >
                                                {showPassword ? (
                                                    <VisibilityOff />
                                                ) : (
                                                    <Visibility />
                                                )}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                />
                            </FormControl>

                            <Box sx={{ gridColumn: "2/4" }}>
                                <Dropzone getDropzone={setProfileImage} />
                            </Box>
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
                            m: "2.5rem ",
                            mb: "0.8rem",
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
