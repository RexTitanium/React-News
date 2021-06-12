import React, {useState} from 'react'
import NewsCard from './NewsCard'
import {Grid, Grow, Typography} from '@material-ui/core'
import useStyles from './NewsArticles_styles'


const infoCards = [
    { color: '#00838f', title: 'Latest News', text: 'Give me the latest news' },
    { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
    { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: '\"What\'s new with PlayStation 5 \" or \"Give me the news on PlayStation 5\"' },
    { color: '#283593', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
  ];

const NewsArticles = ({articles, activeArticle}) => {

    
    
    const classes = useStyles();

    if(!articles.length){
        return(
            <Grow in>
                <Grid className={classes.container}  container alignItems="stretch" spacing ={3}>
                    {infoCards.map((infocard) => {
                        return(
                            <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infocard}>
                                <div className={classes.card} style ={{backgroundColor: infocard.color}}>
                                    <Typography variant="h5">{infocard.title}</Typography>
                                    {infocard.info 
                                    ?
                                       ( <Typography variant="h6">
                                            <strong>
                                                {infocard.title.split(' ')[2]}:
                                            </strong>
                                                <br />
                                                {infocard.info}
                                        </Typography> )
                                    :
                                        null} 
                                    <Typography variant="h6">Try Saying: <br/><i>{infocard.text}</i></Typography>
                                </div>
                            </Grid>
                        );
                    })}
                </Grid>
            
        </Grow>
        );
    }

    const newscard = articles.map((article, i) => {
        return(
            <Grid key={i} item xs ={12} sm={6} lg={3} style ={{display: 'flex' }}>
                <NewsCard article ={article}  activeArticle={activeArticle} i={i}/>
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
