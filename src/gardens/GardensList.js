import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from "./constants"
import * as PropTypes from 'prop-types'
import Garden from "./Garden"
import { ListItemsStyle } from "./GardensList.css";
import Paper from '@material-ui/core/Paper';

class GardensList extends Component {

    componentDidMount() {
        this.props.loadGardens();
    }

    render() {
        const listItems = this.props.gardens.map(garden =>
            <Garden key={garden.schoolId} garden={garden} />
        );

        return (
            <Paper zDepth={1} style={ListItemsStyle}>
                {listItems}
            </Paper>
        );
    }
}

GardensList.propTypes = { loadGardens: PropTypes.func }

const mapStateToProps = (state) => {
    return {
        gardens: state.gardens.list
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadGardens: () => dispatch({ type: actions.FETCH_GARDENS }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GardensList);
