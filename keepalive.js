const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Bot is running 24/7 🚀'));
app.listen(process.env.PORT || 3000, () => {
  console.log('Web server running to keep bot alive');
});
