import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';

function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        hendrerit vitae velit porta accumsan. Suspendisse facilisis eros in
        lacus lacinia commodo. Praesent aliquet orci et tincidunt lobortis.
        Curabitur eu arcu congue, dictum dolor quis, ultricies orci. Donec purus
        odio, commodo non metus suscipit, gravida auctor tellus. Sed imperdiet
        ligula nunc, et ornare sem faucibus a. Duis dapibus ac purus a
        condimentum.
      </p>
    </Layout>
  );
}

export default FirstPost;
