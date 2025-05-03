import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const dirPath = path.join(process.cwd(), 'public/interview questions')
  try {
    const files = fs.readdirSync(dirPath)
    res.status(200).json({ files })
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch files' })
  }
}