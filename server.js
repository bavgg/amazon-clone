import express from 'express';

import { fileURLToPath } from 'url';
import path from 'path';

const app = express();

const PORT = '8000';

const pathed = fileURLToPath(import.meta.url);

const dir = path.dirname(pathed);

const staticDir = path.join(dir, 'public');

app.use(express.static(staticDir));

app.get('/', (req, res) => {
    res.json({ test: "test"});
})

app.listen(PORT, () => {
    console.log('Server is running on port: ', PORT);
})