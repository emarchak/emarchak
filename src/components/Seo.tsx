
import React from "react"
import Helmet from "react-helmet"

type SEOProps = {
  title: string
  description?: string
  lang?: string
  meta?: {
    name: string,
    content: string,
  }[]
}

const SEO = ({ description = '', lang = 'en', meta = [], title }: SEOProps) => {
  const siteMetadata = {
    description: 'Erin has over a decade of experience with both server- and client-side web development, specializing in digital marketing. She\'s an Agile evangelist that encourages teams to allow their curiosity to drive them and is passionate about creating emotional connections with people through technology.',
    title: 'Erin Marchak | Web Developer | Team Lead',
    author: '@emarchak'
  }

  const metaDescription = description || siteMetadata.description

  // return <Helmet htmlAttributes={{}} />
  return (
    <Helmet
      htmlAttributes={{lang}}
      title={title}
      titleTemplate={`%s | ${siteMetadata?.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        ...meta
      ]}
    />
  )
}

export default SEO
