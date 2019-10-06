---
path: '/intro-to-big-notation'
date: '2019-07-12T12:59:00+00:00'
title: "Intro to big notation"
thumbnail: ./big-o-notation-introduction.png
type: post
icon: ./../../../images/icons/javascript.png
category: 'javascript'
tags: ['javascript', "big o notation", "algorithms", "functional programming"]
excerpt: "There are many ways to reach a solution to solve a given problem in almost all life challenges and web development or coding won't be an exception."
---

There are many ways to reach a solution to solve a given problem in almost all life challenges and web development or coding won't be an exception. In fact, we can ask to different developers to write a function for doing a simple task and it's likely that we get different approaches.

All this approaches can work, but maybe one of them is the best one. Probably if we ask which is the best solution for that given problem we can get also different answers. Some developers will measure the code quality by its length or characters number, time to complete, or readability.

We will focus on how fast a functions is and for getting that information we can use counting operations. Less operations means that our code is more efficient. 

Here we have to examples for the same task that it's only add all numbers from 0 to n number. Being *n = 10* we will have something like this:
_0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10_
Both example makes the same task in different ways.

```js
function addUpToN(n) {
    let total = 0;
    for (i = 0; i <= n; i++){
        total += n
    }
    return total;
}

function addUpToX(x) {
    return n * (n + 1) / 2;
}
```

The first example makes an operation every time it pass by the loop what means at least 10 operations without counting assignation and the loop counter increasing and many more. Let's say at least 20 operations against the only three operations in the second one. 

The first example will increase if the n number increases as well, being exponential the number of operations while in the second example it will remain the same number of operations.

## Big O notation

Big notation is all about this behaviour, it allows us to talk formally about how the runtime of an algorithm grows as the inputs grow, this is the *Time complexity* of and algorithm.

We say that an algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant times f(n), as n increses.

- f(n) could be linear.
- f(n) could be quadratic.
- f(n) could be constant.
- f(n) could be something different.

We will not care about the constans, only the big picture of the function. For example in a function that makes 5 operations everytime a given number _n_ increases we only take in count that this is an O(n) instead what it's actually, O(5n).

In this way we can say that:

- O(2n)   => O(n) for linears functions.
- O(500)  => O(1) for constans.
- O(13n2) => O(n2) for quadratics.

As before we can say that smaller terms don't care neither:

- O(n + 50)  => O(n)

And it goes beyond, and we can say that according to a big picture and big quantities only cares the biggest one:

- O(n2 + 5n + 500) => O(n2) 

## Big O Shorthand

Here we have a little resume of how according to the operations in a functions, we can define it.

1. Arithmetic operations are constant.
2. Variable assignment is constant.
3. Accessing elements in an array(by index) or object(by key) is constant.
4. In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop.

When we take a look into a function which reveives a number we only have to care about the behaviour of a function when this number grows. As an example we can say:

```js
printUntilFive(n){
    console.log(n)
    while (n <= 5 ){
        n++;
        console.log(n)
    }
}

printNForever(n){
    while(n){
        console.log(n)
        n++
    }
}

```

_printUntilFive(n)_ is an 0(1) function because if n tends to infinity the result will be constant anyway. In the other hand, _printNForever(n)_ is an O(n) function and an infinite loop. 

## Space Complexity

Until now we have spoken about Time Complexity, it means how we can analyze the runtime of an algorithm as the size of the inputs increases. But we must care also about *Space Complexity* that it's how much additional memory do we need to allocate in order to run the in our algorithm.

When we say additional memory we are talking about auxiliary space complexity and that means whatever it's happening into the algorithm, not the fact that as an input n grows approching infinity the size on the input itself which is n is going to grow.

## Basic rules of Space Complexity

- Most privimitives (booleans, numbers, undefined, null) are constant space.
- String requires O(n) space (where n is the string length).
- Arrays and Objects are O(n).

Lets analyze a function to explain the memory consume by an algorithm:

```js

function sum (arr){
    let total = 0;
    for (let i = 0; i < arr.length; i++){
        total += arra[i]
    }
    return total;
}
```

 This function above is constant speaking roughtly about space complexity we have a number when we declare _total as 0_ and other constant when we declare _i = 0_ and it doesn't care all the additions because the space is already taken in the first assigment and it's the same as its value grows. 


```js
function double (arr){
    let newArray = [];
    for (let i = 0; i < arr.length; i++){
        newArray.push( 2 * arra[i])
    }
    return newArray;
}
```

Otherwise this function is linear O(n) because the new array created into the algorithm will grow proportionally to the size of the given array as an input. The other assignment are not significant as it was happening with the time complexity.