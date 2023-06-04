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
} from "@mui/material"

const pages = ["Home", "Products", "Contact Us"]
const settings = ["Account", "Logout"]

function Navbar() {
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
                style={{
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
                                mr: 110,
                                display: { xs: "none", md: "flex" },
                                fontFamily: "monospace",
                                fontSize: "1.8rem",
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
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
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
                                {pages.map((page) => (
                                    <MenuItem
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                    >
                                        <Typography
                                            textAlign="center"
                                            style={{ color: "#2C3E50" }}
                                        >
                                            {page}
                                        </Typography>
                                    </MenuItem>
                                ))}
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
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
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
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton
                                    onClick={handleOpenUserMenu}
                                    sx={{ p: 0, mr: { xs: 0, md: 6 } }}
                                >
                                    <Avatar src="/static/images/avatar/2.jpg" />
                                </IconButton>
                            </Tooltip>

                            <Tooltip title="Open Cart">
                                <IconButton
                                    onClick={handleOpenUserMenu}
                                    sx={{
                                        mr: 1,
                                        mt: 1,
                                        display: { xs: "none", md: "inline" },
                                    }}
                                >
                                    <ShoppingBasketIcon
                                        color="primary"
                                        style={{ width: "40", height: "40" }}
                                    ></ShoppingBasketIcon>
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: "45px" }}
                                id="menu-appbar"
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
                                {settings.map((setting) => (
                                    <MenuItem
                                        key={setting}
                                        onClick={handleCloseUserMenu}
                                    >
                                        <Typography textAlign="center">
                                            {setting}
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </CssBaseline>
    )
}
export default Navbar