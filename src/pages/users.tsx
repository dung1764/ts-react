import React, { useEffect, useState } from "react";
import Layout from "./layout";
import axiosUsers from "../utils/users";
import User from "../components/User";

interface user  {
    id: number,
    name: string
  }
const Users: React.FC = () => {
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        axiosUsers.get('/')
            .then(response => setUserData(response.data));
    }, []);
    return (
        <Layout title="TS React - Users">
            <h1>User List (API)</h1>
            <h3>Axios + useEffect + .env Path</h3>
            <ul className="list-group">
                {userData.length > 0 && userData.map((user: user) => {
                    return (
                        <User key={user.id} name={user.name} />
                    )
                })}
            </ul>
        </Layout>
    )
}

export default Users;