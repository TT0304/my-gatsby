---
title: "Four reasons to build a command line application"
description: "You will gain more than improving your Node.js, Go, or Python skill. Promise."
featuredImage:
  path: "command-line.jpeg"
  credit: 'Photo by <a href="https://unsplash.com/@_imkiran?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sai Kiran Anagani</a> on <a href="https://unsplash.com/s/photos/linux?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  '
date: 2021-05-30
category: "web development"
tags:
  - command line application
  - cli
  - node.js
---

The first time I see a course on Linkedin Learning about building a CLI app with Node.js, I thought: “What for”. I'm all for building and breaking things, but I don't lack ideas for things I'd like to build. If an app is useful and has wide application, I will have more motivation to continue if the process gets hard.

Meanwhile, a CLI app seems to be too niched for an earthling who only use the command line for version control like me.

That's what I believed in until I finished the course. Now, I can say that building a CLI app is a very rewarding activity and I can't wait to make get my first pull request to a CLI app like Gatsby, or Netlify accepted.

So here I am, helping you decide if it is really worth building a CLI app. But first, what is a CLI app?

## What is a command line application

A command line application is an app that you invoke from the command line. This type of application also goes by the name CLI, short for Command Line Interface.

Command line applications are at the heart of Unix philosophy.

> Do one thing, and do it well.

The reach of a CLI can be near or far. The command you run may just do its work directly on the computer, for example a web bundler like Webpack.

Other CLIs may reach out to a remote repository like Git.

The most interesting and useful CLIs from my experience is those that reach out to a third-party APIs or servers over the internet.

Of course, a CLI may do some combinations of all three.

## Reasons to build a CLI

### A CLI app aids a developer's productivity

You may not realize it, but you've probably used a CLI app. There's one for every facet of a developer workflow:

- Git for version control
- Curl for making Http request. Okay, I don't use this tool frequently, but many tutorials for API use them, and that's how I got semi-proficient in using Curl.
- Webpack for bundling
- Gatsby or Jekyll for building static websites
- Surge or Netlify for deploying Html web pages
- Cloud providers like AWS, Azure provide CLIs for interacting with their infrastructure.

And there are CLIs for non-development like [Todist CLI](https://github.com/sachaos/todoist), of which I'm a big fan, [Imagemagick](https://https://imagemagick.org/script/command-line-tools.php) for image manipulation in the command line (yep, that's a thing) or [Homebrew](https://brew.sh).

All other things being equal, using a CLI is usually faster than a browser-based app.

If there's a routine task that you perform every day, it's time to check if there's already a solution that makes it faster and repeatable. You will find that a lot of those solutions come in the form of a CLI.

### A CLI can be used to integrate two systems together

For example, you may want to post errors from your build server to a messaging platform like Slack. Having a command to post messages to your chat program would be a great way to integrate those systems together.

### You may be making the next Webpack

Who knows, possibilities expand when you get down and build things. You will start to see ideas, opportunities for improvement that you can't see just by reading and watching. Building even the most simple, basic CLI will equip you to turn those opportunities into realities.

### Improve a programming language

I don't know why I get this idea, but I used to think that a CLI is synonymous with a desktop app, and it can only be built with a platform-specific language like Swift for MacOs or C++ for Windows.

That's not true. A CLi can be built with Node.js, Ruby, Python, Rust and so many other languages.

You write your program in any of those languages, then turn it into an executable command that can be run from anywhere in the filesystem. How you do that is dependent on the language, but from my experience it's the easiest part of building a CLI.

This means all that is left to you is to go build a CLI now.

If you don't have any idea, how about a tool that lets you post to [dev.to](https://dev.to), [Medium](https://medium.com) or any of your favorite blogging platforms from the comfort of the command line, without ever opening the browser? Context switching for the win.
