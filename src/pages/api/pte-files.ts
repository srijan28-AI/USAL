import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const pteDir = path.join(process.cwd(), 'public/pte')
  const files = fs.readdirSync(pteDir)

  res.status(200).json({ files })
}