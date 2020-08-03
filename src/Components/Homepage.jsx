import React, { Component } from 'react';
import {Grid, Button} from '@material-ui/core'
import Loading from './Loading';
import { Link } from 'react-router-dom';
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
                    <Grid container spacing={0}>
                        <Grid item xs={12}>
                            <h1>Homepage</h1>
                        </Grid>
                        <Grid item xs={6}>
                            <Link to="/Participants" className="GenericLink">
                                <Button variant="contained" color="primary" >
                                    Participants
                                </Button>
                            </Link>
                        </Grid>
                        <Grid item xs={6}>
                            <Link to="/Reviews" className="GenericLink">
                                <Button variant="contained" color="primary" >
                                    Reviews
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default Homepage;