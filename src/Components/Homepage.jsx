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
                <div className='main_container'>
                    <Loading />
                </div>
            );
        }
        return (
            <div className='main_container'>
                <h1>The Big Listen!</h1>
            </div>
        );
    }
}

export default Homepage;