import { makeAutoObservable } from "mobx"

const Timer = () => makeAutoObservable(
  {
    secondsPassed: 0,
    increaseTimer() {
      this.secondsPassed += 1
    }
  }
)

export default Timer;