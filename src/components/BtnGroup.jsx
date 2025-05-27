import React from "react";
import classNames from "classnames";

class BtnGroup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isActive: 'btn-left '
        }
    }

    onChangeClass = () => {
        this.setState(({primary}) => ({primary: !primary}))
    }

    render() {
    const buttonClass = classNames([
        'btn',
        this.state.primary ? 'btn-primary' : 'btn-secondary'
    ])


        return (
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className={buttonClass} onClick={this.onChangeClass}>Left</button>
                <button type="button" className={buttonClass} onClick={this.onChangeClass}>Right</button>
            </div>
        )
    }
}

export default BtnGroup