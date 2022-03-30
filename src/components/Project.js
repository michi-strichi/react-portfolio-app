import React, { useState } from 'react'

import './styles/Project.css';

const Project = ({ title, description, software, thumbnail, detail_0, detail_1 }) => {

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
        isExpanded === true ? isExpanded = false : isExpanded = true;
        console.log(isExpanded);
    }

    return (
        <div className='Project'>
            <div className='Thumbnail'>
                {/* <img src={thumbnail} onClick={toggleExpanded}></img> */}
            </div>
            <div className='Details'>
                <div className='Info'>
                    <p className='Title'>{title}</p>
                    <p className='Description'>{description}</p>
                    <p className='Software'>{software}</p>
                </div>
                <div className='Detail_0'>
                    {/* <img src={detail_0}></img> */}
                </div>
                <div className='Detail_1'>
                    {/* <img src={detail_1}></img> */}
                </div>
            </div>
        </div>
    )
}

export default Project