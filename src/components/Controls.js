import React from 'react'
import './styles/Controls.scss';

import klee_col_icon from './assets/svgs/klee_col_icon.svg'
import klee_bw_icon from './assets/svgs/klee_bw_icon.svg'
import dandelion_col_icon from './assets/svgs/dandelion_col_icon.svg'
import dandelion_bw_icon from './assets/svgs/dandelion_bw_icon.svg'
import mushroom_col_icon from './assets/svgs/mushroom_col_icon.svg'
import mushroom_bw_icon from './assets/svgs/mushroom_bw_icon.svg'

const Controls = ({ theme, brush, setBrush }) => {


    return (
        <div className={'Controls' + ' ' + theme}>
            <div className='Questionmark' >
                <div className='IconWrapper' >
                    ?
                </div>
            </div>
            <div className='Brushes' >
                <div className={'Bar' + ' ' +  brush}/>
                <div className='IconWrapper' onClick={() => setBrush('klee')}>
                    <img src={brush == 'klee' ? klee_col_icon : klee_bw_icon} alt={'Clover Icon'} />
                </div>
                <div className='IconWrapper' onClick={() => setBrush('mushroom')}>
                    <img src={brush == 'mushroom' ? mushroom_col_icon : mushroom_bw_icon} alt={'Mushroom Icon'} />
                </div>
                <div className='IconWrapper' onClick={() => setBrush('dandelion')}>
                    <img src={brush == 'dandelion' ? dandelion_col_icon : dandelion_bw_icon} alt={'Dandelion Icon'} />
                </div>
            </div>
            <div className='Clear' >
                <div className='IconWrapper' >
                    <div className='ClearBar b1' />
                    <div className='ClearBar b2' />
                </div>
            </div>
        </div>
    )
}

export default Controls
