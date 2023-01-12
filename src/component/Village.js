import React from 'react'
import { Link } from 'react-router-dom'

const Village = () => {
    return (
        <div className='village'>
            <div>여기는 Vilage입니다.</div>
            <Link to="/Dungeon" className='dungeon-front'>던전으로 이동</Link><br />
            <Link to="/Mine" className='mine-front'>광산으로 이동</Link><br />
            <Link to="/River" className='river-front'>낚시터로 이동</Link>
        </div>
    )
}

export default Village