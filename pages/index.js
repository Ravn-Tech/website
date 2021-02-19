import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home ({ allPostsData }) {
  return (
    <div  className={utilStyles.flexer}>
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.menu}>
        <a href="/posts/ravn-tech"><p className={utilStyles.menu_element}>ABOUT</p></a>
        <a href="/posts/projects"><p className={utilStyles.menu_element}>PROJECTS</p></a>
        <a href="/posts/team"><p className={utilStyles.menu_element}>TEAM</p></a>
        <a href="/posts/join"><p className={utilStyles.menu_element}>JOIN</p></a>
      </section>
      <section className={utilStyles.headingMd}>
        <p>RAPIDLY EMERGING &amp; ADAPTING FLOCK.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>          
          ))}
        </ul>
      </section>
    </Layout>
    <footer className={utilStyles.footer}>
    <p>Source code available on <a href="https://github.com/Ravn-Tech/website" rel="noreferrer noopener" target="_blank">Github</a> | Stay in touch: <a href="https://twitter.com/RavnTech" rel="noreferrer noopener" target="_blank">@RavnTech</a> | Ravn Tech, Inc. 2021 - Copyright</p>
</footer>
</div>
  )
}
