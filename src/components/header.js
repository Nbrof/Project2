import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {


    return (
        <div className="nav">
            <Link to ="/">
                <div>Latest Comic</div>
            </Link>
            <Link to ="/Random">
                <div>Randomizer</div>
            </Link>
        </div>
    )
}

export default Header