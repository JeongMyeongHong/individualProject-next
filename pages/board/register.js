import React, {useState} from 'react';
import { useDispatch, connect } from 'react-redux';
import { registerRequest, unregisterRequest } from '@/modules/board/register';
import { BoardRegister } from '@/components';

const RegisterPage = () => {
    const [board, setBoard] =useState({
      subject:'', title:'', contents:''
    })
    const dispatch = useDispatch()
    const onChange = e =>{
        e.preventDefault()
        const{name, value} = e.target;
        setBoard({...board,[name]: value})
    }
    const onSubmit = e => {
        e.preventDefault()
        alert('게시글 정보: '+JSON.stringify(board))
        dispatch(registerRequest(board))
    }
  return (
    <BoardRegister onChange={onChange} onSubmit={onSubmit}  />
  );
};

const mapStateToProps = state => ({ isRegisterd: state.register.isRegisterd })
const registerActions = {registerRequest, unregisterRequest}

export default connect(mapStateToProps, registerActions)(RegisterPage)