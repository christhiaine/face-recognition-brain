import React from 'react';
import Tilt from 'react-tilt';
import brain2 from './brain2.png';
import './Logo.css';


const Logo = React.forwardRef((props, ref) => {
        return (
            <div ref={ref} className='ma4 mt0'>
                <Tilt className="Tilt br2 shadow-2" options={{ max : 45 }} style={{ height: 150, width: 150 }} >
                    <div className="Tilt-inner pa3">
                         <img style={{paddingTop: '5px'}} alt='logo' src={brain2} /> 
                    </div>
                </Tilt>
            </div>
        );
})


// const Logo = () => {

        // return (
        //     <div className='ma4 mt0'>
        //         <Tilt className="Tilt br2 shadow-2" options={{ max : 45 }} style={{ height: 150, width: 150 }} >
        //             <div className="Tilt-inner pa3">
        //                  <img style={{paddingTop: '5px'}} alt='logo' src={brain2} /> 
        //             </div>
        //         </Tilt>
        //     </div>
        // );
//     }

 export default Logo;



