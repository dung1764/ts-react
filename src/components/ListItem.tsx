import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Typography from '@material-ui/core/Typography';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import AvatarOnline from '../components/AvatarOnline';

type props = {
    data: {
        "_id": string,
        "index": number,
        "isOnline": boolean,
        "age": number,
        "gender": string,
        "name": string,
        "address": string,
        "about": string
    }
}

const ListItemA: React.FC<props> = ({ data }) => {
    
    return (
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <AvatarOnline name={data.name} isOnline={data.isOnline} />
            </ListItemAvatar>
            <ListItemText
                primary={data.name}
                secondary={
                    <>
                        <Typography
                            component="span"
                            variant="body2"
                            className=""
                            color="textPrimary"
                        >
                            {data.age}{data.gender}
                        </Typography>
                        {` — ${data.address}`}
                    </>
                }
            />
            <ListItemSecondaryAction>
                c
          </ListItemSecondaryAction>
        </ListItem>
    )
}

export default ListItemA