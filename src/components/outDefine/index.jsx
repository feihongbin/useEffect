import React, { useState, useEffect } from 'react'

const useCount = params => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log('useEffect', count)
        const id = setTimeout(() => {
            setCount(count + 1)
        }, 1000)
        return () => {
            console.log('clear Effect', count)
            clearTimeout(id)
        }
    })
    return [count, setCount]
}
const OutDefine = () => {
    const [count, setCount] = useCount()
    return (
        <h2>{count}</h2>
    )
}
export default OutDefine