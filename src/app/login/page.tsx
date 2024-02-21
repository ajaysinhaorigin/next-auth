"use client"
import Link from "next/link"
import React, { useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  })
  const onLogin = async () => {
    console.log("ajaysinhaorigin")
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-center text-white text-2xl">Login</h1>
      <hr />
      <label htmlFor="email">email</label>
      <input
        type="text"
        id="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
        className="p-2 border text-black border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      />
      <label htmlFor="password">password</label>
      <input
        type="password"
        id="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
        className="p-2 border text-black border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      />
      <button
        onClick={onLogin}
        className="px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-center"
      >
        Login
      </button>
      <Link href="/signup">Visit Signup page</Link>
    </div>
  )
}
