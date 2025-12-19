const express = require('express');
const app = express();

// public folder ko website bana diya
app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Website running on port 3000');
});
