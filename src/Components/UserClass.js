import React from 'react';

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.name,'child constructor called');
        this.state = {
           userInfo : {}
        };
    }
  async  componentDidMount() {
        console.log(this.props.name,'component did mount called');

        const data = await fetch('https://api.github.com/users/kalas1234')
        const userInfo1 = await data.json();
       this.timer = setInterval (()=>{
              console.log('user class is loaded')
        },1000)
        this.setState({
            userInfo : userInfo1
        })
    }

    componentDidUpdate(){
        console.log(this.props,'component did update called')
    }

    componentWillUnmount(){
        clearInterval(this.timer)
        console.log('child component is unmounted')
    }
    render() {
        console.log(this.props.name,'child render method called');
        return (
            <div className="border border-solid border-black my-9 shadow-lg bg-gray-100 pb-10">
                <img  className='w-14'src = {this.state.userInfo.avatar_url} />
                <h2 className='font-bold'>{this.state.userInfo.name}</h2>
                <h3 className='font-bold'>{this.state.userInfo.location}</h3>
                <h4 className='font-bold'>kalashgangwal3030@gmail.com</h4>
            </div>
        );
    }
}

export default UserClass;
