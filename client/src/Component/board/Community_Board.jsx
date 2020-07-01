import React, {Component} from "react";


// import {table}
class Community_Board extends Component {

    render() {
        return (
            <div style={Board_style}>

                <table style={{border:"1px solid black", width:"100%"}}>
                    <thead style={{border:"1px solid black"}}>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>날짜</th>
                        <th>조회수</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>165</td>
                        <td>이제 곧 부트 스트랩 4 가 나온다면서요?</td>
                        <td>정진규</td>
                        <td>2016.12.02</td>
                        <td style={{textAlign:"center"}}>2</td>
                    </tr>
                    <tr>
                        <td>165</td>
                        <td>이제 곧 부트 스트랩 4 가 나온다면서요?</td>
                        <td>정진규</td>
                        <td>2016.12.02</td>
                        <td style={{textAlign:"center"}}>2</td>
                    </tr>
                    <tr>
                        <td>165</td>
                        <td>이제 곧 부트 스트랩 4 가 나온다면서요?</td>
                        <td>정진규</td>
                        <td>2016.12.02</td>
                        <td style={{textAlign:"center"}}>2</td>
                    </tr>
                    <tr>
                        <td>165</td>
                        <td>이제 곧 부트 스트랩 4 가 나온다면서요?</td>
                        <td>정진규</td>
                        <td>2016.12.02</td>
                        <td style={{textAlign:"center"}}>2</td>
                    </tr>
                    <tr>
                        <td>165</td>
                        <td>이제 곧 부트 스트랩 4 가 나온다면서요?</td>
                        <td>정진규</td>
                        <td>2016.12.02</td>
                        <td style={{textAlign:"center"}}>2</td>
                    </tr><tr>
                        <td>165</td>
                        <td>이제 곧 부트 스트랩 4 가 나온다면서요?</td>
                        <td>정진규</td>
                        <td>2016.12.02</td>
                        <td style={{textAlign:"center"}}>2</td>
                    </tr><tr>
                        <td>165</td>
                        <td>이제 곧 부트 스트랩 4 가 나온다면서요?</td>
                        <td>정진규</td>
                        <td>2016.12.02</td>
                        <td style={{textAlign:"center"}}>2</td>
                    </tr>


                    </tbody>

                </table>


            </div>
        );
    }
}

const Board_style = {
    border: '1px solid black',
    margin: 10,
    padding: 0,
    top: "50px",
    position: "absolute",
    left: 0, height: "92%",
    width: "96%",
    backgroundColor: "pink",
    zIndex: 451
}


export default Community_Board;