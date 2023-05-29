import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { signIn, signOut, useSession, getProviders } from "/next-auth/react"

const Nav = () => {
  return (
    <div className="w-full flex-row justify-between">
<img src="/assets/images/logo" alt="logo" />
    </div>
  )
}

export default Nav