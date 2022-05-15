import { ShowList } from '@/components';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const ShowListPage = () => {
    const {article} = useSelector(state => state.login)
    useEffect(() =>{
        console.log(' 모듈에 저장된 게시글: '+JSON.stringify(article))
    }, [])
    const onSubmit = e => {
        e.preventDefault()
        alert('게시글 쓰기로 이동')
        window.location.href = "/board/register"
    }
    return (<ShowList article={article} onSubmit={onSubmit}/>);
};

export default ShowListPage
