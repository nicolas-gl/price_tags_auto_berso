import React from 'react'
import Tag from './Tag'
import styles from './Page.module.scss'


export default function Page () {
  return (
    <ul className={styles.allblocks}> 
      { [...Array(32)].map((index) => <Tag key={index} /> ) }
    </ul>
  )}

