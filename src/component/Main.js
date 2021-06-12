import React, {useEffect, useState} from 'react'
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsArticles from './NewsArticles';
import useStyles from './styles'


const alanKey = 'b99db486f0d8cad5e811f20674c404462e956eca572e1d8b807a3e2338fdd0dc/stage';

const Main =()=>{

    const [newsArticles, setNewsArticles] = useState ([]);
    const [activeArticle, setActiveArticle] = useState(-1);
    const classes = useStyles();
    useEffect (() => {
        alanBtn({
          key: alanKey,
          onCommand: ({ command, articles }) =>{
            if(command === 'newHeadlines'){
                setNewsArticles(articles);
                setActiveArticle(-1);
            }
            else if(command === 'highlight'){
              setActiveArticle((prev) => prev + 1)
            }
          }
        })
      }, [])

      return(
          <div>
             <div className={classes.logoContainer}>
               <img src="https://alan.app/voice/images/previews/preview.jpg" alt="logo"className={classes.alanLogo}/>
             </div>
                <NewsArticles articles={newsArticles} activeArticle={activeArticle}/>
            </div>
        );
}

export default Main;
