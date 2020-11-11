import React from 'react';

class HelloWorld extends React.Component {
    render() {
        return (
            <div>
                <h1> Hello {this.props.name}</h1>
                {this.props.test}
            </div>
        );
    }
}

export default HelloWorld;