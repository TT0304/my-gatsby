---
title: "How to Serve Gatsby Blog Posts at a Subdirectory"
date: "2020-04-09"
category: "web development"
titledImage:
  {
    path: "abstract-light-background.jpg",
    credit: '<span>Photo by <a href="https://unsplash.com/@christopher__burns?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Christopher Burns</a> on <a href="https://unsplash.com/s/photos/abstract?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>',
  }
description: "Learn how to programmatically serve Gatsby blog posts at a subdirectory so that whenever you want to change the subdirectory name, you only need to change it once."
---

Not all content on your website should be served at the root directory. Many websites serve them at a subdirectory, like `/journal`, `/insight`, `/blog` etc.

This is purely a matter of preference, but I think it helps a bit with user experience. When a user sees a blog post with a url ending in `/journal/how-to-build-gatsby-site`, it signifies to them that the web page at `/journal` will contain a list of all your blog posts to date.

Please note that the url above is just a slug, i.e. a human-friendly link. All of your content is still hosted at the root directory. If you want to host your site at a path other than the root directory, similar to a Github page at `example.github.io/gatsby`, you will need to configure `path-prefix` in the Gatsby config file.

Without further ado, let's get started.

The process is quite similar to my previous tutorial for creating pages programmatically in Gatsby, but we'll need to do some extra work.

1. Create path for each page.

```js
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, getNode, actions }) => {
  // if the node type is MarkdownRemark, create the slug.
  // basePath is the folder where the Markdown files are stored
  if (node.internal.type === "MarkdownRemark") {
    const { createNodeField } = actions;
    const slug = createFilePath({ node, getNode, basePath: "markdown" });
    createNodeField({
      node,
      name: "link",
      value: `/journal${slug}`,
      // value: slug,
    });
    createNodeField({
      node,
      name: "slug",
      value: slug,
    });
  }
};
```

We call the `createNodeField` function a second time to add a `link` node field, in addition to the `slug` field. I see no reason to mess with the existing slug, because a slug should be three to five-word long. I want to name the new node `path` but that is a reserved name in Gatsby.

This `link` node will take a value of `/journal${slug}`. You can replace `journal` with whatever subdirectory you like. This is just a virtual path, and the subdirectory doesn't have to exist on your file system.

2. Create pages served at the corresponding path

In this step, we are querying the both `link` and `slug` field.

```js
exports.createPages = async ({ graphql, actions }) => {
  // Extract an action called createPage
  const { createPage } = actions;
  // this action returns a promise
  // query a list of all Markdown slugs in this site
  const result = await graphql(`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            id
            fields {
              link
            }
          }
        }
      }
    }
  `);
};
```

3. Mapping the results to the right page
   Once we've gotten the result, we need to map it the pages as followed:

```js
result.data.allMarkdownRemark.edges.forEach(({ node }) => {
  createPage({
    path: node.fields.link,
    component: path.resolve("./src/templates/post.js"),
    context: {
      link: node.fields.link,
      slug: node.fields.slug,
    },
  });
});
```

I still query the `slug` field because I want to pass it as context data to the post template. In the template, I will filter the post by slug field. This filter will get one, and only one Markdown node out of the bunch whose slug value is equal to whatever is in the slug field from `allMarkdownRemark`.

In short, the `path` node is purely for presentation, while the `slug` node is useful for querying, because no two posts should share the same slug value.

4. Create the template for each page
   In the previous step, we matched each Markdown post to a template, but it doesn't exist yet. Let's create one.

```js
import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Title from "../components/title";
import styles from "./post.module.scss";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div className={styles.container}>
        <Title text={post.frontmatter.title}></Title>
        <div
          style={{
            width: "100%",
            height: "200px",
            backgroundColor: "#fafafa",
            backgroundImage:
              "Url(https://source.unsplash.com/960x200/?" +
              post.frontmatter.category +
              ")",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            marginBottom: "30px",
          }}
        ></div>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </Layout>
  );
};
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        category
      }
    }
  }
`;
```

You can modify the post templates whatever you like.

Once you restart the Gatsby, you should see each post served at the `link` that you have created in the first step.
