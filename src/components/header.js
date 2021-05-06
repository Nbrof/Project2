import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {


    return (
        <div className="nav">
            <Link to ="/">
                <div className="navdiv">Latest Comic</div>
            </Link>
            <Link to ="/Random">
                <div className="navdiv">Randomizer</div>
            </Link>
        </div>
    )
}

export default Header