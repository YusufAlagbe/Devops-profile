import { Html, Head, Main, NextScript } from 'next/document'
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Yusuf Alagbe — Senior DevOps Engineer | 11+ Years Cloud, Kubernetes, Terraform, CI/CD" />
        <meta property="og:title" content="Yusuf Alagbe | Senior DevOps Engineer" />
        <meta property="og:description" content="Senior DevOps Engineer with 11+ years experience in cloud infrastructure, automation, and CI/CD." />
        <meta property="og:type" content="website" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
