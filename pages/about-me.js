import Layout, { siteTitle, siteDescription } from '../components/layout';
import Meta from '../components/seo-meta';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import headshot from '../public/images/stacey-headshot.jpg';

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
                With nearly two decades of experience in web development, I specialize in crafting contemporary, responsive, 
                and inclusive user interfaces. I've worked across a variety of organisations, 
                from small digital agencies and startups to large corporate enterprises. 
                I’m currently working as a Software Engineering Manager at Vodafone UK.
              </p>

              <p>
                Throughout my career, I've contributed to an array of interesting web applications, lending my expertise to 
                renowned brands such as <Link href="/work/comparethemarket/">Compare the Market</Link>, ING Direct, 
                <Link href="/work/optus/">Optus</Link>, <Link href="/work/coca-cola-hellenic-bottling-company/">Coca-Cola Hellenic</Link> 
                and <Link href="/work/gsk/">GSK</Link>. 
                The <Link href="/work/">work section</Link> of this website showcases 
                a selection of projects I have been involved with over the last few years.
              </p>
            </div>

            <div>
              <p>
                <Image 
                  src={headshot} 
                  alt="A headshot of Stacey Fenton" 
                  style={{
                    width: '100%',
                    height: 'auto'
                  }}
                />
               </p>
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
                <li>Code Quality - ESlint, stylelint, SonarQube, Prettier</li>
              </ul>

              <h4>Workflow</h4>
              <ul>
                <li>CI/CD - TeamCity, TravisCI, Github Actions, Azure DevOps</li>
                <li>Build tools including Webpack, npm scripts, Gulp and Grunt</li>
                <li>Automated testing - Jest, SauceLabs, Applitools, Lighthouse, Cypress</li>
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