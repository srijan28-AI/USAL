import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const duolingoDir = path.join(process.cwd(), 'public/duolingo')
  const files = fs.readdirSync(duolingoDir)

  res.status(200).json({ files })
}