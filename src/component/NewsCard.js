import React from 'react'
import { Card, CardActions, CardActionArea, CardMedia, CardContent, Typography, Button, Tooltip, } from '@material-ui/core'
import useStyles from './NewsCards_styles';

const NewsCard = ({article:{ description, publishedAt, source, title, url, urlToImage}, i}) => {
    
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea href={url} target="_blank">
                <CardMedia className={classes.media} image ={urlToImage || 'https://unsplash.com/photos/WYd_PkCa1BY'}/>
                <div>
                    <Typography variant="body2" color="textSecondary" component="h2">{(new Date(publishedAt)).toDateString()}</Typography>
                    <Typography variant="body2" color="textSecondary" component="h2">{source.name}</Typography>
                </div>
                <Typography gutterBottom variant="h5">{title}</Typography>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">Learn More</Button>
                    <Typography variant="h5" color ="textSecondary">{i+1}</Typography>
                </CardActions>
            </CardActionArea>
            
        </Card>
    )
}

export default NewsCard
