import { getAllPostIds, getPostData } from '../../lib/posts';
import Layout from '../../components/Layout';
import Date from '../../components/Date';
import Head from 'next/head';

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <h1>
        {postData.title} by {postData.author}
      </h1>
      <p>{postData.id}</p>
      <p>
        <Date dateString={postData.date} />
      </p>

      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  );
}
