
```markdown
# Fam Chatbot: A Simple Node.js Chatbot

Fam Chatbot is a simple chatbot built with Node.js, Express, and MongoDB. It responds to user input based on a custom dataset stored in MongoDB.

**Features:**

* Responds to user questions and messages
* Customizable data set for personalized interactions
* Easy to install and run

**Prerequisites:**

* Node.js 16+ and npm installed
* MongoDB 4.4+ installed and running

**Installation:**

1. Clone the repository:

```bash
git clone https://github.com/divyanshu2003singh/fam-bot.git
```

2. Navigate to the project directory and install dependencies:

```bash
cd fam-bot
npm install
```

3. Start the server:

```bash
node app.js


The server will be running at http://localhost:4000 by default.

**Usage:**

1. Populate the MongoDB database with your custom dataset. Update the `initialData` array in `app.js` to include your questions and answers.
2. Use Postman or any API testing tool to interact with the chatbot endpoint:

URL: http://localhost:4000/chat
Method: POST
Body: JSON format with a message field.

Example request:

json
{
  "message": "What is your favorite food?"
}
```

Example response:

```json
{
  "message": "My favorite food is pizza! What's yours?"
}


**Customization:**

Feel free to customize the chatbot's behavior by updating the dataset in MongoDB. Add more questions and answers with different response styles to make Fam Chatbot your own!

**Contributing:**

We welcome contributions to Fam Chatbot! If you have suggestions, found a bug, or want to add new features, please open an issue or submit a pull request. See the CONTRIBUTING.md file for details.


