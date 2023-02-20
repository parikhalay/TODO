import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './TodoCard.css'


const TodoCard = (props) => {
  return (
    <div className='card-wrapper'>
      <Card sx={{ maxWidth: 345 , 'background-color': '#fff'}}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography gutterBottom variant="p" component="div">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>

        { props.isCompleted ? <></> :
          <Button size="small" onClick={() => props.complete(props.id)}>Complete</Button>}
        <Button size="small" onClick={() => props.delete(props.id)}>Delete</Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default TodoCard
