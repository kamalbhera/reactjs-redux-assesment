import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addInputText } from '../Redux/Action';

const ChildB = () => {
    const [textin , setTextin] = useState("");
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(addInputText(textin))
    },[textin, dispatch])
  return (
    <div>
      <input type="text" className='form-input'  onChange={(e) => setTextin(e.target.value)}/>
    </div>
  )
}

export default ChildB
