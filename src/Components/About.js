import React,{useContext} from 'react';
import UserClass from './UserClass'
import UserContext from '../utils/UserContext';

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
                <div className='my-2'>
                    <UserContext.Consumer>{({loggedInUser})=>(
                      <h1>{loggedInUser}</h1>
                    )}</UserContext.Consumer>
                </div>
                <UserClass name="child1" location="indore" />
            </div>
        )
    }
}

export default About;
