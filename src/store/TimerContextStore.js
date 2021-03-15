import { makeAutoObservable } from "mobx"
import { createContext, useEffect } from "react"

// mobx store (store and change the value)
const timer = () => makeAutoObservable(
    {
        secondsPassed: 0,
        increaseTimer() {
            this.secondsPassed += 1
        }
    }
)

const timerStore = timer();

// react use/create context (send and use the data)
const TimerContext = createContext(timerStore);

let timerInterval;

const TimerContextProvider = ({ children }) => {
    useEffect(() => {
        if (!timerInterval) {
            timerInterval = setInterval(() => {
                timerStore.increaseTimer()
            }, 1000)
        }
    }, [])
    return (
        <TimerContext.Provider value={timerStore}>
            {children}
        </TimerContext.Provider>
    )
}

export { TimerContext, TimerContextProvider }

