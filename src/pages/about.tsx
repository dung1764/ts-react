import { useContext } from "react";
import { observer } from 'mobx-react-lite'
import { TimerContext } from "../store/TimerContextStore";
import Layout from "./layout"

// mobx observer the data change then render the page
const About: React.FC = observer(() => {
  // react use context (get the data from the dom tree)
  const { secondsPassed } = useContext(TimerContext)
  return (
    <Layout title="TS React - About">
      <h1>About!</h1>
      <h3>Mbox + useContext : {secondsPassed}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quas ipsam, excepturi animi beatae numquam, cum ducimus asperiores quam recusandae repudiandae qui provident commodi maxime? Temporibus, nam cumque. Vel praesentium facere, eum labore neque repellendus ullam nesciunt corporis rerum amet?
      </p>
    </Layout>
  )
})

export default About
