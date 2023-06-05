import { Box, Button, Typography } from "@mui/material"
import SwipeableTextMobileStepper from "./swipeProducts"

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
                    // backgroundColor: "red",
                    mt: 5,
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                {/* <SwipeableTextMobileStepper /> */}
            </Box>
        </>
    )
}
