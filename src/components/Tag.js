import { useState, useRef, useEffect } from 'react'
import styles from './Tag.module.scss'
import Text from './Text'



export default function Tag() {

  const [pushBtn, setPushBtn] = useState("block")
  const [popup, setPopup] = useState("none")
  const [resetBtn, setResetBtn] = useState("none")
  const [article, setArticle] = useState()
  const [isSelected, setIsSelected] = useState(false)

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  },)


  const changePopupDisplay = () => {
    setPushBtn(pushBtn === "none" ? "block" : "none");
    setPopup(popup === "none" ? "block" : "none");
  }

  const okTag = () => {
    setResetBtn("block");
    setPopup("none");
    setIsSelected(true);
  }

  const resetTag = () => {
    setPushBtn("block");
    setPopup("none");
    setResetBtn("none");
    setArticle("0");
    setIsSelected(false);
    setArticle()
  }



  return (
    <div>
      <div className={styles.tag}>

        <Text isSelected={isSelected} article={article} />

        <button className={styles["push-btn"]} onClick={changePopupDisplay} style={{ display: `${pushBtn}` }}> Push </button>
        <button className={styles["reset-btn"]} onClick={resetTag} style={{ display: `${resetBtn}` }}> X </button>
        <div className={styles.popup} style={{ display: `${popup}` }}>
          <div className={styles["form-popup"]}>

            <input ref={inputRef} autoComplete="off" type="text" placeholder="Артикул" onChange={e => setArticle(e.target.value)} onKeyDown={e => { e.key === 'Enter' && okTag() }} required />

            <div className={styles['bool-buttons']}>
              <button className={styles.btn} type="reset" onClick={okTag}>
                <p className={styles['ok-text']}> OK </p>
              </button>
              <button className={`${styles.btn} ${styles.cancel}`} type="reset" onClick={changePopupDisplay} >
                <p className={styles['cancel-text']}> Cancel </p>
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

