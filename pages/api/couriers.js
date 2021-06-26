/** @format */

import connectToDatabase from '../../utils/dbconnect'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, fee } = req.body

    if (!name || !email || !phone || !fee) {
      res.status(400).json({ error: 'missing value(s).' })
      return
    }

    const { db } = await connectToDatabase()

    const result = await db
      .collection('entregadores')
      .insertOne({ name, email, phone, fee })

    res.status(200).json(result.ops[0])
  } else {
    res
      .status(400)
      .json({ error: 'Only a POST request is allowed for this action.' })
  }
}
