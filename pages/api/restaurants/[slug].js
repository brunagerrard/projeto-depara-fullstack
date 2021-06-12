/** @format */

import connectToDatabase from '../../../utils/dbconnect'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { slug } = req.query
    const { db } = await connectToDatabase()
    if (!slug) {
      res.status(400).json({ err: 'Missing ID property on request' })
      return
    }

    const result = await db.collection('restaurantes').findOne({ slug })

    res.status(200).json(result)
  } else {
    res
      .status(400)
      .json({ error: 'Only a GET request is allowed for this action.' })
  }
}
