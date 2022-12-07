import React from 'react'
import Styles from './Loading.module.css'
export default function Loading() {
  return (
    <><div className='d-flex align-items-center justify-content-center'><div className={`${Styles.sk_chase}`}>
  <div className={`${Styles.sk_chase_dot}`} />
  <div className={`${Styles.sk_chase_dot}`} />
  <div className={`${Styles.sk_chase_dot}`} />
  <div className={`${Styles.sk_chase_dot}`} />
  <div className={`${Styles.sk_chase_dot}`} />
  <div className={`${Styles.sk_chase_dot}`} />
</div></div>
 

    </>
  )
}
