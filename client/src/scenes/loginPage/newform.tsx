import {
    Button,
    CssBaseline,
    TextField,
    FormControlLabel,
    Checkbox,
    Link,
    Grid,
    Typography,
    Container,
} from "@mui/material"

import { useForm } from "react-hook-form"

type FormLoginValues = {
    email: string
    password: string
}

export default function Form() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormLoginValues>()

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
