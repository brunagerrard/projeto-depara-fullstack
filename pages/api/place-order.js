/** @format */

import connectToDatabase from '../../utils/dbconnect'
import { ObjectId } from 'mongodb'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { db } = await connectToDatabase()

    const result = await db.collection('pedidos').insertOne(req.body)

    // await db.collection('restaurants').updateOne()

    res.status(200).json(result.ops[0])
  } else if (req.method === 'GET') {
    const { id } = req.body
    if (!id) {
      res.status(400).json({ err: 'Missing ID property on request' })
      return
    }

    const { db } = await connectToDatabase()
    const result = await db
      .collection('pedidos')
      .findOne({ _id: new ObjectId(id) })

    res.status(200).json(result)
  } else {
    res
      .status(400)
      .json({ error: 'Only a POST request is allowed for this action.' })
  }
}
