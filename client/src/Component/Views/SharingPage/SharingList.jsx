import React, { useState, useEffect } from "react";
import { Collapse, Button, Pagination } from "antd";
import { Typography, Table, TableCell, TableRow, Paper } from "@material-ui/core"
import { withRouter } from "react-router-dom";
import axios from "axios";

const { Panel } = Collapse;

function SharingList(props) {
    // 공유된 주행기록
    const [Shared, setShared] = useState([]);

    const [s_Current, setS_Current] = useState(1);

    var sharedCount = 0;
    var sharedPageNum;
    var ShareList = [];

    // 페이지네이션 누를때 현재 페이지 값을 변경하고 나타냄
    const onChange = page => {
        console.log(page);
        setS_Current(page);
    };

    useEffect(() => {
        axios.get('/api/share/getSharePost')
            .then(response => {
                if (response.data.getSharePostSuccess) {
                    console.log(response.data)
                    setShared(response.data.sharePosts)
                } else {
                    alert('게시물을 불러오는데 실패했습니다.')
                }
            })
    }, [])
    var latLngValue = [{}]


    // 공유된 주행기록 DB를 매핑
    const ShareListMapping = Shared.map((shared, index) => {

        ShareList.push(
            <Panel header={<p>{shared.title} <br/> {shared.writer.name}</p>} key={index}>
                <p>{shared.content}</p>

                <Table component={Paper}>
                    <TableRow>
                        <TableCell>라이딩거리</TableCell>
                        <TableCell>소모칼로리</TableCell>
                        <TableCell>라이딩시간</TableCell>
                        <TableCell>평균속도</TableCell>

                    </TableRow>
                    <TableRow>
                        <TableCell>{shared.RideInfo.totalRideDis}</TableCell>
                        <TableCell>{shared.RideInfo.kcal}</TableCell>
                        <TableCell>{shared.RideInfo.totalRideTime}</TableCell>
                        <TableCell>{shared.RideInfo.speedAvg}</TableCell>
                    </TableRow>
                </Table>
                <Button style={{ margin: 3, padding: 3 }} onClick={function () {

                    // push 형식으로 경로를 지정하니 기본 배열 첫 칸의 빈 값이 오류가 생겨서 첫 번째 배열 값 제거..
                    latLngValue.pop(0);


                    // DB 안의 위도, 경도값을 형식에 맞게 삽입
                    for (var i = 0; i < shared.RideInfo.latitude.length; i++) {
                        latLngValue.push({
                            lat: shared.RideInfo.latitude[i],
                            lng: shared.RideInfo.longitude[i]
                        });
                    }


                    console.log(latLngValue)

                    // Home 컴포넌트에서 넘어온 경로지정 함수
                    props.setDrawPath(latLngValue);
                    props.setPathView(latLngValue[0])
                }
                } > 경로보기 </Button>
            </Panel>
        )
        sharedCount++;
        sharedPageNum = (sharedCount / 4) * 10;

    })


    {ShareList.reverse()}





    return (
        <div>
            <Typography variant="h4"> 공유게시판 <br /></Typography>
            <Collapse>
                {ShareList}


            </Collapse>

            <Pagination responsive={true} current={s_Current} onChange={onChange} total={sharedPageNum} style={{ margin: 3 }} />

        </div>
    );
}
export default withRouter(SharingList);