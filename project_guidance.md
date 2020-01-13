You'll want to add features to your project, to match your design. Where to next?

Some things to consider:

To add nouns to your world, create models in rails

To show your nouns, you'll need:

A controller action to send the data
A fetch request to ask for the data
Some JavaScript code to handle DOM-rendering
To make your page respond to the user, you'll need event listeners

To keep your code clean, you should use JavaScript classes

To organize your code, you can use multiple JavaScript files (don't forget to add <script> tags for each one!)


----------------------------------------------------------------------------------------------------------------------------------


  You can visualize all the parts you of an app you need to build as a grid, with the features along the x axis (columns) and the different layers of the stack along the y axis.

|                    | View Location | Browse Locations | Edit Location | Add Review | Edit Review |
| ------------------ | ------------- | ---------------- | ------------- | ---------- | ----------- |
| Styling            |               |                  |               |            |             |
| View Logic         |               |                  |               |            |             |
| Data Fetching      |               |                  |               |            |             |
| Controller actions |               |                  |               |            |             |
| Seed Data          |               |                  |               |            |             |
| Models             |               |                  |               |            |             |
| Migrations         |               |                  |               |            |             |


The project process should look like:

    -Planning: Write down your ideas (use diagrams!)
    -Start by creating the frontend and backend directories
    -Build the R from CRUD for just one model, vertically! That means one migration, one model, one controller action, one fetch   call, and one DOM update. Add seed data and confirm that your code works by testing it visually.
    -Then, build the next CRUD action (maybe Create or Update), again building vertically.
    -Continue building features one by one, (vertically!)
    -Add feature by feature, not model by model or layer by layer.
    -Test each feature, add styles, and create seed data as you go (not all at once at the end)