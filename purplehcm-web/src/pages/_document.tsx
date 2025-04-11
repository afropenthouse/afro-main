import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Purple HCM</title>
        <meta
          name="description"
          content="Efficiently manage employees, payroll, and benefits with our intuitive HR web app. Simplify HR tasks and boost productivity.I'm okay"
        />
        {/* <link rel="icon" href="/assets/favicon.ico" /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
