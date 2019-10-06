---
path: '/console-logs-without-breaking-apart-functions'
date: '2019-09-27T12:59:00+00:00'
title: "Don't break apart one line arrow functions when printing in the console"
thumbnail: ./prints.png
type: post
icon: ./../../../images/icons/reactjs.png
category: 'reactjs'
tags: ['javascript', "react", "pure functions", "functional programming"]
excerpt: "One of the most anoyying things when you are working in javascript is breaking apart into two lines an arrow function because you need to log in the console the values that you are receiving in your callback"
---

One of the most anoyying things when you are working in javascript is breaking apart into two lines an arrow function because you need to log in the console the values that you are receiving in a callback.

There are a few ways to solve this problem and make your prints in the console more efficient for debugging and save some time:

The first thing you can do is use the || operator. You can call your console log just at the begining of the arrow function and then add just behind and _||_ operator in between of the log and the function or whatever you were doing in that callback 

```js

    (users) => console.log(users) || { users }

```

Other way to do it is through a comma, you can return the values as you did before, only you need to wrap the console.log function and the value returned into parenthesis and separate both values by a comma, as you can see below. 

```js

    (users) => (console.log(users), { users })

```

This solution avoids to wrap all your clean code into brackets for creating the console log and the return keyword, and the later, after debug the problem that you got on that request restore the old code.

It's seem like a really dumb trick but You'll be glad to use it when thing get more complex and check values turns into a usual task.