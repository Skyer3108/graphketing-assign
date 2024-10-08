import './navbar.css'
import logo from '../Accests/Final Logo 3.png'
import Teacher from '../Accests/Group 937.png'

import Add from '../Accests/Group 598.png'

import Department from '../Accests/Group 939.png'

import Libraru from '../Accests/Group 940.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'; 
const Sidebar=()=>{
    return(
        <div className="side-bar">

            <div className='side-head'>

                <img src={logo} alt='logo'/>
<p>QMS</p>

<FontAwesomeIcon className='bar' icon={faBars} style={{height:'31px',  width:'21px' , color:'white'}}/>


                
            </div>


            <div>


                <div className='lists'>
                    <img src={Teacher} alt='Teacher'/>
                    <div className='list'>
                        Teachers
                    </div>
                </div>

                <div className='lists'>
                    <img src={Department} alt='Teacher'/>
                    <div className='list'>
                        Department
                    </div>
                </div>

                <div className='lists'>
                    <img src={Libraru} alt='Teacher'/>
                 
                   <div className='list'>
                        Library
                    </div>

                 
                   
                </div>

                <div className='lists'>
                    <img src={Add} alt='Teacher'/>
                    <div className='list'>
                        Add Teacher
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Sidebar