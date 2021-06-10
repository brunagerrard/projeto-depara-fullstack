/** @format */
import { getSession } from 'next-auth/client'
import connectToDatabase from '../../../utils/dbconnect'
import { ObjectId } from 'mongodb'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    //list order
    const { id } = req.query
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
