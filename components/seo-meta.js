import Head from 'next/head'

function Meta({title, desc, path}) {
  const canonical = `https://staceyfenton.com${path}`;

  return (
    <Head>
      <title>{title}</title>
      <link rel="canonical" href={canonical} />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Stacey Fenton" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={canonical} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@staceyfenton" />
      <meta name="twitter:creator" content="@staceyfenton" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={desc} />

      <meta name="google-site-verification" content="sa1oDEDmuFSDxoTWoLOVwNCFIlbb3nVcI1lRQ9vZ0tU" />
    </Head>
  )
}

export default Meta;
