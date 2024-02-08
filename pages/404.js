import Link from 'next/link'
import Layout, { siteTitle, siteDescription } from '../components/layout'
import Meta from '../components/seo-meta'
import { useRouter } from 'next/router'

export default function Custom404() {
  const title = `Page not found | ${siteTitle}`;
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
          <div className="body-content align-centre">
            <h2>404 - Page Not Found</h2>
            <p>Sorry, the page you are looking for does not exist.</p>
            <p><Link href="/" className="button">Go to homepage</Link></p>
          </div>
        </div>
      </Layout>
    </>
  )
}