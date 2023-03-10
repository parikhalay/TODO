import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './TodoCard.css'
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';

const TodoCard = (props) => {
  return (
    <div className='card-wrapper'>
            <PopupState variant="popover" popupId="demo-popup-popover">
               {(popupState) => (
                <div>
                  <Card sx={{ maxWidth: 345}} style={{ "background": `${props.color}` }} {...bindTrigger(popupState)}>
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


    <Popover
     {...bindPopover(popupState)}
      anchorOrigin={{
         vertical: 'bottom',
         horizontal: 'center',
      }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
      }}
      >
          <FormControl>
            <RadioGroup
             row
             aria-labelledby="demo-row-radio-buttons-group-label"
             name="row-radio-buttons-group"
             onChange={(e) => props.updateColor(props.id, e.target.value)}
            >
              <FormControlLabel value="#FFB84C" control={<Radio />} label="Orange" />
              <FormControlLabel value="#85CDFD" control={<Radio />} label="Blue" />
              <FormControlLabel value="#E96479" control={<Radio />} label="Red" />
              <FormControlLabel value="#698269" control={<Radio />} label="Green" />
            </RadioGroup>
          </FormControl>
    </Popover>
            </div>)}
            </PopupState>
    </div>
  )
}

export default TodoCard
