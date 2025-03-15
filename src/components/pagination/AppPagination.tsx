// App.tsx
import React, { useState, useEffect } from 'react';
import Pagination from './Pagination';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const postsPerPage = 10;

  const fetchPosts = async (page: number) => {
    setLoading(true);

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${postsPerPage}`
      );
      const data = await response.json();
      setPosts(data);

      const total = parseInt(response.headers.get('x-total-count') || '0', 10);
      setTotalCount(total);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts(currentPage);
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
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
                    {posts.map((item) => {
                        return (
                            <tr key={item.id}>
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
        currentPage={currentPage}
        totalCount={totalCount}
        pageSize={postsPerPage}
        onPageChange={handlePageChange}
        siblingCount={1}
      />
    </div>
  );
};

export default App;
