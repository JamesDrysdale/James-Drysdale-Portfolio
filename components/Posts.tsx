import { getSortedPosts } from '../lib/posts';
// import PostListItem from './PostListItem'; // original import
import PostListItem from '../components/PostListItem';

export default function Posts() {
  const posts = getSortedPosts();

  return (
    <section>
      <h2>Articles</h2>
      <ul>
        {posts.map((post) => (
          <PostListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
}
