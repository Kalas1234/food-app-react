import React from 'react';

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.name,'child constructor called');
        this.state = {
            count: 0,
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
            <div className="user-card">
                <span>
                    <button
                        className="btn-count"
                        onClick={() => {
                            this.setState({
                                count: this.state.count + 1
                            });
                        }}>
                        {' '}
                        Increment
                    </button>
                    <h1>Count:{this.state.count}</h1>
                </span>
                <img src = {this.state.userInfo.avatar_url} style={{"width":'80px'}} />
                <h2>name:{this.state.userInfo.name}</h2>
                <h3>Location:{this.state.userInfo.location}</h3>
                <h4>contact: kalashgangwal3030@gmail.com</h4>
            </div>
        );
    }
}

export default UserClass;
