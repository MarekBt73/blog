/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/MB-MODERN.jpg"
        width={125}
        height={125}
        quality={100}
        alt="MB-MODERN"
      />
      {author?.name && (
        <p>
          Blog prowadzony przez  <strong>{author.name}</strong> {author?.summary || null}
          {` `}
          {/* <a href={`https://twitter.com/${social?.twitter || ``}`}> */}
         
          <a href={` https://www.linkedin.com/in/${social?.linkedin || ``}`}>
            Zpraszam na LikedIn
          </a>
        </p>
      )}
    </div>
  )
}

export default Bio
