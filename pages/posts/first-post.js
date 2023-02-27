import Link from 'next/link';

function FirstPost() {
  return (
    <div>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </div>
  );
}

export default FirstPost;
