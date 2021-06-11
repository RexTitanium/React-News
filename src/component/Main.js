import React, {useEffect, useState} from 'react'
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsArticles from './NewsArticles';



const alanKey = 'b99db486f0d8cad5e811f20674c404462e956eca572e1d8b807a3e2338fdd0dc/stage';

const Main =()=>{

    const [newsArticles, setNewsArticles] = useState ([]);


    useEffect (() => {
        alanBtn({
          key: alanKey,
          onCommand: ({ command, articles }) =>{
            if(command === 'newHeadlines'){
                setNewsArticles(articles);
            }
          }
        })
      }, [])

      return(
          <div>
             <h1>Main</h1>
                <NewsArticles articles={newsArticles} />
            </div>
        );
}

export default Main;
