import React, { useState } from 'react'
import './styles/Controls.scss';

import { ReactComponent as KleeCol } from './assets/svgs/klee_col_icon.svg';
import { ReactComponent as DandelionCol } from './assets/svgs/dandelion_col_icon.svg'
import { ReactComponent as MushroomCol } from './assets/svgs/mushroom_col_icon.svg'

const Controls = ({ theme, brush, setBrush, clearPlanet, min781, setHomeHintEnabled }) => {

    const [helpEnabled, setHelpEnabled] = useState(false);

    const toggleHelpEnabled = () => {
        helpEnabled ? setHelpEnabled(false) : setHelpEnabled(true);
    }

    return (
        <>
            {helpEnabled &&
                <div className={'HelpText ' + 'noselect ' + theme}>
                    <div className='HelpTextWrapper'>
                        <p className='ControlsPlanet'>
                            {min781 ? '🡰' : '🡱'} <br />
                            Click and drag planet to rotate. <br />
                            Click planet to spawn life form.

                        </p>
                        <p className='ControlsLifeForm'>
                            Choose life form. <br />
                            {min781 ? '🡲' : '🡳'}
                        </p>
                    </div>
                </div>
            }

            <div className='ControlsWrapper noselect' >
                <div className={'Controls' + ' ' + theme} >
                    <div className='Questionmark' onClick={() => {toggleHelpEnabled(); setHomeHintEnabled(false)}}>
                        <div className='IconWrapper'>
                            ?
                        </div>
                    </div>
                    <div className='Brushes' >
                        <div className={'Bar' + ' ' + brush} />
                        <div className='IconWrapper' onClick={() => { setBrush('klee'); setHelpEnabled(false) }}>
                            <KleeCol />
                        </div>
                        <div className='IconWrapper' onClick={() => { setBrush('mushroom'); setHelpEnabled(false) }}>
                            <MushroomCol />
                        </div>
                        <div className='IconWrapper' onClick={() => { setBrush('dandelion'); setHelpEnabled(false) }}>
                            <DandelionCol />
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
