// Header Component
import React from "react"; //default export that's why no {}
import PropTypes from 'prop-types'

const Header = (props) => {
    return (
        <header className="header">
            <h1 style={styleObject}>{props.title}</h1>
            {/* <p>{props.name}</p>
            <p>{props.age}</p> */}
            <button className="btn">Add</button>
        </header>
    )
};

const styleObject = {
    color: 'black',
    backgroundColor:'white'
}

Header.propTypes = {
    title: PropTypes.string,
    name: PropTypes.string,
    age: PropTypes.number,
}

Header.defaultProps = {
    title: 'Task Tracker',
    name: 'Jacob'
}

export default Header;