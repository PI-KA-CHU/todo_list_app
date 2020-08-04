import React from 'react'
import { Link } from 'react-router-dom'; 

class Header extends React.Component{
    render() {
        return (
            <div>
                <Link to="/">首页</Link>
                | <Link to="/finish">Finish</Link>
            </div>
        )
    }
}

export default Header