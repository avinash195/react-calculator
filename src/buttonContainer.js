import React from 'react';

class ButtonContainer extends React.Component {
    render() {
        return (
            <div className="buttonContainer">
                {this.props.children}
            </div>
        )
    }
}

export default ButtonContainer;