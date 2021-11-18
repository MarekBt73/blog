/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { StyleImgDiv, StyleHedInfo} from "./bio.styles"


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
      <StyleImgDiv>
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/MB-MODERN.jpg"
        alt="MB-MODERN" 
        width={100}
        
        
        />
        
      </StyleImgDiv>
        <StyleHedInfo>
           {author?.name && (
           
           <div>
            <div className='span-top-page'>
             <strong>{author.name}</strong> {/* {author?.  summary || null} */}
            </div>
          {/* <a href={`https://twitter.com/${social?.twitter || ``}`}> */}
         <div className='span-top-page-two' >
          <a href={` https://www.linkedin.com/in/${social?.linkedin || ``}`}>
            Poznajmy się na LikedIn
          </a>
          </div>
          </div>
         
          )}
      </StyleHedInfo>
    </div>
  )
}

export default Bio
