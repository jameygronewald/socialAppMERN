const express = require('express');

const app = express();

app.get('/api/running', (req, res) => res.json({ success: true }));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Express server running on http://localhost:${PORT}`);
});
