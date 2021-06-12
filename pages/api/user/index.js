/** @format */

import connectToDatabase from '../../../utils/dbconnect'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone } = req.body

    if (!name || !email || !phone) {
      res.status(400).json({ error: 'missing value(s).' })
      return
    }

    const { db } = await connectToDatabase()

    const result = await db
      .collection('users')
      .insertOne({ name, email, phone })

    res.status(200).json(result.ops[0])
  } else {
    res
      .status(400)
      .json({ error: 'Only a POST request is allowed for this action.' })
  }
}
