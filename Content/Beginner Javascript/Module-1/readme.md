# The Basics

The course start by discussing the basics.

## 1. Tools

First lesson discusses the tools we need. which include

- Browser (Chrome, Firefox, ..etc)
- Node (which comes with npm)
- Terminal
- Code Editor (VS code is recommended)

## 2. Running JS

In this lesson we discuss the different methods to run javascript.
such as

- The console in the browser
- In `html` with a `script` tag
- in an external `.js` file that is referenced in html
- using node `node script.js`

It's recommended to add the script tag at the bottom of the `body` tag
one, for better performance, also to avoid the mistake of referencing a
tag before it's rendered which later results with a `undefined` or a `null`

## 3. Variables and Statements

In any programming language, we use variables to store data that we want to use or change and reference later on
it sorta like shot-term memory, you want to save this pice of info for later use.
Now in order to create a variable, the syntax is as follows:

_keyword_ variable_name [optional] = value; (the optional in this case is giving the variable a value)

lets take an example:
`var name = 'athoug';`

Now the above is one way of declaring a variable in JS, there are two another ways such as"
`let age = 300;`
`const cool = true;`

All these ways are right, but they have some differences based on:

- Scope: `var` is function scoped where as both `let` and `const` are block scoped
- Ability to update: both `var` and `let` allow you to update the values of the variable where as `const` from the name itself means constant as in it doesn't change

Sometimes it might be confusing to when use what, so Wes gave us some pointers

- use `const` by default
- but if you need to change a value of a variable, use `let`

_Naming Conventions_
There are a couple of conventions when it comes to giving your variables names.

- They shouldn't start with a capital unless they are a class
- should start with a letter [a-z] or _ or $
- if a variable is made up of two words, use camel-casing `iLovePizza` or upper camel-casing `ILovePizza` if using a class

## 4. Code Quality and Tooling

There are a couple of tools out there that help make us write better code, and format it elegantly.
These tools include:

- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)

Wes also provided a tool to help us set it up, the [documentation](https://github.com/wesbos/eslint-config-wesbos) is pretty helpful.

Other things I used is use a `.gitignore` file to [not commit the `node_module`](https://stackoverflow.com/questions/29820791/git-ignore-node-modules-folder-everywhere).
