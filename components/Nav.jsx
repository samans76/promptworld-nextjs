"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
// import { signIn, signOut, useSession, getProviders } from "/next-auth/react"

const Nav = () => {
  return (
    <div className="w-full flex flex-row justify-between">
      <div className="websiteInfo flex flex-row-reverse text-center">
        <Link className="text-black m-2" href="/">Prompt World</Link>
        <Image
          src={"/assets/images/logo.svg"}
          alt="logo"
          width={35}
          height={35}
        />
      </div>
      <div className="websiteInfo flex flex-row-reverse text-center">
<Link href="/profile"></Link>
      </div>
    </div>
  );
};

export default Nav;
