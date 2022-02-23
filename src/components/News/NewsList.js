import React from "react";

const NewsList = ({searchResultList}) => {
  return (
  <div>
    {
      searchResultList.map(({title,url},index)=>{
        return (
          <a href={url} key={index}>
            {title}
          <br></br>
          </a>
          
        )
      })
    }
  </div>
  )
};

export default NewsList;
