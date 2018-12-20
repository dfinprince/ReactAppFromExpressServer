import React, { Component } from 'react';

export default class Topic extends Component {
    constructor(props) {
        super(props);
        const topicId = props.match.params.topicId;
        this.state = { topicId, topic: '' }
        this.createMarkup = this.createTopicContainer.bind(this);
    }

    componentDidMount() {
        const { topicId } = this.state;

        const proxyurl = 'https://cors-anywhere.herokuapp.com/';
        const url = 'https://reactjs.org/tutorial/tutorial.html#' + topicId;
        fetch(proxyurl + url)
            .then(res => res.text())
            .then(topic => {
                this.setState({ topic });
            })
            .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
    }
    
    createTopicContainer =  () => {
        const { topic } = this.state;
        return {__html: topic};
      }

    render() {
        const { topicId } = this.state;
        return (
            <div>
                <h3>{topicId}</h3>
                <hr />
                <div dangerouslySetInnerHTML={this.createTopicContainer()} />;
            </div>
        );
    };
}
