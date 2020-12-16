import React, { FC,useEffect,useState } from 'react'
import './index.less'

type Counter = {
    num: number
  }
  const Counter: FC<Counter> = (props) => {
    let { num } = props
    let timeId: number;
    let [currentStep, setCurrentStep] = useState(0)
    useEffect(() => {
      timeId = window.setInterval(() => {
        setCurrentStep(() => { return currentStep += 3 })
        if (currentStep >= num) {
          setCurrentStep(num)
          clearInterval(timeId)
        }
      }, 1)
      return () => {
        clearInterval(timeId)
      }
    }, [num])
  
    return (
      <span>{currentStep}</span>
    )
  }
  

export default Counter