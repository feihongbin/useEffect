import React, { useState, useEffect } from "react";

const Clear = () => {
  useEffect(()=>{
    console.log('useEffect')
    return ()=>{
        console.log('clear Effect')
    }
  })

};

export default Clear