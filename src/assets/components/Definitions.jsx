import React, {Fragment} from "react";

class Definitions extends React.Component {
    render() {
        const {definitions} = this.props;

        return (
            <dl className="m-2">
                {definitions.map((item) => (
                    <Fragment key={item.id}>
                        {item.dt && <dt>{item.dt}</dt>}
                        {item.dd && <dd>{item.dd}</dd>}
                    </Fragment>
                ))}
            </dl>
        )
    }
}

export default Definitions