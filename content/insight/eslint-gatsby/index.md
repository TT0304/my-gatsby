---
title: "How to configure Eslint in Gatsby projects"
description: "Because Javascript linting plugins are deprecated faster that I can recall what a closure is, and piecing together outdated documentation to update your Eslint configs is not fun."
featuredImage:
  path: "fibre-closeup.jpeg"
  credit: 'Photo by <a href="https://unsplash.com/@botanicalnature?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">gryffyn m</a> on <a href="https://unsplash.com/s/photos/fibre?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
date: 2021-06-14
category: "web development"
tags:
  - eslint
  - gatsby
---

The other day, I was grinding away at my Gatsby project until I had a painful epiphany: “I don't want strings to be wrapped inside double quotes”.

The solution, of course, is to enable EsLint. Gatsby starters supports Eslint setup out of the box, so I thought it also covers my small requirement. After all, it always diligently notifies me when I have unused vars.

But that's not the case. There's nothing in the EsLint config Gatsby ships with that dictates how string quotes should be handled.

The good thing is there's so much things you can configure and extend in Gatsby to suit your need. So here's how to do it, step by step.

## Where is the EsLint config file in Gatsby starters

Gatsby starters make it so easy to get up and running quickly with a serviceable website without spending hours on tooling. However, the downside is I start to take things for granted and forget how set up EsLint for my own sake.

There is no eslint file in Gatsby starters, but there is a barebone EsLint loader. While you are running Gatsby, open the terminal window and you should see feedbacks for code improvement from that loader.

If you add a custom Eslint config file to your Gatsby project, settings from that file will override the built-in EsLint loader.

## Add a custom EsLint config file

At the root of your project directory, create a `.eslintrc.js` file. You can use JSON or YAML files, but I keep forgetting Eslint rules so I prefer the Javascript extension so that I can add comments explaining certain decisions.

Add the following code snippet to extend what's already in EsLint loader.

```js
module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: `react-app`,
}
```

## Specify a custom EsLint parser

Now, if you switch to the terminal window, you'll see this warning: 

“Failed to load  babel-eslint declared in .eslintc”

That's because Gatsby uses Babel under the hood for transpiling Javascript codes for older browsers. Then the EsLint loader specifies babel-eslint as the parser that allows EsLint to run on those transformed codes. But now our new EsLint config file has taken precedence over the built-in Eslint loader and it can't load babel-eslint because we haven't installed it.

This means we need to install babel-eslint. However, when you visit the repo for this plugin, you'll see a notification that it has been deprecated and moved to @babel/eslint.

So install this new plugin.

```shelll
npm i -D @babel/eslint-parser
```

In the EsLint config file, specify this plugin as the parser.

```js
module.exports = {
	// ...
	parser: "@babel/eslint-parser"
}
```

Now, you get another problem: “No Babel config file detected for .../eslintrc.js. Either disable config file or configure Babel blah blah blah.”

So, which way to go? Gatsby starters do have a Babel config file, but it has been abstracted away, and the EsLint config can't find it.

To fix this, modify the `parseOptions` key:

```js
module.exports = {
	// ...
	parser: "@babel/eslint-parser",
	parserOptions: {
		requireConfigFile: false
	}
}
```

## Install support plugins

Checking the terminal output again, you get yet another error:

“Support for the experimental syntax 'jsx' isn't currently enabled. Add @babel/preset-react to the 'presets' section of your Babel config to enable transformation.”

Thankfully, the warning this time is helpful and you know what you need to install.

```shell
npm i -D @babel/preset-react
```

Finally, you can add any formatting rules you like to your EsLint config. Then run `lint` command, or simply let VsCode autoformat your codes on save and say goodbye to the grunt work.




