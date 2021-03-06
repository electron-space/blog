import Head from 'next/head';
import Link from 'next/link';
import { blogPosts } from '../lib/data';
import { format, parseISO } from 'date-fns';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="space-y-4">
        {blogPosts.map((item) => (
          <BlogListItem key={item.slug} {...item} />
        ))}
      </div>
    </div>
  );
}

function BlogListItem({ slug, title, date, content }) {
  return (
    <div className="border border-purple-300 shadow hover:shadow-md  hover:border-gray-200 rounded-md transition duration-200 ease-in p-4">
      <div>
        <Link href={`blog/${slug}`}>
          <a className="text-lg font-bold">{title}</a>
        </Link>
      </div>
      <div className="text-gray-600 text-xm">
        {format(parseISO(date), 'MMMM do, uuu')}
      </div>
      <div>{content}</div>
    </div>
  );
}
