import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

const Mine = () => {
    return (
        <div className='mine-page'>
            이곳은 광산입니다.
            <Link to="/"><div className='Village-enter mine-vil'>Vilage로 이동</div></Link>
        </div>
    )
}

export default Mine