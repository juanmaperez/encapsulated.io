---
path: '/four-functions-for-arrays'
date: '2019-10-08T12:59:00+00:00'
title: "Four functions for working with arrays"
thumbnail: ./rocket.png
type: post
icon: ./../../../images/icons/javascript.png
category: 'javascript'
tags: ['javascript', "array", "pure functions", "functional programming"]
excerpt: "It's very common to front array of numbers when working with data in javascript, and many time we need to do different operations with them. Here are four functions that will help you with this task"
---

It's very common to face an array of numbers when working with data in javascript, and sometimes we need to do different operations with them. Here are four functions that will help you with this task.

Getting the max number, , the minimun number, the average and the sum of all the elements is one of the most commons things in javascript.

## Getting the max number

The first function is returning the max number into an array of numbers.

```js

    const list = [10, 2, 15, 3, 20]

    const getHigher = arr => Math.max(...arr)

    getHigher(list)  // 20

```
## Getting the min number

In the same way we did before, we created an arrow function which returns the Math function min invoked while we are passing to it the spread array. 

```js

   const list = [10, 2, 15, 3, 20]

    const getLower = arr => Math.min(...arr)

    getLower(list)  // 2

```

## Getting the total addition

For getting this value we could create an accumulator out of the function and use a forEach for passing by every value and add it to the accumulator, but this method modifies a value out of the scope, and it doesn't match with the concept of pure functions. Instead of using this, we are going to use the reduce method which has the accumulator by itself and it's returned as final value.  

```js

   const list = [10, 2, 15, 3, 20]

    const getTotal = arr => arr.reduce((acc, number) => acc + number, 0)

    getTotal(list)  // 50

```

## Getting the average

For getting the average we can use the same function than in the example before but we have to split the total value by the total number of elements in the array.  

```js

   const list = [10, 2, 15, 3, 20]

    const getAverage = arr => arr.reduce((acc, number) => acc + number, 0)/arr.length

    getAverage(list)  // 10

```

This are really clean and helpful methods that for sure you'll use some day with plain number or also with objects based in some property of them.