import React, { Component } from 'react';
import * as PropTypes from 'prop-types'

export default class Garden extends Component {
    render() {
        const garden = this.props.garden

        return (
            <div>
                {garden.schoolName}
            </div>
        )
    }
}

Garden.propTypes = {
    garden: PropTypes.object
}