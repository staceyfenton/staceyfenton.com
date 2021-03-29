import Link from 'next/link'
import Layout, { siteTitle, siteDescription } from '../components/layout'
import { getSortedWorkData } from '../lib/work'
import Meta from '../components/seo-meta'
import { useRouter } from 'next/router'

export async function getStaticProps() {
  const allWorkData = getSortedWorkData()
  return {
    props: {
      allWorkData
    }
  }
}

export default function Work({ allWorkData }) {
  const title = `My work | ${siteTitle}`;
  const router = useRouter();

  return (
    <>
      <Layout>
        <Meta 
          title={title} 
          desc={siteDescription} 
          path={router.pathname}
        /> 
        <div className="container">
          <h2>My Work</h2>

          <section className="container project-list">
            <ul className="list-reset grid">
              {allWorkData.map(({ id, thumbnail, title }) => (
                <li key={id}>
                  <Link href="/work/[id]" as={`/work/${id}`}>
                    <a className="project-list__link">
                      <img src={thumbnail} alt={title} className="project-list__img" loading="lazy" width="287" height="206" />
                      <span className="project-list__name">{title}</span>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </Layout>
    </>
  )
}