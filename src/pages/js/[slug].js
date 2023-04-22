import fs from 'fs';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Head from 'next/head';

export async function getStaticProps({ params }) {
  const file = fs.readFileSync(`posts/js/${params.slug}.md`, 'utf-8');
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
    <>
      <Head>
        <title>{frontMatter.title} | JavaScripter</title>
      </Head>
      <div className='container'>
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </>
  )
}