import Layout, { siteTitle, siteDescription } from '../../components/layout'
import { getAllWorkIds, getWorkData } from '../../lib/work'
import Meta from '../../components/seo-meta'

export async function getStaticPaths() {
  const paths = getAllWorkIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const workData = await getWorkData(params.id)
  return {
    props: {
      workData
    }
  }
}

export default function Work({ workData }) {
  const title = `${workData.title} | ${siteTitle}`;
  const path = `/work/${workData.id}`;

  return <Layout>
    <Meta 
      title={title} 
      desc={siteDescription} 
      path={path}
    /> 

    <div className="container">
      <h2>{workData.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: workData.contentHtml }} />
    </div>
  </Layout>
}
