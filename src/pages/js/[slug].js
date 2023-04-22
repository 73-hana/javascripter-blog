import fs from 'fs';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

export async function getStaticProps({ params }) {
  const file = fs.readFileSync(`posts/js/neko.md`, 'utf-8');
  const { data, content } = matter(file);
  return {
    props: {
      frontMatter: data,
      content,
    },
  };
}

export async function getStaticPaths() {
  const files = fs.readdirSync('posts/js');
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(/\.md$/, ''),
    },
  }));
  console.log('paths:', paths);
  return {
    paths,
    fallback: false,
  };
}

export default function Js({ frontMatter, content }) {
  return (
    <div className='container'>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  )
}