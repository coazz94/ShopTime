import React from "react"
import {
    Avatar,
    Button,
    CssBaseline,
    TextField,
    FormControlLabel,
    Checkbox,
    Link,
    Grid,
    Typography,
    Container,
    makeStyles,
} from "@mui/material"

// https://www.youtube.com/watch?v=PquWexbGcVc

import { useForm, Controller } from "react-hook-form"

// const useStyles = makeStyles((theme) => ({
//     paper: {
//         marginTop: theme.spacing(8),
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//     },
//     avatar: {
//         margin: theme.spacing(1),
//         backgroundColor: theme.palette.secondary.main,
//     },
//     form: {
//         width: "100%", // Fix IE 11 issue.
//         marginTop: theme.spacing(1),
//     },
//     submit: {
//         margin: theme.spacing(3, 0, 2),
//     },
// }))

export default function Form() {
    const { register, handleSubmit } = useForm()

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form
                    noValidate
                    onSubmit={handleSubmit((data) =>
                        alert(JSON.stringify(data))
                    )}
                >
                    <TextField
                        {...register("email")}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        {...register("password")}
                        variant="outlined"
                        margin="normal"
                        // inputRef="register"
                        // inputRef={register}
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        {...register("check")}
                        control={
                            // <Controller
                            //     as={Checkbox}
                            //     control={control}
                            //     name="remember"
                            //     color="primary"
                            //     defaultValue={false}
                            // />

                            <Checkbox value="remember" color="primary" />
                        }
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    )
}
