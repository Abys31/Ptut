import express from 'express'
import cors from 'cors'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = 3001
const QUESTIONS_FILE = path.join(__dirname, 'questions.json')

app.use(cors())
app.use(express.json())

// Ensure questions file exists
if (!fs.existsSync(QUESTIONS_FILE)) {
    fs.writeFileSync(QUESTIONS_FILE, JSON.stringify([], null, 2))
}

// GET all questions
app.get('/api/questions', (_req, res) => {
    const data = JSON.parse(fs.readFileSync(QUESTIONS_FILE, 'utf-8'))
    res.json(data)
})

// POST a new question
app.post('/api/questions', (req, res) => {
    const { question } = req.body
    if (!question || !question.trim()) {
        return res.status(400).json({ error: 'La question est requise.' })
    }

    const data = JSON.parse(fs.readFileSync(QUESTIONS_FILE, 'utf-8'))
    const newQuestion = {
        id: Date.now(),
        question: question.trim(),
        createdAt: new Date().toISOString()
    }
    data.push(newQuestion)
    fs.writeFileSync(QUESTIONS_FILE, JSON.stringify(data, null, 2))

    res.status(201).json(newQuestion)
})

app.listen(PORT, () => {
    console.log(`✅ Backend CapitNF1 running on http://localhost:${PORT}`)
})
