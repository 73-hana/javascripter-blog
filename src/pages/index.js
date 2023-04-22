import fs from 'fs';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

export async function getStaticProps({ params }) {
  const file = fs.readFileSync(`posts/index.md`, 'utf-8');
  const { data, content } = matter(file);
  return {
    props: {
      frontMatter: data,
      content,
    },
  };
}

export default function Index({ frontMatter, content }) {
  return (
    <div className='container'>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  )
}