import React, { Component } from 'react';
import {connect} from 'react-redux';
import actions from "./constants"
import * as PropTypes from 'prop-types'

class GardensList extends Component {

    componentDidMount() {
        this.props.loadGardens();
    }

    render() {
        return (
            <div>
                GardensList
            </div>
        );
    }
}

GardensList.propTypes =  { loadGardens: PropTypes.func }

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
  