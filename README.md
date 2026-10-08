# LearnHub Training Management System

## Project Overview

This TypeScript project demonstrates two existing linear data structures and two new learning features:

- A LIFO stack for recently viewed courses.
- A FIFO queue for learner doubts.
- Binary search for trainees in an array sorted by `traineeId`.
- A learning-path tree displayed with preorder traversal and grouped reporting.

## Bugs Identified

1. `RecentlyViewedCourses.pop()` declared `string`, although `Array.pop()` can return `undefined` when the stack is empty.
2. `DoubtQueue.dequeue()` declared `string`, although `Array.shift()` can return `undefined` when the queue is empty.
3. `traineeId` was stored as a string, so `traineeId + 10` performed string concatenation instead of numeric addition.

## Fixes Applied

- Changed both collection-removal methods to return `string | undefined`.
- Used explicit empty-result handling when displaying stack and queue values.
- Kept trainee IDs numeric and used the numeric type in binary search.

The detailed analysis is in `BugAnalysisReport.docx`.

## Features Implemented

- `searchTraineeById(trainees, traineeId)` uses iterative binary search and returns `Trainee | null`.
- `createLearningPathTree()` creates the Programming, Frontend, and Backend hierarchy.
- `displayLearningPath(root)` performs preorder traversal.
- `generateLearningPathReport(root)` recursively lists courses under each section.

## How To Execute

From this directory, run:

```powershell
npx --yes tsx .\training-management-system.ts
```

## Sample Output

```text
Current Course: JAVASCRIPT
Current Doubt: Angular Routing
Binary Search:
Found: {"traineeId":103,"name":"Arun"}
Not found: null
Learning Path Traversal:
Programming
Frontend
HTML
CSS
JavaScript
TypeScript
Angular
Backend
Node.js
Express.js
Learning Path Report:
Frontend Courses
HTML
CSS
JavaScript
TypeScript
Angular
Backend Courses
Node.js
Express.js
```
