# MongoDB Aggregation Query Bug: Incorrect Array Size Comparison

This repository demonstrates a common error in MongoDB aggregation queries when using the `$expr` and `$size` operators to compare the size of an array field.

## The Bug
The original code attempts to check if the size of an array field (`arrayField`) is greater than 5.  It incorrectly places the `$size` operator's result inside an object. This causes MongoDB to compare an object literal with a number, resulting in unexpected behavior or errors.

## Solution
The corrected code correctly compares the result of the `$size` operator directly with 5, using the `$gt` operator for a greater-than comparison.

## How to Reproduce
1. Clone this repository.
2. Create a MongoDB collection with documents containing an `arrayField`.
3. Run the `bug.js` file to see the incorrect behavior. 
4. Run the `bugSolution.js` file to see the corrected comparison.

This example highlights the importance of carefully structuring your expressions within MongoDB aggregation queries to achieve the intended result.