import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import utilStyles from '../styles/Utils.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          I'm Kristin and I love creating things on the web. I graduated with a
          B.S. in Computer Science from Villanova University, then designed and
          built webpages and emails for Memorial Sloan Kettering Cancer Center
          and The Bowery Mission.
        </p>
        <Link href="/posts/first-post">Check out my first post</Link>
      </section>
    </Layout>
  );
}
