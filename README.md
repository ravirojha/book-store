# Simple Cart App

## What you are already provided with
1. A React App, with the some most of the components and logic already built.
2. But its not functional yet, 
3. For instance:  we have a service built that you can use to fetch books, but its not implemented yet.

## What features implementation are we looking for.
1. As soon as app is loaded, You should call the fetchBooks method inside book-service and show the list of books using Book Component


2. The fetchBooks will return data with a delay of 2-3 seconds. You should show the spinnng on the UI till the data is being fetched


3. Fix book component's features like 
    -  `+`  & `-` icon is not working. Implement that so that + would increase the count of books and - will decrease the count of books
    -  Disable the + and - button based on if the current quantity has reached the totalQuantity limit or 0
    - Display the total amount in the book component based on how many book you have added


4. Cart Component should properly render the fields as per the UI.
   - Cart should show the total number of all the books that you have added
   - Cart should show the total amount of all the books that you have added 
   - Apply Discount value of 10% on total amount if total books to be ordered is more than 10 or total amount is more than 1000


5. Fix the filter component so that
   - When applying the min price, max price , min quantity, fetchBooks should be called with the above filters


6. Fix the load more button  
   - Fetch books will take page number starting from 1
   - Load more button should be visible and should load additional books by incrementing the page number
   - Load more button should not be visible when there are no more books to fetch


7. Spinner should be shown every time the fetchBooks service is being called