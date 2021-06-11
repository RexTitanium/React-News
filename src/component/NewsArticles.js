import React from 'react'
import NewsCard from './NewsCard'
import {Grid, Grow, Typography} from '@material-ui/core'
import useStyles from './NewsArticles_styles'

const NewsArticles = ({articles}) => {

    const classes = useStyles();

    const newscard = articles.map((article, i) => {
        return(
            <Grid key={i} item xs ={12} sm={6} lg={3} style ={{display: 'flex' }}>
                <NewsCard article ={article} i={i}/>
            </Grid>
            
        );
    })
    return (
        <Grow in>
            <Grid className={classes.container}  container alignItems="stretch" spacing ={3}>
            {newscard}
            </Grid>
            
        </Grow>
    )
}

export default NewsArticles
