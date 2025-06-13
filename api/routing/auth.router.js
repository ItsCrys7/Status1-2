// routes/auth.router.js
import express from "express"
// import { Account } from "../models/authStore.js"
import { Accounts as Account } from "../db.js"


const router = express.Router()

// POST 
router.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" })
    }

    const existingUser = await Account.findOne({ where: { email } })
    if (existingUser) {
      return res.status(409).json({ error: "Email already registered" })
    }

    const newUser = await Account.create({ email, password })

    return res.status(201).json({ user: newUser })
  } catch (error) {
    console.error("Signup error:", error)
    return res.status(500).json({ error: "Internal server error" })
  }
})

export const authRouter = router

