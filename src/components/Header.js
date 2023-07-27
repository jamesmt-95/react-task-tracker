// Header Component
import React from "react"; //default export that's why no {}
import PropTypes from 'prop-types'
import Button from "./Button";

const Header = (props) => {
    const onClick= (e)=> console.log(e)
    return (
        <header className="header">
            <h1 style={styleObject}>{props.title}</h1>
            {/* <p>{props.name}</p>
            <p>{props.age}</p> */}
            <Button color={'green'} text={'Add'} onClick={onClick}/>
        </header>
    )
};

const styleObject = {
    color: 'black',
    backgroundColor: 'white'
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