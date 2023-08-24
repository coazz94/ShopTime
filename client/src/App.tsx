import Homepage from "./scenes/homePage"
import Navbar from "./scenes/navbar"
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
import AddProduct from "./scenes/addProduct"

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
                    <Route path="/" element={<Homepage isAuth={isAuth} />} />
                    <Route path="/products/all" element={<ProductOverview />} />
                    <Route path="/product/:id" element={<ProductPage />} />
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
                    Put in here the routes that are only available for
                    authorized user
                    {isAuth && (
                        <Route
                            path="/product/add-Product"
                            element={<AddProduct />}
                        />
                    )}
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
