import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Divider,
    Typography,
} from "@mui/material"
// import SwipeableTextMobileStepper from "./swipeProducts"

export default function Homepage() {
    return (
        <>
            <Box
                maxWidth="100%"
                sx={{
                    // backgroundColor: "red",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    mt: { xs: 2, xl: 14 },
                    flexWrap: "wrap",
                    padding: 2,
                }}
            >
                <Box sx={{ padding: 0, mb: 5 }}>
                    <Typography
                        variant="h6"
                        component="a"
                        sx={{
                            fontFamily: "Arial",
                            fontSize: "1.8rem",
                            fontWeight: 800,
                            color: "#2C3E50",
                        }}
                    >
                        Buy and Sell Everything you need or don't need NOW !
                        <Typography
                            variant="h6"
                            maxWidth="md"
                            sx={{
                                fontFamily: "Arial",
                                fontSize: "1rem",
                                color: "#2C3E50",
                                textDecoration: "none",
                                mt: "0.5rem",
                            }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt <br /> ut
                            labore et dolore magna aliqua. Ridiculus mus mauris
                            vitae ultricies leo.
                        </Typography>
                    </Typography>
                </Box>
                <Box>
                    <Button
                        variant="contained"
                        color="secondary"
                        sx={{
                            mr: { xs: 2, xl: 10 },
                            padding: 1.5,
                            backgroundColor: "#E74C3C",
                        }}
                    >
                        Sell NOW!
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        sx={{
                            // mr: 10,
                            padding: 1.5,
                            backgroundColor: "#E74C3C",
                        }}
                    >
                        Buy Now!
                    </Button>
                </Box>
            </Box>
            <Box
                maxWidth="100%"
                sx={{
                    mt: 8,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "10rem",
                }}
            >
                <Typography style={{ fontSize: "1.3rem" }}>
                    More than 120 000 Users registered, Join us and become a
                    part of the Community !
                </Typography>
            </Box>

            <Box
                sx={{
                    backgroundColor: "#faecef",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                }}
            >
                <Typography mt={5} mb={2} variant="h6">
                    Why ShopTime ?
                </Typography>

                <Divider sx={{ width: "100%" }} variant="middle" />
                <Box
                    sx={{
                        mt: 4,
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            width: "100%",
                            gap: "1.5rem",
                        }}
                    >
                        <Typography variant="h5" gutterBottom>
                            Voted “Best Shop" by Customers on XXX
                        </Typography>
                        <Typography variant="h6" gutterBottom align="center">
                            Happy customers become loyal customers. That’s why
                            ShopTime has won <br />
                            The best Sop Reward year after year.
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            mt: 10,
                            display: "flex",
                            justifyContent: "center",
                            gap: 10,
                            mb: 7,
                        }}
                    >
                        <Card sx={{ maxWidth: 300 }}>
                            <CardMedia
                                component="img"
                                alt="time pic"
                                height="300"
                                src="../assets/time.png"
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    align="center"
                                >
                                    Get started in minutes
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Integer vitae justo eget magna fermentum
                                    iaculis.
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{ maxWidth: 300 }}>
                            <CardMedia
                                component="img"
                                alt="time pic"
                                height="300"
                                src="../assets/coffee.png"
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    align="center"
                                >
                                    Increase sell time by 50%
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Integer vitae justo eget magna fermentum
                                    iaculis.
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{ maxWidth: 300 }}>
                            <CardMedia
                                component="img"
                                alt="time pic"
                                height="300"
                                src="../assets/rocket.png"
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    align="center"
                                >
                                    Connect with People
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Integer vitae justo eget magna fermentum
                                    iaculis.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                </Box>
            </Box>

            <Box
                sx={{
                    height: "20rem",
                    backgroundColor: "#2b34af",
                }}
            ></Box>
        </>
    )
}
