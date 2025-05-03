import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const greDir = path.join(process.cwd(), 'public/gre')
  const files = fs.readdirSync(greDir)

  res.status(200).json({ files })
}