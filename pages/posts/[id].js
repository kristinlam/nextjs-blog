import { getAllPostIds, getPostData } from '../../lib/posts';
import Layout from '../../components/Layout';

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <h1>
        {postData.title} by {postData.author}
      </h1>
      <p>{postData.id}</p>
      <p>{postData.date}</p>
    </Layout>
  );
}
