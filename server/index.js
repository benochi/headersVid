import express from 'express';
import cors from 'cors';
import multer from 'multer';

const app = express();
const PORT = 3050;
const upload = multer({ dest: 'uploads/' });


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/headers', (req, res) => {
  res.json({ headers: req.headers, method: req.method });
});


app.post('/api/headers', (req, res) => {
  res.json({ headers: req.headers, method: req.method, body: req.body });
});

app.patch('/api/headers', (req, res) => {
  res.json({ headers: req.headers, method: req.method, body: req.body });
});

app.delete('/api/headers', (req, res) => {
  res.json({ headers: req.headers, method: req.method });
});

app.post('/api/upload', upload.single('file'), (req, res) => {
  res.json({ headers: req.headers, method: req.method, file: req.file });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
