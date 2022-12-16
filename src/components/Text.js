import {useState, useEffect} from 'react'
import React from 'react'


export default function Text() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [item, setItem] = useState([]);
  
    // Примечание: пустой массив зависимостей [] означает, что
    // этот useEffect будет запущен один раз
    // аналогично componentDidMount()
    useEffect(() => {
      fetch("http://127.0.0.1:8000/articles/01_0111")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItem(result);
          },
          // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
          // чтобы не перехватывать исключения из ошибок в самих компонентах.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {
      return (
        <ul>

            <li key={item.article_id}>
              {item.article_id} {item.title}
            </li>

        </ul>
      );
    }
  }