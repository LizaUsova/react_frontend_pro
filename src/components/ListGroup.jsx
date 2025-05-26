import React from "react";

class ListGroup extends React.Component {
    render() {
        const {children} = this.props;

        return (
                React.Children.map(children, (child, index) => {
                    return <li
                        className="list-group-item" key={index}>{child}
                    </li>
                })
        )
    }
}

export default ListGroup