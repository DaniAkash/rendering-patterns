import { data } from '@/constants/data'
import type { NextApiResponse, NextApiRequest } from 'next'

type Data = string[]

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(data)
}
