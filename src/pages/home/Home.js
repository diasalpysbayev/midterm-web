import React, {useEffect, useState} from "react";
import {Layout} from "../../widgets/Layout";
import "./Home.css"
import {Card, Grid, Typography, CardContent, CardActions, Button, CardMedia} from "@mui/material";

const HomePage = () => {
    const [posts, setPosts] = useState([
        {
            title: "Morgan Stanley calls Tesla Semi a 'threat' to OEMs worldwide",
            image: "https://images.barrons.com/im-26405020/social",
            description: "Morgan Stanley calls Tesla Semi a 'threat' to OEMs worldwide"
        },
        {
            title: "Why NIO’s Reported Layoffs Could Be Bad News for Tesla, BYD, Other EV Makers",
            image: "https://c.biztoc.com/p/a2ae396061eb2858/s.webp",
            description: "lectric vehicle investors got some concerning news about NIO Friday. It could have implications for Tesla and other EV peers. It might not. It will take investors a while to figure it all out.#nio #tesla"
        },
        {
            title: "Biztoc.com",
            image: "https://c.biztoc.com/p/a2ae396061eb2858/s.webp",
            description: "Musk's xAI set to launch first AI model to select group\",\n" +
                "\"description\": \"Tesla and SpaceX's CEO Elon Musk pauses during an in-conversation event with British Prime Minister Rishi Sunak in London, Britain, Thursday, Nov. 2, 2023. Kirsty Wigglesworth/Pool via REUTERS Acquire Licensing Rights Nov 3 (Reuters) - Elon Musk's artificial …"
        },
    ])
    const [openedModal, setOpenedModal] = useState()

    return (
        <Layout>
            <Typography variant="h2">VKontakte</Typography>
            <Typography sx={{paddingLeft: "20px"}} variant="p">
                Моя стена
            </Typography>
            <Button onClick={() => setOpenedModal(true)}>
                Add news
            </Button>
            <Grid container spacing={3} sx={{padding: "20px"}}>
                {posts.map((item, inedx) => (
                    <Grid item md={4}>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    {item.title}
                                </Typography>
                                <Typography variant="h5" component="div">
                                    {item.description}
                                </Typography>
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image={item.image}
                                    alt="Paella dish"
                                />
                            </CardContent>
                            <CardActions>
                                <Button size="small">Read more</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Layout>
    )
}

export {HomePage}