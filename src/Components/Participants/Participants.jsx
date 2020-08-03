import React, {Component} from 'react';
import {Grid} from "@material-ui/core";

export default class Participants extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            User: props.User,
        };
    }

    componentWillMount(){
        // get user details from firebase
        let newUser = {
            userName: "Sam Theobald",
            reviews: []
        };
        this.setState({User: newUser});
    }

    render(){
        return(
            <div className="MainContainer">
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <h1>{this.state.User.userName}</h1>
                    </Grid>
                    <Grid item xs={12}>
                        <h2>Reviews</h2>

                    </Grid>
                </Grid>
            </div>
        );
    }
}


// username
// reviews
// albums