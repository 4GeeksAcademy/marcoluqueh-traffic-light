import React, { useState } from "react";
import '../../styles/index.css';

export const TrafficLight = () => {
    const [color, setColor] = useState('');



    return (
        <div className="container justify-content-center">
            <div className="blackbox container mt-3 pt-2">
                <div className="row justify-content-center mb-2">
                    <div className={"light col-2 bg-danger" + (color === 'red' ? ' glow-red' : (color === 'purple' ? ' glow-purple' : ''))}
                        onClick={() => setColor('red')}>
                    </div>
                </div>
                <div className="row justify-content-center mb-2">
                    <div className= {"light col-2 bg-warning" + (color === 'yellow' ? ' glow-yellow' : (color === 'purple' ? ' glow-purple' : ''))}
                        onClick={() => setColor('yellow')}>
                    </div>
                </div>
                <div className="row justify-content-center mb-2">
                    <div className={"light col-2 bg-success" + (color === 'green' ? ' glow-green' : (color === 'purple' ? ' glow-purple' : ''))}
                        onClick={() => setColor('green')}>
                    </div>
                </div>
            </div>
            <div class="d-grid gap-2 col-6 mx-auto mt-3">
                <button class="btn btn-secondary" type="button"
                    onClick={() => {
                        color === 'red' ? setColor('yellow') :
                            (color === 'yellow' ? setColor('green') : setColor('red'))

                    }}>
                    Sequential
                </button>
                <button id='purpleButton' class="btn btn-secondary" type="button"
                    onClick={() => {
                        setColor('purple')
}}>
                    PURPLE!
                </button>
            </div>
        </div>
    )

}
