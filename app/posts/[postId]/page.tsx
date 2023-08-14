import { notFound } from 'next/navigation';
import Link from 'next/link';

import { getSortedPosts, getPost } from '../../../lib/posts';
import getFormattedDate from '../../../lib/getFormattedDate';

export function generateMetadata({ params }: { params: { postId: string } }) {
  const posts = getSortedPosts(); // deduped
  const { postId } = params;

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
  };
}

export default async function Post({ params }: { params: { postId: string } }) {
  const posts = getSortedPosts(); // deduped
  const { postId } = params;

  if (!posts.find((post) => post.id === postId)) {
    return notFound();
  }

  const { title, date, contentHtml } = await getPost(postId);

  const pubDate = getFormattedDate(date);

  return (
    <main className='prose prose-xl mx-auto px-6 dark:prose-invert'>
      <h1>{title}</h1>
      <p>{pubDate}</p>
      <article>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <p>
          <Link href='/articles'>Back to Articles</Link>
        </p>
      </article>
    </main>
  );
}
