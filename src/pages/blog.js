import React from "react"
import { graphql } from "gatsby"
import {MDXRenderer } from "gatsby-plugin-mdx"

function SinglePost ({post,body}) {
	return(
<article>
<h1>
{post.title}
</h1>
<p> {post.date} </p>
<h3>{post.description}</h3>
<br/>
<MDXRenderer>{body}</MDXRenderer>
<hr/>
</article>

		)
}

 function BlogPage({data}) {
	console.log(data)
	return (
		<>
		<p>"hey! this is the blog page!"</p> <br/>

		{
			data.allMdx.nodes.map((node) => <SinglePost post={node.frontmatter} body={node.body} /> ) 
		}

		</>
		)
}


export const query = graphql`
  {
    allMdx(sort: {order: ASC, fields: frontmatter___date}) {
      nodes {
        frontmatter {
          title
          date
          description
        }
        body
      }
    }
  }
    `

export default BlogPage;