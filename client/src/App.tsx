import Homepage from "./scenes/homePage"
import Navbar from "./scenes/navBar"
import ProductOverview from "./scenes/productOverviewPage"
import ProfilePage from "./scenes/profilePage"
import LoginPage from "./scenes/loginPage"
import ContactPage from "./scenes/contactPage"
import CartPage from "./scenes/cartPage"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "./state/hooks"
import { setLogout } from "./state"
import ErrorPage from "./scenes/errorPage"
import ProductPage from "./scenes/productsPage"

function App() {
    const dispatch = useAppDispatch()
    const user = useAppSelector((state) => state.user)
    const profilePicture = useAppSelector((state) => state.picturePath)
    const isAuth = user !== null ? true : false

    const logoutUser = () => {
        dispatch(setLogout())
    }

    return (
        <>
            <BrowserRouter>
                <Navbar
                    logoutUser={logoutUser}
                    isAuth={isAuth}
                    profilePicture={profilePicture}
                />
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/products" element={<ProductOverview />} />
                    <Route path="/products/:id" element={<ProductPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/contact-info" element={<ContactPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/user/:id" />
                    <Route
                        path="/profile"
                        element={
                            isAuth ? <ProfilePage /> : <Navigate to="/login" />
                        }
                    />
                    <Route path="/*" element={<ErrorPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
