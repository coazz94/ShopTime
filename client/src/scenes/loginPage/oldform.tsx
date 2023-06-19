import { Box, Button, TextField, Typography } from "@mui/material"
import { useState } from "react"

export default function Form() {
    const [pageType, setPageType] = useState<string>("register")
    const isLogin: boolean = pageType === "login"
    const isRegister: boolean = pageType === "register"

    return (
        <form onSubmit={() => console.log("hey")}>
            <Box
                display="grid"
                gap="25px"
                gridTemplateColumns="repeat(4, minmax(0, 200px))"
            >
                {/* Check if Login is true and show Login Page */}
                {isLogin ? (
                    <>
                        <TextField
                            label="Email"
                            // onBlur={handleBlur}
                            // onChange={handleChange}
                            // value={values.email}
                            name="email"
                            // error={Boolean(touched.email) && Boolean(errors.email)}
                            // helperText={touched.email && errors.email}
                            sx={{ gridColumn: "2/4" }}
                        />
                        <TextField
                            label="Password"
                            type="password"
                            // onBlur={handleBlur}
                            // onChange={handleChange}
                            // value={values.password}
                            name="password"
                            autoComplete="off"
                            // error={
                            //     Boolean(touched.password) && Boolean(errors.password)
                            // }
                            // helperText={touched.password && errors.password}
                            sx={{ gridColumn: "2/4" }}
                        />
                    </>
                ) : (
                    // Else Show Register Page
                    <>
                        <TextField
                            //Label is going to be shown as template text
                            label="Username"
                            //onBlur will adjust the state if we go out of focus
                            // onBlur={handleBlur}
                            // handle on change
                            // onChange={handleChange}
                            // value that will be set
                            // value={values.firstName}
                            name="username"
                            // if touched and no firstName then error
                            // error={
                            //     Boolean(touched.firstName) &&
                            //     Boolean(errors.firstName)
                            // }
                            // if touched and no firstName
                            // helperText={touched.firstName && errors.firstName}
                            // sx={{ gridColumn: "2/4" }}
                            sx={{ gridColumn: "2/4" }}
                        />
                        <TextField
                            label="E-mail"
                            // onBlur={handleBlur}
                            // onChange={handleChange}
                            // value={values.lastName}
                            name="email"
                            // error={
                            //     Boolean(touched.lastName) &&
                            //     Boolean(errors.lastName)
                            // }
                            // helperText={touched.lastName && errors.lastName}
                            sx={{ gridColumn: "2/4" }}
                        />
                        <TextField
                            label="Phone"
                            // onBlur={handleBlur}
                            // onChange={handleChange}
                            // value={values.location}
                            name="phone"
                            // error={
                            //     Boolean(touched.location) &&
                            //     Boolean(errors.location)
                            // }
                            // helperText={touched.location && errors.location}
                            sx={{ gridColumn: "2/4" }}
                        />
                        <TextField
                            label="Password"
                            type="password"
                            // onBlur={handleBlur}
                            // onChange={handleChange}
                            // value={values.password}
                            name="password"
                            autoComplete="off"
                            // error={
                            //     Boolean(touched.password) && Boolean(errors.password)
                            // }
                            // helperText={touched.password && errors.password}
                            sx={{ gridColumn: "2/4" }}
                        />
                        <TextField
                            label="Repeat Password"
                            type="r_password"
                            // onBlur={handleBlur}
                            // onChange={handleChange}
                            // value={values.password}
                            name="r_password"
                            autoComplete="off"
                            // error={
                            //     Boolean(touched.password) && Boolean(errors.password)
                            // }
                            // helperText={touched.password && errors.password}
                            sx={{ gridColumn: "2/4" }}
                        />
                    </>
                )}
            </Box>

            {/* BUTTONS */}
            <Box>
                <Button
                    fullWidth
                    type="submit"
                    sx={{
                        m: "2rem 0",
                        // backgroundColor: palette.primary.main,
                        // color: palette.background.alt,
                        // "&:hover": { color: palette.primary.main },
                    }}
                >
                    {isLogin ? "LOGIN" : "REGISTER"}
                </Button>
                {/* set the text shown in the corner down depending on which site we are
                Change even the onClick function according to the page
             */}
                <Typography
                    onClick={() => {
                        setPageType(isLogin ? "register" : "login")
                        // resetForm()
                    }}
                    sx={{
                        textDecoration: "underline",
                        // color: palette.primary.main,
                        "&:hover": {
                            cursor: "pointer",
                            // color: palette.primary.light,
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
