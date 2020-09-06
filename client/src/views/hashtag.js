
import React from 'react'

class Hashtag  extends React.Component {

    constructor(props){
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        document.title = `Hashtag #${this.props.match.params.hashtag} | Hook`
    }

    render() {
        return (
            <div>
                <h1> {this.props.match.params.hashtag} </h1>
            </div>
        )
    }
}


export default Hashtag;