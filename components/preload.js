import Head from 'next/head'

function Preload() {
  const prefix = process.env.NODE_ENV === 'production' ? 'https://d1nd6ebc4fb67p.cloudfront.net' : '';
  const regularFont = `${prefix}/fonts/raleway-regular.woff`;
  const mediumFont = `${prefix}/fonts/raleway-medium.woff`;
  const boldFont = `${prefix}/fonts/raleway-bold.woff`;
  const semiBoldFont = `${prefix}/fonts/raleway-semibold.woff`;

  return (
    <Head>
      <link rel="preload" href={regularFont} as="font" type="font/woff" crossOrigin="true" />
      <link rel="preload" href={mediumFont} as="font" type="font/woff" crossOrigin="true" />
      <link rel="preload" href={boldFont} as="font" type="font/woff" crossOrigin="true" />
      <link rel="preload" href={semiBoldFont} as="font" type="font/woff" crossOrigin="true" />
    </Head>
  )
}

export default Preload;