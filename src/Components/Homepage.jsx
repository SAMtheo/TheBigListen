import React, { Component } from 'react';
import Loading from './Loading';
import '../Styles/Homepage.css';

class Homepage extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }

    componentWillMount()
    {
        this.setState({loading: false});
    }

    render()
    {
        if (this.state.loading)
        {
            return (
                <div className='MainContainer'>
                    <Loading />
                </div>
            );
        }
        return (
            <div className='MainContainer'>
                <div className='Homepage'>
                    <h1>Homepage</h1>
                </div>
            </div>
        );
    }
}

export default Homepage;