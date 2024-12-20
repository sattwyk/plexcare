import { useQuery } from '@tanstack/react-query';
import './App.css';
// import { apiClient } from './lib/api-client';

async function fetchPosts() {
  const res = await client.users.$get();

  if (!res.ok) {
    throw new Error('Network error');
  }

  return res.json();
}

import { client } from 'api';
function App() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      <div>
        {data.map((user) => (
          <div key={post.id}>{post.content}</div>
        ))}
      </div>
    </>
  );
}

export default App;
