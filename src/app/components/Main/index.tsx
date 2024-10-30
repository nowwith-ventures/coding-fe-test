import React, { ReactNode } from 'react'
import styles from './styles.module.scss'

type MainProps = {
  children: ReactNode
}
const Main = ({ children }: MainProps) => {
  return (
    <main id="main-content" className={styles.main}>
      {children}
    </main>
  )
}

export default Main
