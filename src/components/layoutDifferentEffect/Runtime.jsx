import React,{useState,useEffect,useLayoutEffect} from 'react'
import styles from './index.css'

const RunTime = ()=>{
  const [count,setCount] = useState(0)

  useEffect(()=>{
    let i = 0
    while(i<1000000000){
      i++
    }
    setCount(999)
  },[])
  // useLayoutEffect(()=>{
  //   let i = 0
  //   while(i<1000000000){
  //     i++
  //   }
  //   setCount(999)
  // },[])
  return <div class="red">{count}</div>
}

export default RunTime