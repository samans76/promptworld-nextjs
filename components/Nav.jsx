"use client";

import Link from "next/link";
import Image from "next/image";
import { Button, Spacer } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const router = useRouter();
  const [isToggledDown, setIsToggledDown] = useState(false);
  const [providers, setProviders] = useState(null);
  const isUserLoggedIn = true;

  useEffect(() => {
    const setTheProviders = async () => {
      const response = await getProviders();
      console.log(response);
      setProviders(response);
    };

    setTheProviders();
  }, []);

  const createProviderButtons = () => {
    if (!providers) return;

    const buttons = Object.values(providers).map((p) => (
      <Button
        key={p.name}
        bordered
        borderWeight="bold"
        size="md"
        color="warning"
        onClick={() => {
          signIn(p.id);
        }}
      >
        Sign in
      </Button>
    ));

    // const buttons = providers.map((p) => (
    //   <Button
    //     key={p.name}
    //     bordered
    //     borderWeight="bold"
    //     size="md"
    //     color="warning"
    //     onClick={() => {
    //       signIn(p.id);
    //     }}
    //   >
    //     Sign in
    //   </Button>
    // ));
    return buttons;
  };

  return (
    <div className="w-full flex flex-row justify-between bg-orange-100 p-2">
      <div className="websiteInfo flex flex-row-reverse text-center">
        <Link className="xs:flex sm:hidden md:flex m-2" href="/">
          Prompt World
        </Link>
        <Image
          className="cursor-pointer"
          src={"/assets/images/logo.svg"}
          alt="logo"
          width={35}
          height={35}
          onClick={() => {
            router.push("/");
          }}
        />
      </div>

      {/* Desktop Navigation */}
      <div className="userState hidden sm:flex flex-row-reverse">
        {isUserLoggedIn ? (
          <div className="flex flex-row text-center ">
            <Button
              className="mr-3"
              bordered
              borderWeight="bold"
              size="md"
              color="warning"
              href="/logout"
            >
              Sign Out
            </Button>
            <Button
              className="mr-3"
              bordered
              borderWeight="bold"
              size="md"
              color="warning"
              onClick={() => {
                router.push("/prompt-create");
              }}
            >
              Create Prompt
            </Button>
            <Image
              className="cursor-pointer rounded-full"
              src={"/assets/images/avatar.png"}
              alt="profile"
              color="white"
              width={35}
              height={35}
              onClick={() => {
                router.push("/Profile");
              }}
            />
          </div>
        ) : (
          <div className="flex flex-row text-center ">
            <Button
              className="mr-3"
              bordered
              borderWeight="bold"
              size="md"
              color="warning"
              href="/logIn"
            >
              Log in
            </Button>
            <Button
              className="mr-3"
              bordered
              borderWeight="bold"
              size="md"
              color="warning"
              href="/signUp"
            >
              Register
            </Button>
            {createProviderButtons()}
          </div>
        )}
      </div>

      {/* mobile Navigation */}
      <div className="flex sm:hidden">
        <Image
          className="cursor-pointer rounded-full"
          src={"/assets/images/avatar.png"}
          alt="profile"
          color="white"
          width={35}
          height={35}
          onClick={() => {
            setIsToggledDown((prev) => !prev);
          }}
        />
        {isToggledDown && (
          <div className="toggleDown absolute top-[50px] right-[33px]">
            {isUserLoggedIn ? (
              <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  <li>
                    <Link
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      href="/Profile"
                      onClick={() => {
                        setIsToggledDown(false);
                      }}
                    >
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      href="/prompt-create"
                      onClick={() => {
                        setIsToggledDown(false);
                      }}
                    >
                      Create Prompt
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      href="/#"
                      onClick={() => {
                        setIsToggledDown(false);
                        signOut();
                      }}
                    >
                      Sign out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  <li>
                    <Link
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      href="/#"
                      onClick={() => {
                        setIsToggledDown(false);
                        signIn();
                      }}
                    >
                      Log in
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      href="/register"
                      onClick={() => {
                        setIsToggledDown(false);
                      }}
                    >
                      Register
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
