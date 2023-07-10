import React from "react"
import CssBaseline from "@mui/material/CssBaseline"
import MenuIcon from "@mui/icons-material/Menu"
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket"
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    Container,
    Avatar,
    Button,
    Tooltip,
    MenuItem,
    Link as MuiLink,
} from "@mui/material"
import { Link } from "react-router-dom"

const pageLinks = [
    { link: "/", page: "Home" },
    { link: "/products", page: "Products" },
    { link: "/contact-info", page: "Contact" },
]

type NavbarProps = {
    logoutUser: () => void
    isAuth: boolean
}

function Navbar({ logoutUser, isAuth }: NavbarProps) {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null
    )
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
        null
    )

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget)
    }
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget)
    }
    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }
    const handleCloseUserMenu = () => {
        setAnchorElUser(null)
    }

    return (
        <CssBaseline>
            <AppBar
                position="static"
                sx={{
                    backgroundColor: "transparent",
                    boxShadow: "none",
                }}
            >
                <Container sx={{ maxWidth: "100%" }} maxWidth={false}>
                    <Toolbar disableGutters>
                        {/* Normal Screen Nav */}
                        <Box
                            component="img"
                            sx={{
                                display: { xs: "none", md: "flex" },
                                mr: 2,
                                height: 50,
                                width: 50,
                            }}
                            src="../assets/shopIcon.png"
                            alt="ShopIcon"
                        />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: { md: 20, xl: 100, lg: 50 },
                                display: { xs: "none", md: "flex" },
                                fontFamily: "Arial",
                                fontSize: "1.5rem",
                                fontWeight: 800,
                                color: "#2C3E50",
                                textDecoration: "none",
                            }}
                        >
                            ShopTime
                        </Typography>
                        {/* Routes */}
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: "flex", md: "none" },
                            }}
                        >
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                            >
                                <MenuIcon />
                            </IconButton>

                            {/* Mobile Menu */}

                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "left",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "left",
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: "block", md: "none" },
                                }}
                            >
                                {/* mobile Pages  */}

                                {/* {pageLinks.map(({ link, page }) => (
                                    <Button
                                        component={Link}
                                        to={`${link}`}
                                        key={page}
                                        sx={{
                                            my: 2,
                                            fontWeight: "bold",
                                            fontSize: "1rem",
                                            color: "#2C3E50",
                                            display: "block",
                                        }}
                                    >
                                        {page}
                                    </Button>
                                ))} */}

                                {pageLinks.map(({ link, page }) => (
                                    <MenuItem
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                    >
                                        <Button
                                            component={Link}
                                            to={`${link}`}
                                            key={page}
                                            sx={{
                                                color: "#2C3E50",
                                                display: "block",
                                            }}
                                        >
                                            {page}
                                        </Button>
                                    </MenuItem>
                                ))}
                                {/* {pages.map((page) => (
                                    <MenuItem
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                    >
                                        <Typography
                                            textAlign="center"
                                            sx={{ color: "#2C3E50" }}
                                        >
                                            {page}
                                        </Typography>
                                    </MenuItem>
                                ))} */}
                            </Menu>
                        </Box>
                        {/* MOBILE NAV */}
                        <Box
                            component="img"
                            sx={{
                                display: { xs: "flex", md: "none" },
                                mr: 2,
                                height: 25,
                                width: 25,
                            }}
                            src="../assets/shopIcon.png"
                            alt="ShopIcon"
                        />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: "flex", md: "none" },
                                flexGrow: 1,
                                fontFamily: "monospace",
                                fontWeight: 700,
                                color: "#2C3E50",
                                textDecoration: "none",
                            }}
                        >
                            ShopTime
                        </Typography>

                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: "none", md: "flex" },
                            }}
                        >
                            {pageLinks.map(({ link, page }) => (
                                <Button
                                    component={Link}
                                    to={`${link}`}
                                    key={page}
                                    sx={{
                                        my: 2,
                                        fontWeight: "bold",
                                        fontSize: "1rem",
                                        color: "#2C3E50",
                                        display: "block",
                                    }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexGrow: 0,
                                flexDirection: "row",
                            }}
                        >
                            {/* ProfilePicture */}

                            <Tooltip title="Open settings">
                                <IconButton
                                    onClick={handleOpenUserMenu}
                                    sx={{ p: 0, mr: { xs: 0, md: 6 } }}
                                >
                                    <Avatar src="public\assets\rocket.png" />
                                </IconButton>
                            </Tooltip>

                            {/* Cart */}

                            <Tooltip title="Open Cart">
                                <Button
                                    component={Link}
                                    to={"/cart"}
                                    sx={{
                                        mr: 1,
                                        // ml: 1,
                                        display: { xs: "none", md: "flex" },
                                    }}
                                >
                                    <ShoppingBasketIcon
                                        sx={{
                                            width: 40,
                                            height: 40,
                                        }}
                                    ></ShoppingBasketIcon>
                                </Button>
                            </Tooltip>

                            {/* Menu Options */}

                            <Menu
                                sx={{ mt: "45px" }}
                                id="basic-menu"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                <MenuItem
                                    key={"account"}
                                    onClick={handleCloseUserMenu}
                                >
                                    <MuiLink
                                        sx={{
                                            // fontFamily: "Arial",
                                            color: "#2C3E50",
                                            textDecoration: "none",
                                        }}
                                        href="/profile"
                                    >
                                        Account
                                    </MuiLink>
                                </MenuItem>
                                <MenuItem
                                    sx={{
                                        display: { xs: "flex", md: "none" },
                                    }}
                                    key={"cart"}
                                    onClick={handleCloseUserMenu}
                                >
                                    <MuiLink
                                        sx={{
                                            fontFamily: "Arial",
                                            color: "#2C3E50",
                                            textDecoration: "none",
                                        }}
                                        href="/cart"
                                    >
                                        Cart
                                    </MuiLink>
                                </MenuItem>
                                <MenuItem
                                    key={"account2"}
                                    onClick={handleCloseUserMenu}
                                >
                                    {isAuth ? (
                                        <MuiLink
                                            sx={{
                                                fontFamily: "Arial",
                                                color: "#2C3E50",
                                                textDecoration: "none",
                                            }}
                                            onClick={logoutUser}
                                        >
                                            Logout
                                        </MuiLink>
                                    ) : (
                                        <MuiLink
                                            sx={{
                                                fontFamily: "Arial",
                                                color: "#2C3E50",
                                                textDecoration: "none",
                                            }}
                                            href="/login"
                                        >
                                            Login
                                        </MuiLink>
                                    )}
                                </MenuItem>
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </CssBaseline>
    )
}
export default Navbar
