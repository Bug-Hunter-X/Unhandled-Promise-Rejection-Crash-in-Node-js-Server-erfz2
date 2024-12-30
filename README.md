# Unhandled Promise Rejection in Node.js Server

This repository demonstrates a common error in Node.js servers: unhandled promise rejections leading to crashes.  The `bug.js` file showcases the problematic code, while `bugSolution.js` provides a corrected version with robust error handling.

## Problem

Asynchronous operations, especially those using promises, require careful error handling.  Failure to catch and handle rejected promises can cause the entire Node.js process to crash unexpectedly.

## Solution

The solution involves using `.catch()` to handle potential errors within the asynchronous operation and implementing proper response handling to gracefully close the connection even on error.