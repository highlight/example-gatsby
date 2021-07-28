import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { H } from "highlight.run"

import Layout from "../components/layout"
import Seo from "../components/seo"

H.init('pzg0y0d9', {
  environment: 'production',
  enableStrictPrivacy: false,
  debug: true,
});

const IndexPage = () => {
  React.useEffect(() => {
    H.identify("email@email.com", {id: "abcdefg", phone: "8675309"})
  }, [])

  return (<Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>);
}

export default IndexPage
