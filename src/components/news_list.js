import React from 'react';
import NewsItem from './news_list_item';

const NewsList = (props) =>{
    let data = Array.from(props.results);
    const items = data.map((item, i)=>{
        console.log(data)
        return(
            <NewsItem key={i} item={item}/>
        )
    });

    return (
        <div className="result_wrap">
            {props.children}
            {items}
        </div>
    )
}

export default NewsList;