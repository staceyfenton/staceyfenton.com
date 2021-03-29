import Head from 'next/head';
import Link from 'next/link';
import Preload from './preload';

export const siteTitle = 'Stacey Fenton - Front-End / UI Engineer and Technical Lead';
export const siteDescription = 'I\'m a Technical Lead and Front-End Developer based in London, United Kingdom, with over 15 years commercial experience.';

function Layout({ headerClass, children }) {
  return (
    <div className="site-wrapper">
      <Head>
        <link rel="icon" type="image/png" href="data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACFElEQVRYhcXX3YtOURQG8N+84yvfoTe5EMokhREpNUW4QGpufczF5IK/w5XkD3ClcOnaR3NFYTAmSiSSi5GPUtPQxDQ+L9Z+67xizj7MO+9Tp7P3bu21n7PWPs9euwOLtRG1di4Osyra17AdB9CN1ZiPSXzGezzBAAbxo8xhh/wU9OA0Nmfab8JImVFuBE7gjOaUfcNb8eULsbKCv0oE9uFsoT+Y+rdF6BuYI9LSi/5cAmUpqOEuNqT+ZZxUntu6iMz4/xLowoPUnsR6jJU5rYKy33BdoT0y3YvnECiGemmG/bQTeFlor8CemSbwCg8L/XPydSALnZhbYvMMRwXZBegTqXkktKDlBN6IVBxM9p3YhWP4gqf43koCRBRuYCeWp7FF2I/D+JiI/GwVAUJ2L6bFtmFeGl+CQ4nMY7xrFQEi1EO4gK/YIiSYOAv6hAIOy4xGVQINTOAWLmE2topNWsNesUnv5DiqchxPhY04n94N9OLmTBGQ/AwUSAyLaMwYAaJouVror8XoVBOmW9vvaRanVWUTWlGUFn1O/C+BumplVk/B54SMmrCMwG5c/83x31DXXLpd0Vyy/RE5X7dDbKwXuIb74mwYE2q4RpwNx7EszfmEUxm+K4W3Kz1lGMURGeGnXAk/iItH4wIyFcaFMvbjec7i5OtATVTG3eLfrqexcbwWt6EhGbv+Xwm0DG2/nLadwC/mhGJDka8IDwAAAABJRU5ErkJggg==" />
        <meta name="language" content="en" />
        <meta name="keywords" content="front-end web developer, technical lead, UI engineer, HTML, CSS, JavaScript, London, Sydney"/>
        <meta name="description" content={siteDescription} />
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
          &copy; 2021 Stacey Fenton. All Rights Reserved.
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
    </div>
  )
}

export default Layout;