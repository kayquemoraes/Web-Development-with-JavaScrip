import {} from 'react'
import{Link} from 'react-router-dom'
import styles from '../css/Nav.module.css'

function Nav() {
  
  return (
    <>
    <section className={styles.menu}></section>
      <Link to="produtos">Produtos</Link>
      <Link to="exemplo1">Exemplo1</Link>

    </>
  )
}

export default Nav
