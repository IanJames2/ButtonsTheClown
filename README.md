Mike Loblonski had aspirations to be an actor on a soap opera. He went to a local college and got a degree in Drama, and then headed to the West Coast to break into the business. His hopes were high as he got into several dozen auditions in his first few months on the scene.

While on an audition, he met a woman named Leslie Ross who talked about how she made some money in between her part-time parts on shows and commercials. She is Lollipop the Clown. She gets booked for kids' birthday parties and performs simple magic tricks and other silly antics to entertain the kids.

She says it pays enough to make ends meet when she's not working as an actor.

As the months went by and Mike wasn't getting any paying gigs as an actor, he thought of Leslie and did some research on how to do what she does. Turns out, the cost was low enough that he could pay for the wardrobe, makeup and some supplies with the remaining savings that he had.

So he pulled the trigger and bought everything he needed. He decided on calling himself Buttons. Also, after discussions with Leslie, they decided to work together.

He put an ad in the local paper looking for a software developer that could make him a web site that people could use to book their services.

Requirements
In your meeting with Mike, here's that information that he wants people to provide when they want to book him for a party.

Parent name
Child name
How many children attending the party
Address of the party
Date of reservation
Length of reservation in hours
When people request a reservation, he wants them all listed in chronological order - closest date first. He also wants the ability to delete requests.

Once the party is over, he wants the ability to say if he or Leslie filled the reservation.

Entity Relationship Diagram
Before you begin coding, create an ERD for the data and requirements that Mike and Leslie have for their application. When you're ready, review it with an instructor so that you can start coding.

Reserving a Clown
Setup
Create a directory structure that matches the Sink Repair service.
Create a database.json file in your api directory, and establish all of the resources needed as properties of the main object. Default value for each one should be an empty array.
Refer back to chapter 4 to get the command for starting json-server and ensure that you set up the structure correctly.
User Input
Build the HTML that contains input fields for all of the information that needs to be collected for a person to reserve a clown for a birthday party. Keep referring back to your ERD to make sure you have an input field for each property.

Next, create a function in the data access module that will POST a reservation state object to your API to be saved in permanent storage.

Then create the event listener that collects the user input, constructs a state object for the reservation, and then pass it to your function that you defined above as an argument. Verify that it works by looking in your database.json file as see if a new object is in your reservations resource collection.

Showing Reservations
Fetch Before Display
You should have created a function in the previous chapter which is responsible for fetching the state of reservations from the API. Update your main module to fetch the data before the HTML is generated and rendered to the browser.

Next, you will need a function to be exported from the data access module which is responsible for returning the application state for reservations. When you have that function written, create a module that will be responsible for generating a list of reservations.

Import the function into that new module and invoke it. Store the returned state into a variable. Then use the map() array method to generate the HTML structure needed to display the list of reservations.

Denied!
Sometimes Buttons and Lollipop have conflicting reservations, or are just unavailable during a requested time. Add a <button> next to each reservation with the word "Deny" as the text of the button. Make sure the id attribute of each button contains the primary key of the request.

Then add a click event listener that reacts to the delete button being clicked. Extract the primary key from the event.target.id using the .split("--") technique along with array destructuring.

Deleting Reservations
Create and export a function in the data access module that contains a fetch() call which performs a request to your API with the DELETE method. Make sure the function has a parameter defined so that other modules can specify the id of the reservation to be deleted.

Also remember that you can only delete single resources, so you will need the id value at the end of the URL for the DELETE request.

http://localhost:8080/resource/id