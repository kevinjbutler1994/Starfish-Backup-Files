![99 bottles](https://media.git.generalassemb.ly/user/41550/files/ab5b2e00-5238-4210-b6c3-9292cf1f1b87)


# 99 Bottles of Express Beer

Build an application that enables users to count down the numbers of bottles of
beer.

## Prerequisites

- Node
- Express

## Instructions

1. Fork and clone this repository.
1. Change into the new directory.
1. Fulfill the listed requirements.

You are required to turn in your submission by making a pull request on the
original repository. 

## Requirements

- When a users makes a request to the root route (`'/'`), they should get a JSON
    object back with `'99 bottles of beer on the wall'` and a link to a route
    to `/98`
- When a number is given in the url (i.e. `/:number_of_bottles`), users should
    get a JSON object back with:
    - `'<number> bottles of beer on the wall'` where `<number>` is the value of `:number_of_bottles` and
    - A link to the next route (i.e. `<number>` minus 1)
- If there are 0 bottles left, the user should get a JSON object back with:
  - `0 bottles of beer on the wall` and,
  - A link back to the top (i.e. 99 bottles of beer on the wall)

A few things to note:

- You should always return a JSON object
- The properties within your JSON object are up to you. One should be for the
    message (i.e. `'74 bottles of beer on the wall'`) and the other for the next
    route (i.e. `localhost:3000/73`)

## Bonus

See if you can figure out how to do all of this with a single route. You'll need
to research how to make parameters optional.
