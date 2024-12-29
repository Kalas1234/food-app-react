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
            <div className='mt-40 py-5 text-center'>
                <h1 className='font-bold text-xl'>This is Food App Developed By kalash</h1>
                <UserClass name="child1" location="indore" />
            </div>
        )
    }
}

export default About;
