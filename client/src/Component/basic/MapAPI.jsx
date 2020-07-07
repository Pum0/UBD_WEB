import React, {Component} from "react";
import {Marker, NaverMap, RenderAfterNavermapsLoaded} from "react-naver-maps";

// function MapAPI() {
//
// }

class MapAPI extends Component {

    constructor(props) {
        super(props);

        this.state = {
            center: {lat: 37.3595704, lng: 127.105399}
        }

        this.panToNaver = this.panToNaver.bind(this);
    }


    panToNaver() {
        this.setState({center: {lat: 37.3595704, lng: 127.105399}})
    }

    render() {

        return (
            <div>

                <RenderAfterNavermapsLoaded
                    ncpClientId={'erm7wdyl9d'}
                    error={<p>Maps Load Error</p>}
                    loading={<p>Maps Loading...</p>}
                >
                    <NaverMap
                        mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
                        defaultCenter={{lat: 35.896500, lng: 128.622062}}
                        defaultZoom={17}

                        style={{
                            position: "absolute",
                            width: '100%',
                            height: '100%',
                        }}
                    >
                        <Marker
                            lat={Marker.lat}
                            lng={Marker.lng}

                            animation={1}
                            onClick={(e) => {
                                alert("안녕하세요.")
                            }}

                        >
                        </Marker>

                    </NaverMap>
                </RenderAfterNavermapsLoaded>
            </div>
        );
    }
}


export default MapAPI;