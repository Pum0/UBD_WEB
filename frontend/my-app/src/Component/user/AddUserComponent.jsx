import React, {Component} from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from "@material-ui/core/Container";


class AddUserComponent extends Component {

    constructor(props){
        super(props);

        // vo
        this.state = {
            id_name: '',
            pwd: '',
            fullname: '',
            birth: '',
            weight: '',
            message: null
        }``

    }

    render() {
        return (
            <div>
                <Container>
                    <Typography variant="h4" style={style}>회원 가입</Typography>
                    <form style={formContainer}>
                        <TextField type="text" placeholder="아이디를 입력해주세요." name="id_name"
                                   fullWidth margin="normal" value={this.state.id_name} onChange={this.onChange} />

                        <TextField type="password" placeholder="비밀번호를 입력해주세요." name="pwd"
                                   fullWidth margin="normal" value={this.state.pwd} onChange={this.onChange} />

                        <TextField placeholder="이름을 입력해주세요." name="fullname"
                                   fullWidth margin="normal" value={this.state.fullname} onChange={this.onChange} />

                        <TextField placeholder="생년월일을 입력해주세요. ex)2020-01-01" name="birth"
                                   fullWidth margin="normal" value={this.state.birth} onChange={this.onChange} />

                        <TextField type="number" placeholder="체중을 입력해주세요." name="weight"
                                   fullWidth margin="normal" value={this.state.weight} onChange={this.onChange} />

                        <Button variant="contained" color="inherit" onClick={this.saveUser}>회원가입</Button>

                    </form>
                </Container>
            </div>
        );
    }
}

const formContainer = {
    display: 'flex',
    flexFlow: 'row wrap'
}

const style = {
    display: 'flex',
    justifyContent: 'center'
}

export default AddUserComponent;