import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'

/* AHI BS USE SELECTOR NE LAKHI COMP1 JEVI SAME PROCEDURE  COMP 2 MA MLSE AHI PA6A BUTTON BANAVI NE ALAG THI KARVANI JARUR PDTI NTHI */
const Comp2 = () => {
    const state = useSelector((state) => state)
  return (
   <Fragment>
     <div>Comp2</div>
     <h2>{state.counter.count}</h2>
   </Fragment>
  )
}

export default Comp2