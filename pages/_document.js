import Document, { Html, Head, Main, NextScript } from 'next/document'
import { readFileSync } from 'fs';
import { join } from 'path';

class InlineStylesHead extends Head {
  getCssLinks() {
    return this.__getInlineStyles();
  }

  __getInlineStyles() {
    const { assetPrefix, files } = this.context;
    if (!files || files.length === 0) return null;

    return files.filter(file => /\.css$/.test(file)).map(file => (
      <style
        key={file}
        data-href={`${assetPrefix}/_next/${file}`}
        dangerouslySetInnerHTML={{
          __html: readFileSync(join(process.cwd(), '.build', file), 'utf-8'),
        }}
      />
    ));
  }
}

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en" prefix="og: http://ogp.me/ns#">
        <InlineStylesHead />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument