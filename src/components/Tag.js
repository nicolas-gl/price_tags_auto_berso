import {useState} from 'react'
import styles from './Tag.module.scss'
import Text from './Text'



export default function Tag() {

  const [pushBtn, setPushBtn] = useState ("block")
  const [popap, setPopap] = useState ("none")
  const [resetBtn, setResetBtn] = useState ("none")
  const [article, setArticle] = useState ()
  const [isSelected, setIsSelected] = useState (false)


  const changePopupDisplay = () => {
    setPushBtn(pushBtn === "none" ? "block" : "none");
    setPopap(popap === "none" ? "block" : "none");
  }

  const okTag = () => {
    setResetBtn("block");
    setPopap("none");
    setIsSelected(true);
  }

  const resetTag = () => {
    setPushBtn("block");
    setPopap("none");
    setResetBtn("none");
    setArticle("0");
    setIsSelected(false);
    setArticle()
  }



  return (
    <div>
      <div className={styles.tag}>
        
        {/* <p contentEditable=""><Text ref='2'/></p> */}

        <Text isSelected={isSelected} article={article}/>

        
        <button className={styles["push-btn"]} onClick={changePopupDisplay} style={{ display:`${pushBtn}` }}> Push </button>
        <button className={styles["reset-btn"]} onClick={resetTag} style={{ display:`${resetBtn}` }}> X </button>
        <div className={styles.popup} style={{ display:`${popap}` }}>
          <form className={styles["form-popup"]}>
          {/* action={okTag} */}



            <input autoComplete="off" type="fdtext" placeholder="Артикул" onChange={e => setArticle(e.target.value)} required/>


            <div className={styles['bool-buttons']}>
              <button className={styles.btn} type="reset" onClick={okTag}> OK </button> 
                        {/* выше type="reset" сменить на "submit" */}
              <button className={`${styles.btn} ${styles.cancel}`} type="reset" onClick={changePopupDisplay} > Cancel </button>
            </div>



          </form>
        </div> 
      </div> 
    </div>
  )
}

