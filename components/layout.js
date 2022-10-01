import Head from 'next/head';
import Link from 'next/link';
import Preload from './preload';

export const siteTitle = 'Stacey Fenton - Front-End / UI Engineer and Technical Lead';
export const siteDescription = 'I\'m a Technical Lead and Front-End Developer based in London, United Kingdom, with over 15 years commercial experience.';

function Layout({ headerClass, children }) {
  return (
    <div className="site-wrapper">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" type="image/png" href="/images/icons/favicon-16x16.png" sizes="16x16" />
        <link rel="icon" type="image/png" href="/images/icons/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/images/icons/favicon-96x96.png" sizes="96x96" />
        <link rel="apple-touch-icon" href="/images/icons/apple-icon-180x180.png" />
        <meta name="language" content="en" />
        <meta name="keywords" content="front-end web developer, technical lead, UI engineer, HTML, CSS, JavaScript, London, Sydney"/>
        <meta name="description" content={siteDescription} />
        <meta name="theme-color" content="#f0f0f0" />
      </Head>
      <Preload />
      <header className={headerClass}>
        <div className="container flex flex-wrap">
          <h1>
            <Link href="/"><a>Stacey Fenton</a></Link>
          </h1>
          <nav>
            <ul className="list-reset flex">
              <li><Link href="/about-me"><a>About</a></Link></li>
              <li><Link href="/work"><a>Work</a></Link></li>
              <li><Link href="/speaking"><a>Speaking</a></Link></li>
              <li><Link href="/get-in-touch"><a>Get in touch</a></Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer>
        <div className="container flex">
          &copy; 2022 Stacey Fenton. All Rights Reserved.
          <ul className="flex list-reset social">
            <li>
              <a className="social__link" href="https://twitter.com/staceyfenton" target="_blank" rel="noopener" aria-label="Twitter profile">
                <svg className="icon icon-twitter-logo"><use xlinkHref="/images/social-sprite.svg#icon-twitter-logo"></use></svg>
              </a>
            </li>
            <li>
              <a className="social__link" href="https://www.linkedin.com/in/staceyfenton" target="_blank" rel="noopener" aria-label="LinkedIn profile">
                <svg className="icon icon-linkedin-logo"><use xlinkHref="/images/social-sprite.svg#icon-linkedin-logo"></use></svg>
              </a>
            </li>
            <li>
              <a className="social__link" href="https://github.com/staceyfenton" target="_blank" rel="noopener" aria-label="Github profile">
                <svg className="icon icon-github-logo"><use xlinkHref="/images/social-sprite.svg#icon-github-logo"></use></svg>
              </a>
            </li>
          </ul>
        </div>
      </footer>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.addEventListener("load", () => {
              if ("serviceWorker" in navigator) {
                navigator.serviceWorker.register("service-worker.js");
              }
            });
          `,
        }}
      ></script>
    </div>
  )
}

export default Layout;