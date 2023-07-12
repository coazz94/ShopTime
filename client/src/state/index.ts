import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface AuthState {
    user: string | null
    token: string | null
    picturePath: string | null
}

const initialState: AuthState = {
    user: null,
    token: null,
    picturePath: null,
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLogin: (
            state,
            action: PayloadAction<{
                user: string
                token: string
                picturePath: string
            }>
        ) => {
            state.user = action.payload.user
            state.token = action.payload.token
            state.picturePath = action.payload.picturePath
        },
        setLogout: (state) => {
            state.user = null
            state.token = null
            state.picturePath = null
        },
    },
})

export const { setLogin, setLogout } = authSlice.actions

export default authSlice.reducer
