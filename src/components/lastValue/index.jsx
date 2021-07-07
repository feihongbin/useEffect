import React, { useState, useEffect, useRef } from 'react'

const LastValue = () => {
    const [count, setCount] = useState(0)
    const lastCount = useRef(count)

    useEffect(() => {
        lastCount.current = count
        const id = setTimeout(() => {
            alert(`You clicked ${lastCount.current} times`)
        }, 3000)
        return () => {
            clearTimeout(id)
        }
    })
    return <div onClick={setCount(count + 1)}>点击</div>
}
export default LastValue