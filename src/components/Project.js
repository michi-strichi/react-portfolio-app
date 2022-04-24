import React, { useState } from 'react'

import './styles/Project.scss';

const Project = ({ theme, title, year, description, software, thumbnail, detail_0, detail_1 }) => {

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
        isExpanded === true ? isExpanded = false : isExpanded = true;
        console.log(isExpanded);
    }

    const thumbnail_loaded = require('./assets/images/' + thumbnail);
    const detail_0_loaded = require('./assets/images/' + detail_0);
    const detail_1_loaded = require('./assets/images/' + detail_1);

    return (
        <div className={'Project' + ' ' + theme}>
            <div className='Thumbnail'>
                <img src={thumbnail_loaded} onClick={toggleExpanded}></img>
                <h3 className='Title'>{title}</h3>
            </div>
            <div className='Details'>
                <div className='Info'>
                    <p className='Description'>{description}</p>
                    <p className='Software'>{software}</p>
                </div>
                <div className='Detail_0'>
                    <img src={detail_0_loaded}></img>
                </div>
                <div className='Detail_1'>
                    <img src={detail_1_loaded}></img>
                </div>
            </div>

        </div>
    )
}

export default Project