# Simple Cart App

## What you are already provided with
1. A React App, with the some most of the components and logic already built.
2. But its not functional yet, 
3. For instance:  we have a service built that you can use to fetch books, but its not implemented yet.

## What features implementation are we looking for.
1. Fetch books using the `book-service.ts`.
2. Render books on the UI *we already have component for this.*
3. Fix book component's features like 
	-  `+`  & `-` icon is not working.
	-  also the above buttons should be disabled depending on the `totalQuantity` and how many you already have on the cart.
	- display the total amount for each book
4. Footer should properly render the fields as per the UI.
	- 10% discount will be applied only the total price the cart items is more than `1000` INR
5. Fix the `filter` and `load-more` implementation.
	> **hide** load-more icon if you don't have any more items to fetch.
6.  Display the spinner while we are fetching books appropriately. 