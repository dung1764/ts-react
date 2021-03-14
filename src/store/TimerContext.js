import Timer from "./Timer"
import { createContext } from "react"
const timer = new Timer();

setInterval(() => {
    timer.increaseTimer()
}, 1000)

const TimerContext = createContext(timer)
const TimerContextProvider = ({ children }) => {
    return (
        <TimerContext.Provider value={timer}>
            {children}
        </TimerContext.Provider>
    )
}

export { TimerContext, TimerContextProvider }

