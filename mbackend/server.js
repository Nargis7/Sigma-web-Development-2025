import express from 'express';
const app = express();

// app.get('/', (req, res) => {
//   res.send('Nargis Perween');
// });

app.get('/api/jokes', (req, res) => {
  const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why don't skeletons fight each other? They don't have the guts!",
    "What do you call cheese that isn't yours? Nacho cheese!",
    "Why did the bicycle fall over? Because it was two-tired!"
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});