import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const ieltsDir = path.join(process.cwd(), 'public/ielts')
  const files = fs.readdirSync(ieltsDir)

  // Exclude the missing file (IELTS Cambridge 6.pdf)
  const filteredFiles = files.filter((file) => file !== 'IELTS Cambridge 6.pdf')

  res.status(200).json({ files: filteredFiles })
}