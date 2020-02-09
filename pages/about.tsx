import * as React from "react";

import Layout from "../components/Layout";
import Link from "next/link";
import List from "../components/List";

const data = [
  { id: 1, name: "toBeTranslatedA" },
  { id: 2, name: "toBeTranslatedB" }
];

const AboutPage: React.FunctionComponent = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
      <List items={data} />
    </p>
  </Layout>
);

export default AboutPage;
