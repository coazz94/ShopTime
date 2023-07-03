import Homepage from "./scenes/homePage"
import Navbar from "./scenes/navBar"
import ProductPage from "./scenes/productPage"
import ProfilePage from "./scenes/profilePage"
import LoginPage from "./scenes/loginPage"
import ContactPage from "./scenes/contactPage"
import CartPage from "./scenes/cartPage"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "./state/hooks"
import { setLogout } from "./state"

function App() {
    const dispatch = useAppDispatch()
    const user = useAppSelector((state) => state.user)
    const isAuth = user !== null ? true : false

    const logoutUser = () => {
        dispatch(setLogout())
    }

    console.log(user)

    return (
        <>
            <BrowserRouter>
                <Navbar logoutUser={logoutUser} isAuth={isAuth} />
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/products" element={<ProductPage />} />
                    <Route
                        path="/login"
                        element={
                            isAuth ? <ProfilePage /> : <Navigate to="/login" />
                        }
                    />
                    <Route path="/contact-info" element={<ContactPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route
                        path="/user/:id"
                        element={isAuth ? <ProfilePage /> : <LoginPage />}
                    />
                    <Route element={<ProfilePage />} path="/profile" />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
