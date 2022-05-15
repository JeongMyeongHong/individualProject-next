import tableStyles from '@/styles/Table.module.css'
import Link from 'next/link'

export function ShowList({article, onSubmit}){

    return (
      <table className={tableStyles.table}>
        <thead>
            <tr>
                <th colSpan={6}><h1>게시글 목록</h1></th>
            </tr>
        </thead>
        <tbody>
        
        </tbody>
      </table>
    );
}