import React from 'react';
import axios from 'axios';


class Comments extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            comments: {},
        };
    }

    componentDidMount() {
        var _this = this;
        this.serverRequest = 
        axios.get('http://codepen.io/jobs.json')
            .then(function(result) {
                _this.setState({
                    jobs: result.data.jobs
                });
            })
        console.log(this.state);
    }

    componentWillUnmount() {
        this.serverRequest.abort();
    }

    render() {
        return (
            <div>
                {this.state.jobs}
            </div>
        );
    }
}

export default Comments;