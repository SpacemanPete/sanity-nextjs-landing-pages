import React from 'react'
import Document, {Html, Head, Main, NextScript} from 'next/document'
import client from '../client'

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return client.fetch('*[_id == "global-config"] {lang, googleAnalyticsUACode}[0]').then(({lang, googleAnalyticsUACode}) => {
      return {...initialProps, lang, googleAnalyticsUACode}
    })
  }

  render () {
    return (
      <Html lang={this.props.lang || 'en'}>
        <Head>
          <link rel="apple-touch-icon" sizes="57x57" href="static/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="static/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="static/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="static/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="static/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="static/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="static/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="static/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="static/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192"  href="static/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="static/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="static/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="static/favicon-16x16.png" />
          <link rel="manifest" href="static/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="static/ms-icon-144x144.png" />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${this.props.googleAnalyticsUACode}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${this.props.googleAnalyticsUACode}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
