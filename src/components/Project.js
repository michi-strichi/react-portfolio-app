import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import './styles/Project.scss';

const Project = ({ theme, title, year, description, link, color, software, role, thumbnail, detail_0, detail_1 }) => {

    const [isExpanded, setIsExpanded] = useState('NotExpanded');

    const toggleExpanded = () => {
        isExpanded === 'Expanded' ? setIsExpanded('NotExpanded') : setIsExpanded('Expanded');
    }

    const thumbnail_loaded = require('./assets/images/' + thumbnail);
    const detail_0_loaded = require('./assets/images/' + detail_0);
    const detail_1_loaded = require('./assets/images/' + detail_1);

    const LinkStyle = {
            color: color,
      };

   
    return (

        <div className={'Project' + ' ' + theme + ' ' + isExpanded}>
            <div className='Thumbnail' onClick={toggleExpanded}>
                <img src={thumbnail_loaded}></img>
                <div className='ThumbnailInfo'>
                    <h3 className='Title'>{title}</h3>
                    <p className='Year'>{year}</p>
                </div>
            </div>
            <div className='Details'>
                <div className='Info'>
                    <p className='Description'>{description}</p>
                    {link !== undefined && <p className='Link'>-&gt; <a href={link} style={LinkStyle}>Check it out</a></p>}
                </div>
                <div className='Images'>
                    <div className='Detail_0'>
                        <img src={detail_0_loaded}></img>
                    </div>
                    <div className='Detail_1'>
                        <img src={detail_1_loaded}></img>
                    </div>
                </div>
                <div className='Info'>
                    <p className='Software'><span className='SoftwareSpan'>Software: </span>{software}</p>
                    {role !== undefined && <p className='Role'><span className='RoleSpan'>Role: </span>{role}</p>}

                </div>
            </div>

        </div>
    )
}

export default Project