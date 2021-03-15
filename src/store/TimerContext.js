import Timer from "./Timer"
import { createContext, useEffect } from "react"

const timer = Timer();

const TimerContext = createContext(timer);

let timerInterval;

const TimerContextProvider = ({ children }) => {
    useEffect(() => {
        if (!timerInterval) {
            timerInterval = setInterval(() => {
                timer.increaseTimer()
            }, 1000)
        }
    }, [])
    return (
        <TimerContext.Provider value={{ timer }}>
            {children}
        </TimerContext.Provider>
    )
}

export { TimerContext, TimerContextProvider }

