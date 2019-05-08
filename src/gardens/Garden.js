import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import * as PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography';
const style = {
    marginTop: '10px',
    marginLeft: '30px',
    marginRight: '30px',
    width: '30%',
};
export default class Garden extends Component {
    render() {
        const garden = this.props.garden

        return (
            <Card style={style}>
                <Typography component="h5" variant="h5">
                    {garden.schoolName}
                </Typography>
                <CardContent>
                    {garden.address}
                </CardContent>
                
            </Card>
        )
    }
}

Garden.propTypes = {
    garden: PropTypes.object
}