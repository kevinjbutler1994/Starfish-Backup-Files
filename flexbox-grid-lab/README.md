<img src="https://i.imgur.com/qsSi07H.png">

# Flexbox & CSS Grid - Lab

## Intro

Time for some practice laying out elements using Flexbox and CSS Grid!

This lab is a **DELIVERABLE**

## Setup and Instructions

1. Fork and clone this repository.
2. Create the `index.html` and `style.css` files.
3. Add a `script.js` file if you would like to add functionality (bonus)
4. Complete the following exercises in the files you created.

## Exercise

<img src="https://i.imgur.com/N4RdHqp.jpg">

- Choose either the vertical or horizontal "profile card" above to reproduce using HTML and CSS.

- Use a combination of Flexbox and CSS Grid to layout the individual elements as close as possible - it does not have to be perfect! You are not being graded on matching fonts exactly or duplicating every glyph, font, or image. The big idea here is that you get experience using CSS Grid/CSS Flexbox and responsive design.

### Hints

- You may want to start with a bit of CSS reset:

```css
  html {
    box-sizing: border-box
  }

  /* The Universal Selector */
  
  *, /* All elements*/
  *::before, /* All ::before pseudo-elements */
  *::after { /* All ::after pseudo-elements */
    /* height & width will now include border & padding by default
      but can be over-ridden as needed */
    box-sizing: inherit;
  }

  body {
    background-color: gray;
  /* Use a system font, if none are available use an available sans-sarif   font */
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    margin: 0;
  }
```
  
- **Think about how you're going to structure your HTML!**
- Elements can be made to appear circular by using `border-radius: 50%;`.
- Use any appropriate image you desire as the profile picture. Perhaps use [picsum.photos](https://picsum.photos/) for a fast solution?
- - For the rating scale with the stars, feel free to use this image tag:

	```html
	<img src="https://i.imgur.com/iUpkmhs.png">
	```
- Maybe use emojis in place of the stars/phone icon/message icon for simplicity. (IF you feel excessively bored, maybe use a free icon library like [Font Awesome](https://fontawesome.com/) instead )

### Bonus 
1. Create both vertical and horizontal versions.
2. Add JavaScript funcitonality

## Deliverable

**This lab is a deliverable.** Please submit your pull request once completed.
