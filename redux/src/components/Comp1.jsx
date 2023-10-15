import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCount, incrementCount } from './redux/actions/counterAction'

const Comp1 = () => {
    const state = useSelector((state) => state)
    let dispatch = useDispatch()
    console.log(state.counter.count)
    return (
        <Fragment>
            <div>Comp1</div>
            <h2>{state.counter.count}</h2>
            {/* <button className='btn btn-success me-2' onClick={()=>dispatch({type : "INCREMENT", num : 20})}>Increment</button>
     <button className='btn btn-danger' onClick={()=>dispatch({type : "DECREMENT"})}>Decrement</button> */}


            {/* AA RITE EK FUNCTION NE CALL KARAVI BDHI VAKHTE ANE USE KARI SAKAY JYA KARVU HOI TYA  */}
            <button className='btn btn-success me-2' onClick={() => dispatch(incrementCount(50))}>Increment</button>
            <button className='btn btn-danger' onClick={() => dispatch(decrementCount(50))}>Decrement</button>
        </Fragment>
    )
}

export default Comp1