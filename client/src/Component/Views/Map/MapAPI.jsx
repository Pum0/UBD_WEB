import React, {Component, useState} from "react";
import {Marker, Polyline, NaverMap, RenderAfterNavermapsLoaded} from "react-naver-maps";
import {ButtonGroup as Buttons, Button as ControlBtn} from "@material-ui/core";

const config = require('./MapAPIKey')

// function MapAPI(props) {

//     // const [mapStyle, setMapStyle] = useState([
//     //     {
//     //         position: "absolute",
//     //         width: '100%',
//     //         height: '100%'
//     //     }
//     // ])

//     const mapStyle = {
//         position: "absolute",
//         width: '100%',
//         height: '100%'
//     }

//     return (
//         <div>

//             <RenderAfterNavermapsLoaded
//                 ncpClientId={config.ncpClientId}
//                 error={<p>Maps Load Error</p>}
//                 loading={<p>Maps Loading...</p>}
//             >
//                 <NaverMap
//                     mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
//                     defaultCenter={{ lat: 35.896500, lng: 128.622062 }}
//                     defaultZoom={17}

//                     style={mapStyle}
//                 >
//                     <Marker
//                         lat={Marker.lat}
//                         lng={Marker.lng}
//                         position={{ lat: 35.896500, lng: 128.622062 }}
//                         animation={2}
//                         onClick={(e) => {
//                             alert("안녕하세요.")
//                         }}
//                     >
//                     </Marker>

//                 </NaverMap>
//             </RenderAfterNavermapsLoaded>
//         </div>
//     );
// }


class MapAPI extends Component {


    constructor(props) {
        super(props);
        const navermaps = window.navermaps;

        this.state = {
            center: {lat: 37.3595704, lng: 127.105399},
            // defaults
            zoomControl: true, //줌 컨트롤의 표시 여부
            zoomControlOptions:
                { //줌 컨트롤의 옵션
                    // position:
                },

            btnColorState: 0,
            btnColor: {
                0: "primary",
                1: "default"
            },

            // min max zoom
            minZoom: 1,
            maxZoom: 17,

            // interaction
            draggable: true,
            pinchZoom: true,
            scrollWheel: true,
            keyboardShortcuts: true,
            disableDoubleTapZoom: false,
            disableDoubleClickZoom: false,
            disableTwoFingerTapZoom: false,

            // kinetic
            disableKineticPan: true,

            // tile transition
            tileTransition: true,

            // controls
            scaleControl: true,
            logoControl: true,
            mapDataControl: true,
            zoomControl: true,
            mapTypeControl: true


        }
        this.toggleInteraction = this.toggleInteraction.bind(this)
        this.toggleKinetic = this.toggleKinetic.bind(this)
        this.toggleTileTransition = this.toggleTileTransition.bind(this)
        this.toggleControl = this.toggleControl.bind(this)
        this.toggleMinMaxZoom = this.toggleMinMaxZoom.bind(this)
        this.panToNaver = this.panToNaver.bind(this);
    }


    panToNaver() {
        this.setState({center: {lat: 37.3595704, lng: 127.105399}})
    }


    toggleInteraction() {
        if (this.state.draggable) {
            this.setState({
                btnColorState: 1,
                draggable: false,
                pinchZoom: false,
                scrollWheel: false,
                keyboardShortcuts: false,
                disableDoubleTapZoom: true,
                disableDoubleClickZoom: true,
                disableTwoFingerTapZoom: true,
            })
        } else {
            this.setState({
                btnColorState: 0,

                draggable: true,
                pinchZoom: true,
                scrollWheel: true,
                keyboardShortcuts: true,
                disableDoubleTapZoom: false,
                disableDoubleClickZoom: false,
                disableTwoFingerTapZoom: false,
            })
        }
    }

    toggleKinetic() {
        this.setState({
            disableKineticPan: !this.state.disableKineticPan,
        })
    }

    toggleTileTransition() {
        this.setState({
            tileTransition: !this.state.tileTransition,
        })
    }

    toggleControl() {
        if (this.state.scaleControl) {
            this.setState({
                scaleControl: false,
                logoControl: false,
                mapDataControl: false,
                zoomControl: false,
                mapTypeControl: false
            })
        } else {
            this.setState({
                scaleControl: true,
                logoControl: true,
                mapDataControl: true,
                zoomControl: true,
                mapTypeControl: true
            })
        }
    }

    toggleMinMaxZoom() {
        if (this.state.minZoom === 10) {
            this.setState({
                minZoom: 1,
                maxZoom: 17,
            })
        } else {
            this.setState({
                minZoom: 10,
                maxZoom: 12,
            })
        }
    }


    render() {

        return (
            <div>

                <RenderAfterNavermapsLoaded
                    ncpClientId={config.ncpClientId}
                    error={<p>Maps Load Error</p>}
                    loading={<p>Maps Loading...</p>}
                >
                    <NaverMap
                        mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
                        defaultCenter={{lat: 35.896500, lng: 128.622062}}
                        defaultZoom={17}

                        style={{
                            position: "absolute",
                            width: '89.5%',
                            height: '100%',
                        }}
                        {...this.state}

                        // onClick={(e) => {
                        //     alert("click")
                        // }}

                        // 마우스 우클릭
                        // onRightclick={(e) => {
                        //     alert("right")
                        // }}

                        // 마우스 더블 클릭
                        // onDblclick={(e) => {
                        //     alert("double click")
                        // }}

                        // 드래그 시작할 때
                        // onDragstart={(e) => {
                        //     alert("Drag Start")
                        // }}

                        // 드래그 끝낼 떄
                        // onDragend={(e) => {
                        //     alert("Drag End")
                        // }}

                        // 지도 내로 마우스 들어올 때
                        // onMouseover={(e) => {
                        //     alert("Mouse in")
                        // }}

                        // 지도 밖으로 마우스 벗어날 때
                        // onMouseout={(e) => {
                        //     alert("Mouse Out")
                        // }}

                        // 줌 변경
                        // onZooming={(e) => {
                        //     alert("Zoom Change")
                        // }}
                    >
                    </NaverMap>
                </RenderAfterNavermapsLoaded>
                <div>
                    <Buttons style={{position: "absolute", left: "650px", top: "12px", zIndex: 999}}>
                        <ControlBtn
                            variant="contained" color={this.state.btnColor[this.state.btnColorState]}
                            controlOn={this.state.draggable}
                            onClick={this.toggleInteraction}
                        >지도 인터렉션</ControlBtn>
                        <ControlBtn
                            variant="contained" color="primary"
                            controlOn={!this.state.disableKineticPan}
                            onClick={this.toggleKinetic}
                        >관성 드래깅</ControlBtn>
                        <ControlBtn
                            variant="contained" color="primary"
                            controlOn={this.state.tileTransition}
                            onClick={this.toggleTileTransition}
                        >타일 fadeIn 효과</ControlBtn>
                        <ControlBtn
                            variant="contained" color="primary"
                            controlOn={this.state.scaleControl}
                            onClick={this.toggleControl}
                        >모든 지도 컨트롤</ControlBtn>
                        <ControlBtn
                            variant="contained" color="primary"
                            onClick={this.toggleMinMaxZoom}
                        >
                            {'최소/최대 줌 레벨' + (this.state.minZoom === 10 ? ': 10 ~ 12' : ': 1 ~ 17')}
                        </ControlBtn>
                    </Buttons>

                </div>
            </div>
        );
    }
}


export default MapAPI;