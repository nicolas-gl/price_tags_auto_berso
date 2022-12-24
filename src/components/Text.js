import {useState, useLayoutEffect} from 'react'
import React from 'react'


export default function Text(props) {

  const [request, setRequest] = useState("empty");
  const [item, setItem] = useState();
  const [error, setError] = useState();

  useLayoutEffect(() => { if (props.isSelected) {
    setRequest("loading")
    fetch(`https://pricetags.tech/articles/${props.article}`)
      .then(res => res.json())
      .then(
        (result) => {
          setRequest("ok")
          setItem(result);
        },
        (error) => {
          setRequest("error");
          setError(error);
        }
      )
    } else {
      setRequest("empty");
      setItem();
      setError();
    }
  }, [props.isSelected, props.article])


  // let theList = [item.title, item.material]


  if (request === "empty") {
    return <div></div>
  } else if (request === "loading") {
    return <div>Loading...</div>;
  } else if (request === "error") {
    return <div>Ошибка: {error.message}</div>;
  } else if (request === "ok") {
    return (
      <ul >

        <li key={item.title} contentEditable>
          {item.title}
        </li>

        <li key={item.material} contentEditable>
          {item.material} 
        </li>

        <li key={item.period} contentEditable>
          {item.period} 
        </li>

        <li key={item.price} contentEditable>
          {item.price} 
        </li>

        <li key={item.article_id} contentEditable>
          {item.article_id} 
        </li>
        
        {/* { [...Array(theList)].map((item, value) => <li key={item} >{value}</li>  ) } */}

      </ul>
    );
  }
}