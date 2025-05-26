import React from "react";
import classNames from "classnames";

class Alert extends React.Component {

    render() {
        const {text, type} = this.props

        return <div className={classNames('alert', `alert-${type}`)} >
            {text}
        </div>
    }
}

Alert.defaultProps = {
    text: 'what is love?'
}
export default Alert