import React, { useState } from "react";
import { Collapse, Button, Pagination } from "antd";
import {Typography} from "@material-ui/core"

const { Panel } = Collapse;

function SharingList() {
    const { Panel } = Collapse;
    // 공유된 주행기록
    const [shared, setShared] = useState([]);

    const [s_current, setS_Current] = useState(1);

    var sharedCount = 0;
    var sharedPageNum;
    var ShareList = [];

    // 페이지네이션 누를때 현재 페이지 값을 변경하고 나타냄
    const onChange = page => {
        console.log(page);
        setS_Current(page);
    };

    // 공유된 주행기록 DB를 매핑
    // const ShareListMapping




    for (var i = 0; i < 1; i++) {
        ShareList.push(
            <Panel header="공유 게시판 UI 테스트" key="i">
                <p>앙 경주부터 김해까지 개꿀띠~~</p>
                <Button> 경로보기 </Button>
            </Panel>
        )
        sharedCount++;
        sharedPageNum = (sharedCount / 4) * 10;
    }



    return (
        <div>
             <Typography variant="h4"> 공유게시판 <br/></Typography>
            <Collapse>
                {ShareList}


            </Collapse>

            <Pagination responsive={true} current={s_current} onChange={onChange} total={sharedPageNum} style={{ margin: 3 }} />

        </div>
    );
}
export default SharingList;