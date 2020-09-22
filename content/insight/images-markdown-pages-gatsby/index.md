---
title: "How to Render Images in Markdown Files to Gatsby Pages"
date: "2020-04-13"
featuredImage: "picture-frame.png"
category: "web development"
description: "Long lives Markdown. Learn how to render images from a Markdown file into a responsive HTML page on Gatsby."
---

The first time that I tried to output Markdown files to my Gatsby web pages, I was very surprised to see none of the images disappear. That's because the Markdown format doesn't come with image display out of the box. Rendering images in Markdown files to Gatsby pages is not obvious, so I'm going to help you navigate that in a few simple steps.

Part of what makes Wordpress so popular it makes inlining images blog posts so easy. If you have been around the internet since early 2000s as I was, you've probably come across blog posts with broken image links. This is often due to one of these two reasons:

- the images were loaded from third-party sources, over which the website author had no control. The third-party sources could take down the images anytime of the day, without prior notice.
- the images were referenced using relative path. Once a reorganization of file and directory took place, the file path would be broken.

With Wordpress, there's no such thing as broken image. You upload your images with one click, and they are sent to your web server. Once a visitor opens your blog post, Wordpress requests the image from the server.

In essence, you are in absolute control of your image directory. But it also means when you move away from Wordpress, you'll have to think of an efficient way to store and loads your images on demand.

## Render featured images with Frontmatter metadata

### Configuring for images and Markdown posts in the same directory

I can't remember where I learn this tip from, but I've always created a new folder for every new blog post, which contains the post content in an `index.md` file and all the related images.
