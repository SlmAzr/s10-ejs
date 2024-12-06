import express from'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
app.get('/api/vl/whisper', (req, res) => {
    res.json([])
});

app.get('/api/vl/whisper/:id', (req, res) => {
    const id= parseInt(req.params.id);
    res.json({id});
})

app.post('/api/vl/whisper', (req, res) => {
    res.status(201).json(req.body);
});

app.put('/api/vl/whisper/:id', (req, res) => {
    // const id= parseInt(req.params.id);
    // res.json({id});
    res.sendStatus(200);
})

app.delete('/api/vl/whisper/:id', (req, res) => {
    // const id= parseInt(req.params.id);
    // res.json({id});
    res.sendStatus(200);
})

export {app};