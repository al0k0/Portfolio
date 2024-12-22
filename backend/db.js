const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb+srv://alok08996:011cOjJEtX1gdLd3@formdata.uo236.mongodb.net/formData', {
    
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// Schema and Model
const formSchema = new mongoose.Schema({
    name: String,
    email: String,
    mobile: String,
    subject: String,
    expertise: String,
});
const Form = mongoose.model('Form', formSchema);

// API Endpoint
app.post('/submit-form', async (req, res) => {
    try {
        const form = new Form(req.body); // Create new instance
        await form.save(); // Save to MongoDB
        res.json({ message: 'Form saved successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error saving data', error });
    }
});

// Start Server
app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));
