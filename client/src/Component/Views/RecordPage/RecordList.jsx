import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Collapse, Button, Pagination } from "antd";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { Typography, Table, TableCell, TableRow, Paper } from "@material-ui/core"
import moment from "moment";
import { getRideInfo } from "../../../_actions/rideinfo_action"
import { Polyline, NaverMap } from "react-naver-maps"
import ShareModal from "./section/ShareModal"

const { Panel } = Collapse;

function RecordList(props) {

    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    // const RideInfo = useSelector(action => action.payload);

    // const [RideInfo, setRideInfo] = useState([]);
    const [Records, setRecords] = useState([]);
    const [r_Current, setR_Current] = useState(1);
    const [rideInfo, setrideInfo] = useState([]);




    var recordCount = 0;
    var recordPageNum;
    var recordList = [];

    const writer = user.userData._id
    // const rideInfoId = RideInfo.rideInfo._id

    const onChange = page => {
        console.log(page);
        setR_Current(page);
    };


    useEffect(() => {

        const body = {
            writer: writer
        }


        axios.post('/api/rideInfoes/getRideInfo', body)
            .then(response => {
                if (response.data.getRideInfoSuccess) {
                    console.log(response.data.rideInfo)
                    setRecords(response.data.rideInfo)
                } else {
                    alert('기록을 불러오는데 실패했습니다.')
                }
            }
            )
    }, [])

    const transferRideInfo = (_id) => {

        const body = {
            _id: _id
        }

        axios.post('/api/rideInfoes/RideInfo', body)
            .then(response => {
                // setrideInfo(response.data.rideInfo)
                console.log(response.data.rideInfo)
            })
    }

    const test = () => {
        console.log()
    }

    // 네이버 지도 API polyLine 형식에 맞게 위도+경도 형태로 바꾸기
    var latLngValue = [{}]

    const recordMapping = Records.map((record, index) => {

        if (user.userData._id)
            recordList.push(
                <Panel header={moment(record.created).format("YYYY.MM.DD HH:mm")} key={index}>
                    <Table component={Paper}>
                        <TableRow>
                            <TableCell>라이딩거리</TableCell>
                            <TableCell>소모칼로리</TableCell>
                            <TableCell>라이딩시간</TableCell>
                            <TableCell>평균속도</TableCell>

                        </TableRow>
                        <TableRow>
                            <TableCell>{record.totalRideDis}</TableCell>
                            <TableCell>{record.kcal}</TableCell>
                            <TableCell>{record.totalRideTime}</TableCell>
                            <TableCell>{record.speedAvg}</TableCell>
                        </TableRow>
                    </Table>
                    <div style={{display:"flex"}}> 
                    <Button style={{ margin: 3, padding: 3 }} onClick={function () {

                        // push 형식으로 경로를 지정하니 기본 배열 첫 칸의 빈 값이 오류가 생겨서 첫 번째 배열 값 제거..
                        latLngValue.pop(0);


                        // DB 안의 위도, 경도값을 형식에 맞게 삽입
                        for (var i = 0; i < record.latitude.length; i++) {
                            latLngValue.push({
                                lat: record.latitude[i],
                                lng: record.longitude[i]
                            });
                        }


                        console.log(latLngValue)

                        // Home 컴포넌트에서 넘어온 경로지정 함수
                        props.setDrawPath(latLngValue);
                        props.setPathView(latLngValue[0])
                    }
                    } > 경로보기 </Button>

                    <ShareModal recordId={record._id} />
                    </div>
                </Panel >
            )
        recordCount++;
        recordPageNum = (recordCount / 4) * 10;
    })

    { recordList.reverse() }

    return (
        <div>
            <Typography variant="h4"> 나의 기록 <br /></Typography>
            <Collapse accordion>
                {recordList}


            </Collapse>


            <Pagination responsive={true} current={r_Current} onChange={onChange} total={recordPageNum} style={{ margin: 3 }} />

            {/* <Polyline
                path={[
                    { lat: 35.896500, lng: 128.622062 },
                    { lat: 35.896500, lng: 128.622062 },
                    { lat: 35.896500, lng: 128.622062 },
                    { lat: 35.897500, lng: 128.622062 },
                ]}
                strokeColor={'#000000'}
                strokeOpacity={0.4}
                strokeWeight={3}
                style={{ zIndex: 999 }}
            /> */}


        </div>
    );
}

export default withRouter(RecordList);