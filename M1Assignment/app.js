// Import Express
import express from 'express';

// Import the dotenv module
import {} from 'dotenv/config';

// Create express app
const app = express();

// Create router
const router = express.Router();

// Set the 'public' folder as a static folder
app.use(express.static('public'));

// Get the '/' route and have it load 'index.html' from the public folder
router.route('/').get((req, res) => res.sendFile('index.html', {root: 'public'}));

// Middleware to use our router in express
app.use(router);

// Have the app listen on port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
