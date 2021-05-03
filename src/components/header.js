import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {


    return (
        <div className="nav">
            <Link to ="/">
                <div>Comic 1</div>
            </Link>
            <Link to ="/Random">
                <div>Comic 2</div>
            </Link>
        </div>
    )
}

export default Header