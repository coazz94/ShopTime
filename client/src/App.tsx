import Homepage from "./scenes/homePage"
import Navbar from "./scenes/navBar"
import ProductPage from "./scenes/productPage"
import ProfilePage from "./scenes/profilePage"
import LoginPage from "./scenes/loginPage"
import ContactPage from "./scenes/contactPage"
import CartPage from "./scenes/cartPage"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useAppSelector } from "./state/hooks"

function App() {
    const userId = useAppSelector((state) => state)
    // const isAuth = userId !== "" ? true : false
    const isAuth = false

    console.log("logging", userId)

    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/products" element={<ProductPage />} />
                    <Route
                        path="/login"
                        element={isAuth ? <ProfilePage /> : <LoginPage />}
                    />
                    <Route path="/contact-info" element={<ContactPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route
                        path="/user/:id"
                        element={isAuth ? <ProfilePage /> : <LoginPage />}
                    />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
