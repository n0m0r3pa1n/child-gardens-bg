import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from "../gardens/constants"
import * as PropTypes from 'prop-types'
import GoogleMapReact from 'google-map-react';
import Marker from './Marker'

class GardensMap extends Component {
    static defaultProps = {
        center: {
            lat: 42.69541,
            lng: 23.2539
        },
        zoom: 11,
        gardens: [],
    };

    componentDidMount() {
        this.props.loadGardens();
    }

    onGardenClick(garden) {
        console.log(garden)
        alert(garden.schoolName)
    }

    render() {
        const gardensList = this.props.gardens.map(garden =>
            <Marker
                key={garden.schoolId}
                onClick={() => { this.onGardenClick(garden) }}
                text={garden.schoolName}
                lat={garden.mapData.location.lat}
                lng={garden.mapData.location.lng} />
        );
        if (this.props.gardens.length === 0) {
            return <div>Empty</div>
        } else {
            const mapsApiKey = process.env.REACT_APP_MAPS_API_KEY
            return (
                <div style={{ height: '100vh', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: mapsApiKey }}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                    >
                        {gardensList}
                    </GoogleMapReact>
                </div>
            )
        }
    }
}

GardensMap.propTypes = { loadGardens: PropTypes.func }

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

export default connect(mapStateToProps, mapDispatchToProps)(GardensMap);