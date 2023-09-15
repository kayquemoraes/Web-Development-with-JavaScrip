import { useState } from 'react'
import styles from '../css/Exemplo1.module.css'


function Exemplo1() {

  /*Hook- useState*/
  const [contador,setContador]= useState(0);
  /*funções */

  const incrementar =()=>setContador(contador +1);
  const decrementar =()=>setContador(contador -1);


  return (
    <>
    <fieldset  className={styles.exem}>
      <legend>Exemplo1</legend>
      <p>Valor:{contador}</p>
      <button onClick={incrementar}>Aumentar</button>
      <button onClick={decrementar}>Diminuir</button>
    </fieldset>

    </>
  )
}

export default Exemplo1