import React, { useState } from 'react'
import './style.scss';

import { useNavigate } from 'react-router-dom';
import { routeConfig } from './../../App';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';


const Create = () => {
    const navigate = useNavigate();

    const handleSaveButton = () => {
        navigate(routeConfig.HOME)
    }


    const [task, setTask] = useState('')
    const taskEvent=(event)=>{
        setTask(event.target.value)
    }


    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    function BasicStack(taskEvent) {
        return (
            <Box sx={{ width: '100%' }}>
                <Stack spacing={2}>
                    <Item>Item 1</Item>
                    <Item>Item 2</Item>
                    <Item>Item 3</Item>
                </Stack>
            </Box>
        );
    }



   

    return (
        <div className='createTask'>
            <div className='createContainer'>
                <div className='create'>
                    Create Task
                </div>
                <div className='titleContainer'>
                    <div className='title'>
                        Title  :
                    </div>

                    <div className='taskBox'>


                        <TextField
                            id="filled-basic" label="Task" variant="filled"
                            // id="outlined-basic"
                            // label="Outlined" 
                            // variant="outlined"
                            className="geetuTextField"
                            onChange={taskEvent}
                        />

                    </div>
                </div>
                <div className='save'>
                    <button onClick={BasicStack}  >Save</button>
                </div>
               
            </div>
        </div >
    )

}

export default Create;

