import Layout, { siteTitle, siteDescription } from '../components/layout';
import Meta from '../components/seo-meta';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function AboutMe() {
  const title = `About Me | ${siteTitle}`;
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
          <h2>About Me</h2>
          <div className="grid grid--two-col-layout">
            <div>
              <p>
                I have 15 years experience working as a web developer, specialising in building modern, 
                responsive and accessible user interfaces. I've worked across a variety of organisations, 
                from small digital agencies and startups to large corporate enterprises. 
                I’m currently working as a Software Engineering Manager at Vodafone UK.
              </p>

              <p>
                I’ve had the opportunity to be involved in the development of many interesting websites over 
                the course of my career, including <Link href="/work/comparethemarket/">Compare the Market</Link>, ING Direct, <Link href="/work/optus/">Optus</Link>, <Link href="/work/coca-cola-hellenic-bottling-company/">Coca-Cola Hellenic</Link> and <Link href="/work/gsk/">GSK</Link>. 
                The <Link href="/work/">work section</Link> of this website showcases 
                a selection of projects I have been involved with over the last few years.
              </p>
            </div>

            <div>
              <p><img src="/images/stacey-headshot.jpg" alt="A headshot of Stacey Fenton" /></p>
            </div>

            <div>
              <h3>Skills</h3>
              <p>
                This is a selection of languages, tools and libraries which I have the most experience with. 
                I'm always looking for ways to further develop my skillset and welcome the opportunity to work with new technologies.
              </p>
              <h4>Development</h4>
              <ul>
                <li>HTML</li>
                <li>CSS (including SASS)</li>
                <li>JavaScript (vanilla / ES6)</li>
                <li>React (standalone, Next.js)</li>
                <li>Node.js</li>
                <li>Infrastructure - AWS, IaC using Terraform, Cloudflare</li> 
                <li>CMS - WordPress, Episerver</li>
                <li>Version control - Git, Mercurial, SVN</li>
                <li>Code Quality - ESlint, stylelint, SonarQube</li>
              </ul>

              <h4>Workflow</h4>
              <ul>
                <li>CI/CD - TeamCity, TravisCI, Github Actions</li>
                <li>Build tools including Webpack, npm scripts, Gulp and Grunt</li>
                <li>Automated testing - Jest, SauceLabs, Applitools, Lighthouse</li>
              </ul>

              <h4>Design</h4>
              <ul>
                <li>Figma</li>
                <li>Sketch</li>
                <li>Photoshop</li>
              </ul>
            </div>
            
          </div>
        </div>
      </Layout>
    </>
  )
}