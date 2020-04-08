---
title: "How to Create Pages Programmatically in Gatsby"
date: "2020-04-08"
keywords: "development"
tags: ["gatsby", "graphql", "api"]
---

When you start building a Gatsby website, you probably drop all your posts inside the `pages` folder. Since Gatsby is a static site generator, it automatically turns those component into a full blown web page.

Overtime, however, your blog may grow to hundreds of posts. Creating hundreds of React components is therefore unthinkable. That's when we need to think of a way to create pages programmatically in gatsby.

There are two Gatsby API features that we will utilize: `onCreateNode` event and `createNodeField` function.

The `onCreateNode` event is fired when a new node is created. But what is a node? It is just a data object, and the center of Gatsby's data system. All data in Gatsby is represented using the node data structure.

The `createNodeField` is a function that allows us to create additional fields on existing nodes created by other plugins. For example, we can use this function to add user-friendly slug to nodes created by the ``gatsby-transformer-remark` plugin.

We use the `gatsby-node.js` file to write the functionality needed to hook into Gatsby's build pipeline.
