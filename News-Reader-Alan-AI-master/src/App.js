import React,{useEffect,useState} from 'react';
import NewsCards from "./components/NewsCards/newsCards";
import alanBtn from "@alan-ai/alan-sdk-web";
import useStyle from "./style";
const alanKey="cf1b9335231eb9146f8d93226453e2aa2e956eca572e1d8b807a3e2338fdd0dc/stage";
function App() {
  const [NewsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setactiveArticle] = useState(-1);
  const classes =useStyle();
  useEffect(() => {
   alanBtn({
     key:alanKey,
     onCommand:({command,articles})=>{
       if(command==="newsHeadlines"){
        setNewsArticles(articles);
        setactiveArticle(-1);
       }else if(command==="highlight"){
        setactiveArticle((prevActiveArticle)=>prevActiveArticle+1);
       }
     }
   })
  }, [])
  return (
    <div className="App">
    <div className={classes.logoContainer}>
      <img src="https://alan.app/voice/images/previews/preview.jpg" alt="Alan Logo" className={classes.alanLogo}/>      
    </div>
       <h1>Tap The Right Buttom little icon and Say 'What can i do here ?' to know what it is actually app do </h1>
      <NewsCards articles={NewsArticles} activeArticle={activeArticle}/>
    </div>
  );
}

export default App;
