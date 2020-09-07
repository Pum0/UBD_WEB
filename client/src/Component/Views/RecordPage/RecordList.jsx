import React, { Component, useState } from "react";
import {Typography} from "@material-ui/core"
import {Pagination} from "antd";
import { withRouter } from "react-router-dom";


function RecordList(props) {

    const [r_Current, setR_Current] = useState(1);

    var recordCount = 0;
    var recordPageNum = 10;
    var recordList = [];


    const onChange = page => {
        console.log(page);
        setR_Current(page);
    };


    return (
        <div>
             <Typography variant="h4"> 나의 기록 <br/></Typography>
            
            

             <Pagination responsive={true} current={r_Current} onChange={onChange} total={recordPageNum} style={{ margin: 3 }} />

        </div>
    );
}

export default withRouter(RecordList);
