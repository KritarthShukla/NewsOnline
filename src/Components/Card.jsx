import React from 'react'
import './Card.css';

export default function Card({data}) {
    // console.log(data);
    // const datas=props.data;
    // if (!data || data.length === 0) {
    //     // Show a fallback message if data is not available or is empty
    //     return <p>No news to display.</p>;
    //   }
    // const readMore = (url)=>{
    //     window.open(url)
    // }
  return (
    <div className='cardContainer'>
        {data.map((curItem,index)=>{
            if(!curItem.urlToImage){
                return null
            }
            else{ 
                return(
                <div className='card'>
                    <img src={curItem.urlToImage}/>
                     <div className='Content'>
                         <a className='title' onClick={()=>window.open(curItem.url)}>
                        {curItem.title}
                        </a>
                         <p>
                          {curItem.description}
                         </p>
                       <button onClick={()=>window.open(curItem.url)}>Read More </button>
                     </div>
                </div>

            )}
           
        })}

       

    </div>
  )
}
