import React from 'react'
import './style.scss';
import { useNavigate } from 'react-router-dom';
import { routeConfig } from './../../App';









const Home = () => {
    const navigate = useNavigate();

    const handleAddButton = () => {
        navigate(routeConfig.CREATE)
    }
    


    return (
        <div className='home'>
            <div className='headingContainer'>
                <div className='todo'>
                    ToDo List
                </div>
                <div className='addButton'>
                    <button onClick={handleAddButton}>Add</button>

                </div>

            </div>
          


        </div >


    )
}


export { Home }
