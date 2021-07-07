import React, { useState, useEffect, useLayoutEffect } from 'react'

function Effect() {
    useEffect(() => {
        console.log('useEffect 执行')
        return () => {
            console.log("useEffect 销毁")
        }
    });

    useLayoutEffect(() => {
        console.log("useLayoutEffect 执行")
        return () => {
            console.log("useLayoutEffect 销毁")
        }
    })

    return <div>
        <h2>Effect</h2>
        {console.log("Effect 渲染")}
    </div>
}


class LayoutEffectDifferentEffect extends React.Component {
    state = { count: 0 }
    setCount = () => {
        this.setState({ count: this.state.count + 1 })
    }
    componentDidMount() {
        console.log("App1 mount")
    }
    componentDidUpdate() {
        console.log("App1 update")
    }
    render() {
        return <div>

            <button onClick={this.setCount}>+1</button>
            {console.log("App1 渲染")}
            <Effect />
        </div>
    }
}

export default LayoutEffectDifferentEffect