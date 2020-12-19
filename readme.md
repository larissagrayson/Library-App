**Library App**

**AUTHOR:**  Larissa Grayson  
**DATE:**  December 17, 2020


**DESCRIPTION:** The inspiration for this assignment came from *The Odin Project: JavaScript Web Development* [curriculum](https://www.theodinproject.com/courses/javascript/lessons/library).

**OBJECTIVE:** The purpose of this project was to build a simple library app, where a user can input each of their books and mark whether they've read them yet or not. It is built using HTML, CSS, and pure vanilla JavaScript.  The layout is achieved with a combination of CSS Grid and Flexbox.

The form to add new books to the library is built using a modal.  It is a simple form with only minimal HTML validation on the fields.  The book data is persisted using Local Storage so it will be available when reloading the page, but will disappear if you close the browser.

All books are implemented as objects and the HTML for them is built dynamically using JavaScript.  Therefore, in order to support toggling of the read/not read button and to allow books to be deleted, event bubbling is leveraged with an event listener attached to the closest HTML element that the books would be associated with (the bookshelf). 

**SKILLS DEMONSTRATED:**
* Closures
* Objects
* Modals
* Event Listeners
* Forms
* CSS Grid
* CSS Flexbox
* Document Object Model (DOM)
* Event Propogation & Bubbling
* Local Storage


 The working version of this app can be found [here] (#)