# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @ArjayS/lotide`

**Require it:**

`const _ = require('@ArjayS/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertArraysEqual`: Function that compares two array values from actual versus expected and will print out either Assertion passed (for equal results) or Assertion failed (for not equal results). Will require the callback function eqArrays to compare the two arrays for having the same array length, and the same values for each of the the index.

- `assertEqual`: Function that Compares two values values from actual versus expected and will print out either Assertion passed (for equal results or Assertion failed (for not equal results))

- `eqArrays`: Function that compares the two arrays for having the same array length, and the same values for each of the the index if both condition are true will return true and if not it will return false.

- `headTest`: Function that retrieves the first element from the array.

- `middleTest`: Function that retrieves the middle elements of the array. If the array length is <=2 values in an array it will return an empty array, if the array length is >2 and is odd in count it will return the middle array with a single value, and if the array length is >2 and is even in count it will return the middle array with two values.

- `tailTest`: Function that retrieves the everything except the head (ie. first element) from the array.
