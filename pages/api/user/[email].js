/** @format */

import connectToDatabase from '../../../utils/dbconnect'

export default async (req, res) => {
  if (req.method === 'GET') {
    const { email } = req.query

    if (!email) {
      res.status(400).json({ error: 'Missing e-mail' })
      return
    }

    const { db } = await connectToDatabase()

    const response = await db.collection('users').findOne({ email })

    if (!response) {
      res.status(404).json({
        error: `User with e-mail ${email} doesn't exist in this database`,
      })
      return
    }

    res.status(200).json(response)
  } else if (req.method === 'POST') {
    const { email } = req.query
    const { name, address } = req.body

    if (!email) {
      res.status(400).json({ error: 'Missing e-mail' })
      return
    }

    const { db } = await connectToDatabase()

    const response = await db
      .collection('users')
      .updateOne({ email }, { $set: { name, address } })

    if (!response) {
      res.status(404).json({
        error: `User with e-mail ${email} doesn't exist in this database`,
      })
      return
    }

    res.status(200).json(response)
  } else {
    res.status(400).json({ error: 'Action not expected' })
  }
}
