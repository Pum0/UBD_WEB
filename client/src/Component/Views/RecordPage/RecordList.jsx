import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Collapse, Button, Pagination } from "antd";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { Typography, Table, TableCell, TableRow, Paper } from "@material-ui/core"
import moment from "moment";
import { getRideInfo } from "../../../_actions/rideinfo_action"
import { Polyline, NaverMap } from "react-naver-maps"


const { Panel } = Collapse;

function RecordList(props) {

    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    // const RideInfo = useSelector(action => action.payload);

    // const [RideInfo, setRideInfo] = useState([]);
    const [Records, setRecords] = useState([]);
    const [r_Current, setR_Current] = useState(1);

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

        // dispatch(getRideInfo())
        //     .then(response => {
        //         if (response.payload.getRideInfoSuccess) {
        //             console.log(response.payload.rideInfo)
        //         } else { 
        //             alert('실패')
        //         }
        //     })

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

        axios.get('/api/rideInfoes/RideInfo', body)
        .then(response => {
           console.log(response)
        }
        )
    }

    const test = () => {
        console.log()
    }

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

                    <Button onClick={transferRideInfo(record._id)}> {record._id} </Button>
                    <Button style={{ margin: 3, padding: 3 }}> 경로보기 </Button>
                    <Button style={{ margin: 3, padding: 3 }}> 공유하기 </Button>

                </Panel>
            )
        recordCount++;
        recordPageNum = (recordCount / 4) * 10;
    })


    return (
        <div>
            <Typography variant="h4"> 나의 기록 <br /></Typography>
            <Collapse accordion>
                {recordList}


            </Collapse>


            <Pagination responsive={true} current={r_Current} onChange={onChange} total={recordPageNum} style={{ margin: 3 }} />

            <Polyline
                path={[
                    { lat: 35.896500, lng: 128.622062 },
                    { lat: 35.896500, lng: 128.622062 },
                    { lat: 35.896500, lng: 128.622062 },
                    { lat: 35.897500, lng: 128.622062 },
                ]}
                strokeColor={'#000000'}
                strokeOpacity={0.7}
                strokeWeight={3}
                style={{ zIndex: 999 }}
            />


        </div>
    );
}

export default withRouter(RecordList);
