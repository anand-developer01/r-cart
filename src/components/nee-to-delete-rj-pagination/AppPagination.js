import React, { useState, useMemo } from 'react';
import Pagination from './Pagination';
import fetchData from './useFetchData'
// import data from './mock-data.json';
// import './style.scss';

let PageSize = 10;

export default function App() {

    const [currentPage, setCurrentPage] = useState(1);
    const { data, loading, iaError } = fetchData(`https://jsonplaceholder.typicode.com/posts`)

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return data.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, data]);

    console.log(currentTableData)
    return (
        <>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>title</th>
                        <th>body</th>
                        <th>userId</th>
                    </tr>
                </thead>
                <tbody>
                    {currentTableData.map(item => {
                        return (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.body}</td>
                                <td>{item.userId}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <Pagination
                className=""
                currentPage={currentPage}
                totalCount={data.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
            />
        </>
    );
}
