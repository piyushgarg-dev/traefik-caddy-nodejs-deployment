import express from 'express';

const app = express();
const PORT = process.env.PORT ?? 8080;

app.get('/', (req, res) => {
  return res.json({ message: 'Hello from the server v2' });
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
