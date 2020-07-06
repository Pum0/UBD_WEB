import React, {Component} from "react";
import {NaverMap, RenderAfterNavermapsLoaded, Marker} from "react-naver-maps";
import {withNavermaps} from "react-naver-maps/dist/hocs.esm";


class MapAPI extends Component {

    constructor(props) {
        super(props);

        this.state = {
            center: {lat: 37.3595704, lng: 127.105399},
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
                        style={{
                            position: "absolute",
                            width: '100%',
                            height: '100%'
                        }}
                        defaultCenter={{lat: 35.896500, lng: 128.622062}}
                        defaultZoom={17}
                    ><Marker
                        key={1}
                        position={{lat: 35.896500, lng: 127.105399}}
                        animation={2}
                        onClick={() => {alert('여기는 N서울타워입니다.');}}
                    >
                    </Marker>
                    </NaverMap>
                </RenderAfterNavermapsLoaded>
            </div>
        );
    }
}

function ControlBtn({
                        controlOn = false,
                        ...restProps
                    }) {
    let style = {
        color: '#555',
        padding: '2px 6px',
        background: '#fff',
        border: 'solid 1px #333',
        cursor: 'pointer',
        borderRadius: '5px',
        outline: '0 none',
        boxShadow: '2px 2px 1px 1px rgba(0, 0, 0, 0.5)',
        fontSize: '14px',
        margin: '0 5px 5px 0',
    }

    if (controlOn) {
        style = {
            ...style,
            background: '#2780E3',
            color: '#FFF',
        }
    }

    return <button style={style} {...restProps} />
}

function Buttons(props) {
    return (
        <div
            style={{
                zIndex: 1000,
                position: 'absolute',
                display: 'inline-block',
            }}
            {...props}
        />
    )
}

export default MapAPI;