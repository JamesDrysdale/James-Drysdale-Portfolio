import fs from 'fs';
import path from 'path';

const getPostContent = (slug: string) => {
  const folder = path.join(process.cwd(), 'app', 'posts');
  const file = path.join(folder, `${slug}.md`);
  const content = fs.readFileSync(file, 'utf8');
  return content;
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const content = getPostContent(slug);

  return (
    <article>
      <h1>Hello {slug}</h1>
      {content}
    </article>
  );
};

export default PostPage;
