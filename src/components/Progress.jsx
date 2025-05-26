import React from "react";

class Progress extends React.Component {
    render() {
        const { percentage } = this.props;
        return (
            <div className="progress mt-3 ms-3">
                <div className="progress-bar"
                     role="progressbar"
                     style={{ width: `${percentage}%` }}
                     aria-valuenow={this.props.percentage}
                     aria-valuemin="0"
                     aria-valuemax="100"></div>
            </div>
        );
    }
}

export default Progress;