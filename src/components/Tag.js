import {useState} from 'react'
import styles from './Tag.module.scss'
import Text from './Text'



export default function Tag() {

  const [pushBtn, setPushBtn] = useState ("block")
  const [popap, setPopap] = useState ("none")
  const [resetBtn, setResetBtn] = useState ("none")
  const [ref, setRef] = useState ()

  const changePopupDisplay = () => {
    setPushBtn(pushBtn === "none" ? "block" : "none");
    setPopap(popap === "none" ? "block" : "none");
  }

  const ok = () => {
    setPopap(popap === "none" ? "block" : "none");
    setResetBtn(resetBtn === "none" ? "block" : "none");
  }

  const resetTag = () => {
    setResetBtn(resetBtn === "none" ? "block" : "none");
    setPushBtn(pushBtn === "none" ? "block" : "none");
  }


  

  return (
    <div>
      <div className={styles.tag}>
        <p contentEditable="">{ref}      <Text /></p>
        <button className={styles["push-btn"]} onClick={changePopupDisplay} style={{ display:`${pushBtn}` }}> Push </button>
        <button className={styles["reset-btn"]} onClick={resetTag} style={{ display:`${resetBtn}` }}> X </button>
        <div className={styles.popup} style={{ display:`${popap}` }}>
          <form action="/action_page.php" className={styles["form-popup"]}>



            <input autoComplete="off" type="fdtext" placeholder="Артикул" onChange={e => setRef(e.target.value)} required/>


            <div className={styles['bool-buttons']}>
              <button className={styles.btn} type="reset" onClick={ok}> OK </button> 
                        {/* выше type="reset" сменить на "submit" */}
              <button className={`${styles.btn} ${styles.cancel}`} type="reset" onClick={changePopupDisplay} > Cancel </button>
            </div>



          </form>
        </div> 
      </div> 
    </div>
  )
}

