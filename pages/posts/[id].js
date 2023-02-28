import { getAllPostIds } from '../../lib/posts';
import Layout from '../../components/Layout';

export default function Post() {
  return <Layout></Layout>;
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
