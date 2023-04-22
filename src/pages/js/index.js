import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';

export function getStaticProps() {
  const files = fs.readdirSync('posts/js');
  const posts = files.map(fileName => {
    const slug = fileName.replace(/\.md$/, '');
    const fileContent = fs.readFileSync(`posts/js/${fileName}`, 'utf-8');
    const { data, content } = matter(fileContent);
    // データをpropに出力
    return {
      frontMatter: data,
      slug,
    }
  });
  return {
    props: {
      posts,
    },
  };
};

export default function Index({ posts }) {
  console.log(posts);
  return (
    <>
      <h2>JavaScript</h2>
      {posts.map(post => (
        <div key={post.slug}>
          <Link href={`/js/${post.slug}`}>{post.frontMatter.title}</Link>
        </div>
      ))}
    </>
  );
}