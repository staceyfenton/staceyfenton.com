import Meta from '../components/seo-meta';
import { useRouter } from 'next/router';
import Layout, { siteTitle, siteDescription } from '../components/layout';
import Link from 'next/link';

export default function Speaking() {
  const title = `Speaking | ${siteTitle}`;
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
          <div className="body-content">
            <h2>Speaking</h2>
            <p>
              Below is a list of my past and upcoming speaking engagements. If you would like to invite me to speak at your event please <Link href="/get-in-touch"><a>get in touch</a></Link>.
            </p>
            <h3>Upcoming speaking events</h3>
            <ul className="list-reset">
              <li>
                <p>
                  <a href="https://www.devopsonline.co.uk/industryforum/speakers/stacey-fenton/">DevOps Industry Forum</a><br />
                  June 2021<br />
                  London, UK
                </p>
              </li>
            </ul>
            
            <h3>Past appearances</h3>
            <ul className="list-reset">
              <li>
                <strong>London Web Performance Group</strong><br />
                14th April 2020
                <p>Migrating Meerkats: How Compare the Market moved their content to the cloud</p>

                <div className="video">
                  <iframe src="https://www.youtube.com/embed/DzSQ9T-bDK4?modestbranding=1&amp;rel=0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Layout>
    </>
  )
}