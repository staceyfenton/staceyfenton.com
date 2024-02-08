import Link from 'next/link'
import Layout, { siteTitle, siteDescription } from '../components/layout'
import Meta from '../components/seo-meta'
import { useRouter } from 'next/router'
import { getSortedWorkData } from '../lib/work'

export async function getStaticProps() {
  const allWorkData = getSortedWorkData();

  return {
    props: {
      allWorkData
    }
  }
}

export default function Home({ allWorkData }) {
  const router = useRouter();

  return (
    <Layout headerClass={'header--home'}>
      <Meta 
        title={siteTitle} 
        desc={siteDescription} 
        path={router.pathname}
      /> 
      <section className="hero">
        <div className="container">
          <h2 className="hero__heading">Hi, I'm Stacey</h2>
          <p>
            I'm a technical lead and front‑end developer originally from Sydney, Australia, currently based in London, UK.
          </p>
          <p><Link href="/about-me" className="button">More about me</Link></p>
        </div>
      </section>

      <section className="container project-list">
        <h2>Recent work</h2>
        <ul className="list-reset grid">
          {allWorkData.slice(0, 6).map(({ id, thumbnail, title }) => (
            <li key={id}>
              <Link href="/work/[id]" as={`/work/${id}`} className="project-list__link">
                <img src={thumbnail} alt={title} className="project-list__img" width="318" height="228" loading="lazy" />
                <span className="project-list__name">{title}</span>
              </Link>
            </li>
          ))}
        </ul>

        <p className="align-centre"><Link href="/work" className="button">See more of my work</Link></p>
      </section>
    </Layout>
  )
}
