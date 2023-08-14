import fs from 'fs';
import path from 'path';

const getPostMetadata = () => {
  const folder = path.join(process.cwd(), 'app', 'posts');
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith('.md'));
  const slugs = markdownPosts.map((file) => file.replace('.md', ''));
  return slugs;
};

const Articles = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((slug) => (
    <div key={slug}>
      <h2>{slug}</h2>
    </div>
  ));

  return <div>{postPreviews}</div>;
};

export default Articles;
