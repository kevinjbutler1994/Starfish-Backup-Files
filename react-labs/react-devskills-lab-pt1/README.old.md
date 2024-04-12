<img src="https://i.imgur.com/pg98OTd.png">

# React Dev Skills Lab - Part 1

## Intro

Now that you've learned a bit about components in React, let's practice defining and rendering a few more.

##### This lab, combined with Parts 2, 3 & 4 is a Deliverable

## Setup and Instructions

The goal of the lab is to put in a rep doing everything that you did during the _React Intro & Components_ lesson.

- `fork` and `clone` this repository
- `cd` into the cloned repository
- Create a react app using the command `npx create-react-app .` (the `.` is important!)
- Complete the following exercies. You will contimue to add to this file as we assign parts 2-4

## Exercises -- PART 1


Code the app so that it renders the following UI:

<img src="https://i.imgur.com/a1YSt4R.png">

Using the following component hierarchy:

<img src="https://i.imgur.com/Z7yRF8b.png">

### Legend

- React Elements are outlined in blue.
- The components are as follows:

  | Component | Renders |
  |---|---|
  | `<App>` | `<h1>`<br>`<SkillList>`<br>`<hr>`<br>`<NewSkillForm>` |
  | `<SkillList>` | `<ul>`<br>`<SkillListItem>` x 3 |
  | `<SkillListItem>` | `<li>` with "SkillListItem" as its content |
  | `<NewSkillForm>` | `<form>` |
  | `<form>` in `<NewSkillForm>`  | `<label>` with "Skill" and `<input>` as its content<br>`<label>` with "Level" and `<select>` as its content<br>`<button>` with "ADD SKILL" as its content |
  | `<select>` in<br>`<form>` above | `<option>` x 5 with content of "1" thru "5"` |

### This lab combined with Parts 2, 3 & 4 is a deliverable
