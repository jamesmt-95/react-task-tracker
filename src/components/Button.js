// export default function Button(){
import PropTypes from 'prop-types'
function Button(props) {
    //Also we can destructure
    //   const onClick = (e) => {
    //     console.log("click", e);
    //   };
    return (
        <button
            onClick={props.onClick}     //or we can use onClick declared in the Button
            style={{ backgroundColor: props.color, minWidth:'85px' }}
            className="btn"
        >
            {props.text}
        </button>
    );
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

export default Button;

//emmet shortcut rafce
