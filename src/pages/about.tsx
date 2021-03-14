import { observer } from 'mobx-react-lite'

import { useContext } from "react";
import { TimerContext } from "../store/TimerContext";
import Layout from "./layout"

const About: React.FC = observer(() => {
  const timer = useContext(TimerContext)
  return (
    <Layout title="TS React - About">
      <h1>About!</h1>
      <h3>Mbox + useContext : {timer.secondsPassed}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quas ipsam, excepturi animi beatae numquam, cum ducimus asperiores quam recusandae repudiandae qui provident commodi maxime? Temporibus, nam cumque. Vel praesentium facere, eum labore neque repellendus ullam nesciunt corporis rerum amet?
      </p>
    </Layout>
  )
})

export default About
