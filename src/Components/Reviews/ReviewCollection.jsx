import React, { Component } from 'react';
import {Grid} from "@material-ui/core";
import ReviewCard from './ReviewCard';

export default class ReviewCollection extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            Reviews: []
        };
    }

    componentWillMount() {
        let reviews = [
            {
                ReviewId: "1",
                Title: "I Disagree - Review - ST",
                Body: "This is a good album",
                ImageSrc: "https://upload.wikimedia.org/wikipedia/en/e/e2/I_Disagree_Poppy.png"
            },
            {
                ReviewId: "2",
                Title: "Alien - Review - ST",
                Body: "This is a meh album",
                ImageSrc: "https://upload.wikimedia.org/wikipedia/en/0/09/Northlane_-_Alien.png"
            }
        ];

        this.setState({ Reviews:reviews });
    }

    render(){
        return(
            <div className="MainContainer">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <h1>Reviews</h1>
                    </Grid>
                    {this.state.Reviews.map((review, idx) => (
                        <Grid item xs={4} key={"reviewGrid:" + idx}>
                            <ReviewCard key={"review:" + idx} 
                                ReviewId={review.reviewId}
                                Title={review.Title}
                                Body={review.Body}
                                ImageSrc={review.ImageSrc}/>
                        </Grid>
                    ))}
                </Grid>
            </div>
        );
    }
}

