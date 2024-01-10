import { useState, useLayoutEffect } from 'react'
import React from 'react'
import styles from './Text.module.scss'


export default function Text(props) {

  const [request, setRequest] = useState("empty");
  const [item, setItem] = useState();
  const [error, setError] = useState();

  useLayoutEffect(() => {
    if (props.isSelected) {
      setRequest("loading")
      fetch(`https://bersopricetags.shop/articles/${props.article}`)
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


  if (request === "empty") {
    return <div></div>
  } else if (request === "loading") {
    return <div>Loading...</div>;
  } else if (request === "error") {
    return <div>Ошибка: {error.message}</div>;
  } else if (request === "ok") {
    return (
      <div className={styles["text-form"]}>
        <ul className={styles.text}>

          <li className={styles.title} contentEditable>
            {item.title}
          </li>

          <li className={styles.material} contentEditable>
            {(item.material[0] ? item.material[0].toUpperCase() + item.material.slice(1) : '')}
          </li>

          <li className={styles.period} contentEditable>
            {item.period}
          </li>

          {item.last_price ?
            <>
              <li className={styles.lastPrice} contentEditable>
                Цена: <span className={styles.text}>{item.last_price} руб.</span>
              </li>
              <li className={styles.discountPrice} contentEditable>
                {item.price} руб.
              </li>
            </>
            :
            <li className={styles.price} contentEditable>
              Цена: {item.price} руб.
            </li>
          }

          <li className={styles.article_id} contentEditable>
            Арт. {item.article_id}
          </li>

        </ul>
      </div >
    );
  }
}