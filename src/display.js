import React from 'react';

class Display extends React.Component {
    render() {
        const string = this.props.data.join('');

        return (
            <div className="display">
                {string} 
            </div>
        )
    }
}

export default Display;