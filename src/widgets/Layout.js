import React from "react";
import "./Layout.css"
import {AppBar, Box, Container, IconButton, Toolbar, Typography} from "@mui/material";

const Layout = ({children}) => {

    return (
        <div className="main">
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: {xs: 'none', md: 'flex'},
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Home
                        </Typography>
                        <Box sx={{display: "flex", gap: "16px"}}>
                            <Typography component="a" href="/" sx={{color: "inherit"}}>Feed</Typography>
                            <Typography component="a" href="/popular" sx={{color: "inherit"}}>Popular</Typography>
                            <Typography component="a" href="/recent" sx={{color: "inherit"}}>Recent</Typography>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <section className="content">{children}</section>
        </div>
    )
}

export {Layout}