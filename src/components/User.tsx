interface props{
    name: string
}

const User: React.FC<props> = ({name}) => {
    return (
        <li className="list-group-item">{name}</li>
    )
}

export default User;