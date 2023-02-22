import Head from 'next/head'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

import { getAllFilesMetadata } from '@/lib/mdx'
import { Posit } from '@/components/Posit'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Blogjjournal</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <h1 className={styles.title}>
          Junior's Journal
        </h1>
      </header>
      <main>
        <div>
          {posts.map((post) => (

            <Link key={post.slug} href={`/${post.slug}`} >
              <Posit post={post} />
            </Link>
          ))}
        </div>
      </main>
      <footer></footer>
    </>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesMetadata();
  console.log(posts);
  return {
    props: { posts },
  };
}
