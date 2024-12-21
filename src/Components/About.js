import React from 'react';
import User from './User';
import UserClass from './UserClass';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        console.log('parent constructor')
    }

    componentDidMount() {
        console.log('parent component did mount called')
    }

    render() {
        console.log('parent render')
        return (
            <div>
                <h1>This is Fodd app developed by kalash</h1>
                <User name="kalash" location="bengaluru" />
                <UserClass name="child1" location="indore" />
            </div>
        )
    }
}

export default About;
