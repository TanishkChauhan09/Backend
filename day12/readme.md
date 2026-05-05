DOM: Document object Model

The DOM is a way to represent a webpage so that programs(like Javascript) can interact with it.

A browser takes your HTML document and turns it into the DOM.

With the object model, Javascript gets all the power it needs to create a dynamic HTML:
1.) Javascript can change all the HTML elements in the page.
2.) Javascript can change all the CSS styles in the page
3.) Javascript can remove all the HTML attributes in the page
4.) Javascript can remove existing HTML elements and attributes
5.)JS can add new HTML element and attributes.
6.) JS can react to all existing HTML events in the page
7.)JS can create HTML events in the page

+++++++++++++++++++++++++++++++++++++++++++++++++++++++

to see document ke andar kya hai toh uske liye console.dir(document)
sirf document likhne se sirf html ki file dikhegi also hmm phle window ke andar jaakr wha se bhi document ko dekh skte hai


1: Accessing Element:


a: Accessing by ID:
   Method: document.getElementById(id)
   Description: Retrieves a single element with the specified id attribute.

b: Accessing by Class Name:
   Method: document.getElementsByClassName(className)
   Description: Returns a live HTMLCollection of all elements with the 
   specified class name.

c: Accessing by CSS Selectors:
   i: Single Element:
      Method: document.querySelector(selector)
      Description: Returns the first element matching the specified CSS 
      selector.
    
    ii: Multiple Elements:
        Method: document.querySelectorAll(selector)
        Description: Returns a static NodeList of all elements matching the 
        specified CSS selector.
    
d: Accessing by Tag Name
   Method: document.getElementsByTagName(tagName)
   Description: Returns a live HTMLCollection of all elements with the 
   specified tag name (e.g., div, p, a).

e: Accessing Using Relationships
   i: Parent Node:
   Method: element.parentNode or element.parentElement
   Description: Access the immediate parent of an element.

   ii: Child Nodes:
   Method: element.childNodes (includes text nodes) or element.children 
   (only element nodes)
   Description: Access all child nodes of an element.

   iii: First and Last Child:
   Methods: element.firstChild, element.lastChild, 
   element.firstElementChild, element.lastElementChild

   iV: Sibling Nodes:
   Methods: element.nextSibling, element.previousSibling
   Element Siblings: element.nextElementSibling, 
   element.previousElementSibling




1.innerHTML 
2.textContent
3.innerText 