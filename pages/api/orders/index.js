/** @format */
import { getSession } from 'next-auth/client'
import connectToDatabase from '../../../utils/dbconnect'
import { ObjectId } from 'mongodb'

export default async function handler(req, res) {
  //create order
  if (req.method === 'POST') {
    const session = await getSession({ req })

    if (!session) {
      res.status(401).json({ error: 'Not authenticated' })
      return
    }

    const { db } = await connectToDatabase()

    const result = await db.collection('pedidos').insertOne(req.body)

    const { restaurant, user } = req.body

    await db
      .collection('restaurantes')
      .updateOne(
        { name: restaurant.name },
        { $push: { orders: { $each: [req.body], $position: 0 } } }
      )

    await db
      .collection('users')
      .updateOne(
        { email: user.email },
        { $push: { orders: { $each: [req.body], $position: 0 } } }
      )

    res.status(200).json(result.ops[0])
  } else if (req.method === 'GET') {
    //list all
    // const session = await getSession({ req })

    // if (!session) {
    //   res.status(401).json({ error: 'Not authenticated' })
    //   return
    // }

    const { db } = await connectToDatabase()

    const result = await db.collection('pedidos').find().toArray()

    res.status(200).json(result)
  } else {
    res
      .status(400)
      .json({ error: 'Only a POST request is allowed for this action.' })
  }
}
