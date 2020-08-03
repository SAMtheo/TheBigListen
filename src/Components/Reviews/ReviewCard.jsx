import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Card, CardActionArea, CardMedia, CardContent, Typography} from "@material-ui/core";
import {Link} from 'react-router-dom'
import '../../Styles/Review/Review.css';

export default class ReviewCard extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {

        };
    }

    render(){
        return(
            <div>
                <Link className="GenericLink" to={"/Review:" + this.props.Id}>
                    <Card className="ReviewCard">
                        <CardActionArea>
                            <CardMedia className="CardMediaImage"
                                image={this.props.ImageSrc}
                                title={this.props.Title}
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            {this.props.Title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            {this.props.Body}
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
            </div>
        );
    }
}

ReviewCard.propTypes = {
    Id: PropTypes.string,
    Title: PropTypes.string,
    Body: PropTypes.string,
    ImageSrc: PropTypes.string,
}

ReviewCard.defaultProps = {
    Id: "1",
    Title: "Review Title",
    Body: "Body of review",
    ImageSrc: "https://upload.wikimedia.org/wikipedia/en/e/e2/I_Disagree_Poppy.png"
}