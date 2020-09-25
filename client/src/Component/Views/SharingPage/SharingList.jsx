import React, { useState, useEffect } from "react";
import { Collapse, Button, Pagination } from "antd";
import { Typography, Table, TableCell, TableRow, Paper } from "@material-ui/core"
import { withRouter } from "react-router-dom";
import axios from "axios";

const { Panel } = Collapse;

function SharingList() {
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

    // 공유된 주행기록 DB를 매핑
    // const ShareListMapping = Shared.map((shared, index) => {} )




    for (var i = 0; i < 1; i++) {
        ShareList.push(
            <Panel header="공유 게시판 UI 테스트" key="i">
                <p>앙 경주부터 김해까지 개꿀띠~~</p>

                <Table component={Paper}>
                    <TableRow>
                        <TableCell>라이딩거리</TableCell>
                        <TableCell>소모칼로리</TableCell>
                        <TableCell>라이딩시간</TableCell>
                        <TableCell>평균속도</TableCell>
                        <TableCell>최고속도</TableCell>

                    </TableRow>
                    <TableRow>
                        <TableCell>12.47km</TableCell>
                        <TableCell>721kcal</TableCell>
                        <TableCell>2시간18분</TableCell>
                        <TableCell>13km/h</TableCell>
                        <TableCell>20km/h</TableCell>
                    </TableRow>
                </Table>

                <Button style={{ margin: 3, padding: 3 }}> 경로보기 </Button>
            </Panel>
        )
        sharedCount++;
        sharedPageNum = (sharedCount / 4) * 10;
    }



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