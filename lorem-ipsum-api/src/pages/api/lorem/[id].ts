import { data } from '@/constants/data'
import type { NextApiResponse, NextApiRequest } from 'next'

type Data = string[]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query
  if(id && typeof id === 'string') {
    // @ts-expect-error
    res.status(200).json(data?.[parseInt(id, 10)])
  }
  res.status(404)
}
