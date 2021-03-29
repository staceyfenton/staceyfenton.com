import Document, { Html, Head, Main, NextScript } from 'next/document'
import { readFileSync } from 'fs';
import { join } from 'path';

class InlineStylesHead extends Head {
  getCssLinks(files) {
    const { assetPrefix } = this.context;
    const cssFiles = files.allFiles.filter((f) => f.endsWith('.css'));
    console.log(cssFiles);
    if (!cssFiles || cssFiles.length === 0) return null;
    let cssStyleElements = [];
    cssFiles.forEach((file) => {
      cssStyleElements.push(
        <style
          key={file}
          data-href={`${assetPrefix}/_next/${encodeURI(file)}`}
          dangerouslySetInnerHTML={{
            __html: readFileSync(join(process.cwd(), '.next', file), 'utf-8'),
          }}
        />
      );
    });
    return cssStyleElements;
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