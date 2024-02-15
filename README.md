Recipe Sharing API

Group Members:

-Mark Ulrich
-Samuel Mazon
-Mark Paulo Larraquel
-Jarnal Sin Jornadal

Overview:

Purpose 
– The purpose of the Recipe Sharing API is to provide a platform where users can share their favorite recipes with others.
It aims to create a digital cookbook accessible to anyone, allowing users to search, create, update, and delete recipes as well as view details of individual recipes.
Features 
– Recipe Creation and Management: Users can create new recipes with titles, ingredients, cooking instructions, and optional tags or categories.
They can also edit and delete their own recipes.
-Recipe Browsing and Searching: Users can browse through a collection of recipes and search for specific recipes based on titles, ingredients, or tags.

Setup 
1.	Clone the repository from GitHub or download the source code.
2.	Install Node.js, and npm if not already installed on your system.
3.	Install MongoDB and ensure it is running locally on your machine.
4.	Navigate to the project directory and install dependencies using npm install.
5.	Start the server using nodemon if you have it installed globally.
6.	Use Postman or any other HTTP client to interact with the API endpoints.

Dependencies –Express, Nodemon,Mangoose,MongoDB,Postman

Instructions on how the API endpoints 
**API Endpoints**

1. **Create a new recipe**
   - **Method:** POST
   - **URL:** `/recipes`
   - **Description:** Create a new recipe by providing the required fields: title, ingredients, instructions, and tags.
   - **Request Body Example:**
     ```json
     {
       "title": "Spaghetti Carbonara",
       "ingredients": ["Spaghetti", "Bacon", "Eggs", "Parmesan Cheese", "Black Pepper"],
       "instructions": "Cook spaghetti according to package instructions. In a separate pan, fry bacon until crispy. In a bowl, whisk together eggs and grated Parmesan cheese. Drain cooked spaghetti and toss with bacon and egg mixture. Serve hot with freshly ground black pepper.",
       "tags": ["Dinner", "Italian"]
     }
     ```
   - **Response Example:**
     ```json
     {
       "_id": "611a5e498fd7b5ebf3fe47b2",
       "title": "Spaghetti Carbonara",
       "ingredients": ["Spaghetti", "Bacon", "Eggs", "Parmesan Cheese", "Black Pepper"],
       "instructions": "Cook spaghetti according to package instructions. In a separate pan, fry bacon until crispy. In a bowl, whisk together eggs and grated Parmesan cheese. Drain cooked spaghetti and toss with bacon and egg mixture. Serve hot with freshly ground black pepper.",
       "tags": ["Dinner", "Italian"],
       "__v": 0
     }
     ```

2. **Retrieve all recipes**
   - **Method:** GET
   - **URL:** `/recipes`
   - **Description:** Retrieve a list of all recipes available in the database.
   - **Response Example:**
     ```json
     [
       {
         "_id": "611a5e498fd7b5ebf3fe47b2",
         "title": "Spaghetti Carbonara",
         "ingredients": ["Spaghetti", "Bacon", "Eggs", "Parmesan Cheese", "Black Pepper"],
         "instructions": "Cook spaghetti according to package instructions. In a separate pan, fry bacon until crispy. In a bowl, whisk together eggs and grated Parmesan cheese. Drain cooked spaghetti and toss with bacon and egg mixture. Serve hot with freshly ground black pepper.",
         "tags": ["Dinner", "Italian"],
         "__v": 0
       },
       {
         "_id": "611a5e498fd7b5ebf3fe47b3",
         "title": "Chocolate Chip Cookies",
         "ingredients": ["Flour", "Sugar", "Butter", "Chocolate Chips", "Vanilla Extract"],
         "instructions": "Preheat oven to 350°F. In a bowl, cream together butter and sugar. Add flour and mix until combined. Fold in chocolate chips and drop spoonfuls of dough onto a baking sheet. Bake for 10-12 minutes.",
         "tags": ["Dessert", "Snack"],
         "__v": 0
       }
     ]
     ```

3. **Retrieve a recipe by ID**
   - **Method:** GET
   - **URL:** `/recipes/:id`
   - **Description:** Retrieve a specific recipe by its unique ID.
   - **Response Example:**
     ```json
     {
       "_id": "611a5e498fd7b5ebf3fe47b2",
       "title": "Spaghetti Carbonara",
       "ingredients": ["Spaghetti", "Bacon", "Eggs", "Parmesan Cheese", "Black Pepper"],
       "instructions": "Cook spaghetti according to package instructions. In a separate pan, fry bacon until crispy. In a bowl, whisk together eggs and grated Parmesan cheese. Drain cooked spaghetti and toss with bacon and egg mixture. Serve hot with freshly ground black pepper.",
       "tags": ["Dinner", "Italian"],
       "__v": 0
     }
     ```

4. **Update a recipe by ID**
   - **Method:** PUT
   - **URL:** `/recipes/:id`
   - **Description:** Update an existing recipe by providing its ID and the fields to be updated.
   - **Request Body Example:**
     ```json
     {
       "title": "Spaghetti Carbonara",
       "ingredients": ["Spaghetti", "Bacon", "Eggs", "Parmesan Cheese", "Black Pepper"],
       "instructions": "Cook spaghetti according to package instructions. In a separate pan, fry bacon until crispy. In a bowl, whisk together eggs and grated Parmesan cheese. Drain cooked spaghetti and toss with bacon and egg mixture. Serve hot with freshly ground black pepper.",
       "tags": ["Dinner", "Italian"]
     }
     ```
   - **Response Example:**
     ```json
     {
       "_id": "611a5e498fd7b5ebf3fe47b2",
       "title": "Spaghetti Carbonara",
       "ingredients": ["Spaghetti", "Bacon", "Eggs", "Parmesan Cheese", "Black Pepper"],
       "instructions": "Cook spaghetti according to package instructions. In a separate pan, fry bacon until crispy. In a bowl, whisk together eggs and grated Parmesan cheese. Drain cooked spaghetti and toss with bacon and egg mixture. Serve hot with freshly ground black pepper.",
       "tags": ["Dinner", "Italian"],
       "__v": 0
     }
     ```

5. **Delete a recipe by ID**
   - **Method:** DELETE
   - **URL:** `/recipes/:id`
   - **Description:** Delete a recipe by its unique ID.
   - **Response Example:**
     ```json
     {
       "message": "Recipe deleted successfully"
     }
     ```

---

These instructions provide guidance on how to interact with each endpoint of the Recipe Sharing API, including the required HTTP methods, URL structures, request/response formats, and example usage scenarios.
