import { useContext } from "react";
import { observer } from 'mobx-react-lite'
import { TimerContext } from "../store/TimerContextStore";
import Layout from "./layout"

// mobx observer the data change then render the page
const HomePage: React.FC = observer(() => {
    // react use context (get the data from the dom tree)
    const { secondsPassed } = useContext(TimerContext)
    return (
        <Layout title="TS React">
            <h1>TS React demo</h1>
            <h3>React + TypeScript : {secondsPassed}</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, unde. Quasi doloremque, porro doloribus eveniet ex aspernatur enim vero, nostrum expedita culpa impedit rem officiis, nisi amet nulla sed animi recusandae dolores in fugiat delectus totam veniam? Odio sunt dicta nihil, tempora mollitia dolores omnis totam fuga, quisquam quidem hic minima sequi ratione officia repudiandae qui assumenda soluta! Doloribus nam, sint dolorum ullam aut reiciendis pariatur, unde magni minima adipisci quasi possimus itaque quae eaque vitae eveniet beatae. Exercitationem veniam eius odit, hic libero dolor deleniti iste assumenda? Autem, illo.
            </p>
        </Layout>
    );
})

export default HomePage
