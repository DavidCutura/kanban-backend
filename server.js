const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('your-mongo-atlas-connection-string', { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', (req, res) => res.send('Kanban API'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
