import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />),
    );
    
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    const { styleTags } = this.props;
    
    return (
      <html lang="en">
        <Head>
          <meta name="description" content="Hacker News API" />
          <meta name="keywords" content="hacker news api react nextjs" />
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
          {/* Chrome, Firefox OS and Opera  */}
          <meta name="theme-color" content="#DC3D24" />
          {/* Windows Phone  */}
          <meta name="msapplication-navbutton-color" content="#DC3D24" />
          {/* iOS Safari  */}
          <meta name="apple-mobile-web-app-status-bar-style" content="#DC3D24" />
          {styleTags}
          <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding:wght@400;700&display=swap" rel="stylesheet"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
