
![Screen Shot 2024-02-01 at 9 55 33 AM](https://media.git.generalassemb.ly/user/41550/files/70a3757a-c110-43c9-8ad1-c2805c5f01de)

# DOM Events - Lab


## DOTS: The Game - Intro

This lab provides the opportunity to practice using DOM Manipulation and DOM Event Listeners.

## Setup and Instructions

1. Fork and clone this repository.
2. All starter code is available in [`lib/`](lib/).
3. There are 3 levels. Please complete each level in its respective file. (i.e., Level 1 code will go in [`level-one.js`](lib/level-one.js), etc.)
4. Fulfill the listed requirements.


## Exercise Requirements

Dots is an interactive game with up to 3 levels. In each level, the user has to
click a moving dot until they reach a certain score, at which point they can
move on to the next level.

Please commit after finishing each level.

## Level 1

For level 1, implement a single event listener to the `.js-dot` element. When
the user clicks on the dot, it should increment their score by 10 points. When
the user reaches 100 points, they've beat the level and can move on!

## Level 2

Level 2 has 3 moving dots that the user can click on to increment their score.
Implement a single click handler to listen for when a user clicks on one of the
dots and increment their score until they reach 100.

> You want to write only one event listener for all three dots!

## Level 3

Level 3 also has 3 moving dots but of different sizes! Each dot is therefore
worth a different amount of points. The number of points the user should get for
each dot is saved in side of a data attribute on the dot HTML elements. You
can access the data attribute of an element from the event object by looking at
the event target's `dataset` property. When the user clicks on a dot, increment
their score based on how many points that dot is worth until they reach 100.

## Tip:

When the score is greater than or equal to 100, the player has beat the level!
This part is mostly built out for you - all you need to do is add a `game-over`
class to the document body. If you don't remember how to do that - ask for
a hint!

## Deliverable

**This lab is a deliverable.** Please submit your pull request once completed.
