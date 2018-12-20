import React, { Component } from 'react';
import Topic from '../Topic';
import { Route, Link } from "react-router-dom";

class Topics extends Component {
    constructor(props) {
        super(props);
        this.state = { topics: [] }
    }

    componentDidMount() {
        fetch('/api/getTopics')
            .then(res => res.json())
            .then(topics => this.setState({ topics }))
    }

    render() {
        const { match } = this.props;
        const { topics } = this.state;
        return (match ? (
            <div>
                <h2>Topics</h2>
                <ul>
                    {topics.length ? topics.map(topicId => {
                        const link = `${match.url}/` + topicId;
                        return (
                            <li><Link to={link}>{topicId}</Link></li>)
                    }) : <div>No topics found</div>}
                </ul>

                <Route path={`${match.path}/:topicId`} component={Topic} />
                <Route
                    exact
                    path={match.path}
                    render={() => <h3>Please select a topic.</h3>}
                />
            </div>
        ) : null)
    }
}

export default Topics;