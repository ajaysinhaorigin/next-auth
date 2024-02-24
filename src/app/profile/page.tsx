"use client"
import axios from "axios"
import Link from "next/link"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Profile() {
  const router = useRouter()
  const [data, setData] = useState("")

  const onLogout = async () => {
    try {
      await axios.get("/api/users/logout")
      toast.success("Logout successful")
      router.push("/login")
    } catch (error: any) {
      console.log(error.message)
      toast.error(error.message)
    }
  }

  const getUserDetails = async () => {
    const res = await axios.get("/api/users/me")
    console.log(res.data.data)
    setData(res.data.data._id)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <hr />
      <p>Profile page</p>
      <hr />
      <h2 className="rounded bg-green-500 p-3">
        {data === "" ? (
          "Nothing"
        ) : (
          <Link href={`/profile/${data}`}>{data}</Link>
        )}
      </h2>
      <button
        onClick={onLogout}
        className="bg-blue-500 hover:bg-blue-700 mt-4 text-white font-bold py-2 px-4 rounded"
      >
        Logout
      </button>
      <button
        onClick={getUserDetails}
        className="bg-green-800 hover:bg-blue-700 mt-4 text-white font-bold py-2 px-4 rounded"
      >
        Get User Details
      </button>
    </div>
  )
}
