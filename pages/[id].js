import Head from 'next/head';
import { getPost, getPostIds } from 'src/helpers/post';
import Date from 'src/components/Date/Date';

export default function Post({ post }) {
  return (
    <div >
      <Head>
        <title>{post.title}</title>
      </Head>
      <article>
        <h1>{post.title}</h1>
        <div>
          <Date dateString={post.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </article>
    </div >
  )
}

export async function getStaticPaths() {
  const paths = getPostIds();

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const post = await getPost(params.id);

  return {
    props: {
      post
    }
  }
}