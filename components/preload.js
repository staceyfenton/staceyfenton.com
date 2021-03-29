import Head from 'next/head'

function Preload() {
  const regularFont = `/fonts/raleway-regular.woff`;
  const mediumFont = `/fonts/raleway-medium.woff`;
  const boldFont = `/fonts/raleway-bold.woff`;
  const semiBoldFont = `/fonts/raleway-semibold.woff`;

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