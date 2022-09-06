import React, { useState } from 'react'
import './styles/Controls.scss';

import {ReactComponent as KleeCol} from './assets/svgs/klee_col_icon.svg';
import {ReactComponent as KleeBW} from './assets/svgs/klee_bw_icon.svg'
import {ReactComponent as DandelionCol} from './assets/svgs/dandelion_col_icon.svg'
import {ReactComponent as DandelionBW} from './assets/svgs/dandelion_bw_icon.svg'
import {ReactComponent as MushroomCol} from './assets/svgs/mushroom_col_icon.svg'
import {ReactComponent as MushroomBW} from './assets/svgs/mushroom_bw_icon.svg'

const Controls = ({ theme, brush, setBrush, clearPlanet }) => {

    const [helpEnabled, setHelpEnabled] = useState(false);

    const toggleHelpEnabled = () => {
        helpEnabled ? setHelpEnabled(false) : setHelpEnabled(true);
    }

    return (
        <>
            {helpEnabled &&
                <div className={'HelpText ' + 'noselect ' + theme}>
                    <p>
                        Click and drag planet to rotate <br />
                        Click planet to spawn form of life
                    </p>
                </div>
            }

            <div className='ControlsWrapper noselect' >
                <div className={'Controls' + ' ' + theme} >
                    <div className='Questionmark' onClick={() => toggleHelpEnabled()}>
                        <div className='IconWrapper'>
                            ?
                        </div>
                    </div>
                    <div className='Brushes' >
                        <div className={'Bar' + ' ' + brush} />
                        <div className='IconWrapper' onClick={() => { setBrush('klee'); setHelpEnabled(false) }}>
                            {/* <img src={brush === 'klee' ? KleeCol : KleeBW} alt={'Clover Icon'} /> */}
                            {brush === 'klee' ? <KleeCol /> : <KleeBW />}
                        </div>
                        <div className='IconWrapper' onClick={() => { setBrush('mushroom'); setHelpEnabled(false) }}>
                            {/* <img src={brush === 'mushroom' ? MushroomCol : MushroomBW} alt={'Mushroom Icon'} /> */}
                            {brush === 'mushroom' ? <MushroomCol /> : <MushroomBW />}
                        </div>
                        <div className='IconWrapper' onClick={() => { setBrush('dandelion'); setHelpEnabled(false) }}>
                            {/* <img src={brush === 'dandelion' ? DandelionCol : DandelionBW} alt={'Dandelion Icon'} /> */}
                            {brush === 'dandelion' ? <DandelionCol /> : <DandelionBW />}
                        </div>
                    </div>
                    <div className='Clear' onClick={() => { clearPlanet(); setHelpEnabled(false) }}>
                        <div className='IconWrapper' >
                            <div className='ClearBar b1' />
                            <div className='ClearBar b2' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Controls
