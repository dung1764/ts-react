import { useContext } from "react";
import { observer } from 'mobx-react-lite'
import { TimerContext } from "../store/TimerContextStore";
import Layout from "./layout"
import List from '@material-ui/core/List';
import ListItemA from '../components/ListItem'


const users = [
  {
    "_id": "605211edb12f5d654f1881be",
    "index": 0,
    "isOnline": true,
    "age": 45,
    "gender": "F",
    "name": "Shelley Keith",
    "address": "Bradenville, Connecticut",
    "about": "Cupidatat pariatur irure non exercitation excepteur non nostrud irure."
  },
  {
    "_id": "605211edd654d8f3bd519605",
    "index": 1,
    "isOnline": false,
    "age": 64,
    "gender": "T",
    "name": "Leta Rich",
    "address": "Idamay, South Carolina",
    "about": "Consequat consectetur eiusmod labore incididunt pariatur incididunt proident commodo anim voluptate aute."
  },
  {
    "_id": "605211edecc7fbf89360364a",
    "index": 2,
    "isOnline": false,
    "age": 36,
    "gender": "T",
    "name": "Celia Leach",
    "address": "Fairview, North Dakota",
    "about": "Irure culpa nisi reprehenderit pariatur adipisicing commodo dolor anim in veniam excepteur mollit."
  },
  {
    "_id": "605211edec5c061362d44592",
    "index": 3,
    "isOnline": false,
    "age": 27,
    "gender": "T",
    "name": "Christian David",
    "address": "Ruckersville, Colorado",
    "about": "Veniam magna eu do irure consequat quis laboris do."
  },
  {
    "_id": "605211ed9def615b08e46de0",
    "index": 4,
    "isOnline": true,
    "age": 80,
    "gender": "F",
    "name": "Sellers Harper",
    "address": "Wakulla, New Jersey",
    "about": "Quis cillum id occaecat est est."
  }
];

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

      <List>
        {users.map((user) => {
          return <ListItemA key={user._id} data={user} />
        })}
      </List>
    </Layout>
  )
})

export default About
