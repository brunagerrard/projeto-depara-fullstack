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
  }
  if (req.method === 'POST') {
    //update order status
    const { id } = req.query
    if (!id) {
      res.status(400).json({ err: 'Missing ID property on request' })
      return
    }

    const { order_status } = req.body
    if (!order_status) {
      res.status(400).json({ err: 'Missing status update on request' })
      return
    }

    const { db } = await connectToDatabase()

    const result = await db
      .collection('users')
      .updateOne(
        { 'orders._id': ObjectId(id) },
        { $set: { 'orders.$[el].status': order_status } },
        { arrayFilters: [{ 'el._id': ObjectId(id) }] }
      )

    const updateRestaurant = await db
      .collection('restaurantes')
      .updateOne(
        { 'orders._id': ObjectId(id) },
        { $set: { 'orders.$[el].status': order_status } },
        { arrayFilters: [{ 'el._id': ObjectId(id) }] }
      )

    const updateOrder = await db
      .collection('pedidos')
      .updateOne({ _id: ObjectId(id) }, { $set: { status: order_status } })

    res.status(200).json(result)
  } else {
    res
      .status(400)
      .json({ error: 'Only a POST request is allowed for this action.' })
  }
}
