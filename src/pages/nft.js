const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3000;

// Dummy database to store token information
let tokens = [];

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Middleware for input validation
function validateTokenInput(req, res, next) {
    const { userWalletAddress, organizerAddress, tokenId, description } = req.body;

    if (!userWalletAddress || !organizerAddress || !tokenId || !description) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    // Additional validation logic can be added here

    next();
}

// Route to mint a new token
app.post('/mint-token', validateTokenInput, (req, res) => {
    const { userWalletAddress, organizerAddress, tokenId, description } = req.body;

    // Generate a unique token ID
    const tokenID = uuidv4();

    // Create a new token object
    const newToken = {
        id: tokenID,
        userWalletAddress,
        organizerAddress,
        tokenId,
        description
    };

    // Add the new token to the database
    tokens.push(newToken);

    // Return the newly minted token
    res.status(201).json(newToken);
});

// Route to get all tokens
app.get('/tokens', (req, res) => {
    res.json(tokens);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});