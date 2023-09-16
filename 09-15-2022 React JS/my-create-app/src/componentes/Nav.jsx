import {} from 'react'
import{Link} from 'react-router-dom'
import styles from '../css/Nav.module.css'

function Nav() {
  
  return (
    <>
    <section className={styles.menu}>
      <Link to="produtos" className={styles.tlink}>Produtos</Link>
      <Link to="exemplo1" className={styles.tlink}>Exemplo1</Link>
    </section>
    </>
  )
}

export default Nav
