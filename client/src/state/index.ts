import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface AuthState {
    user: string | null
    token: string | null
}

const initialState: AuthState = {
    user: null,
    token: null,
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLogin: (
            state,
            action: PayloadAction<{ user: string; token: string }>
        ) => {
            state.user = action.payload.user
            state.token = action.payload.token
        },
        setLogout: (state) => {
            state.user = null
            state.token = null
        },
    },
})

export const { setLogin, setLogout } = authSlice.actions

export default authSlice.reducer
