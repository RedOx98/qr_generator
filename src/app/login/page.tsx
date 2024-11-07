"use client";

import { Credential } from "@/types/types";
import {
  faAngleLeft,
  faArrowAltCircleDown,
  faArrowAltCircleLeft,
  faArrowsV,
  faCircleArrowLeft,
  faFilePdf,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useMemo } from "react";
import { config } from "@/Config";
import { PublicClientApplication } from "@azure/msal-browser";
import { createSession } from "@/utils/session";
import { User } from "@/utils/definitions";
import { useUserStore } from "@/utils/store";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";

const Page: React.FC = () => {
  const navigate = useRouter();
  const [credentials, setCredentials] = useState<Credential>({
    username: "",
    password: "",
  });
  const { user, addUserInfo, destroyUserInfo } = useUserStore();

  const [message, setMessage] = useState<string>("");
  const [azure, setAzure] = useState<string>(""); //remove after we get production response

  type Auth = {
    error: string | null;
    isAuthenticated: boolean;
    user: any | null;
  };

  // response.accessToken,"ET",response.account.name,response.account.name,response.account.username,"server"

  const [auth, setAuth] = useState<Auth>({
    error: null,
    isAuthenticated: false,
    user: null,
  });

  const publicClientApplication = useMemo(
    () =>
      new PublicClientApplication({
        auth: {
          clientId: config.appId,
          redirectUri: config.redirectUrl,
          authority: config.authority,
        },
        cache: {
          cacheLocation: "sessionStorage",
          storeAuthStateInCookie: true,
        },
      }),
    []
  );

  useEffect(() => {
    useUserStore.persist.rehydrate();
    const initializeMsal = async () => {
      await publicClientApplication.initialize();
    };
    initializeMsal();
  }, [publicClientApplication]);

  const login = async () => {
    try {
      const response = await publicClientApplication.loginPopup({
        scopes: config.scopes,
        prompt: "select_account",
      });
      console.log("Azure AD Response:", response);
      let name = response.account.name?.split(" ");
      let usermail = response.account.username?.split("@");

      let firstname: string | undefined;
      let lastname: string | undefined;
      let username: string | undefined;
      username = usermail?.[0] ?? "Unknown";

      firstname = name?.[0] ?? "Unknown";
      lastname = name?.[1] ?? "Unknown";
      
      
      const user: User = {
        token: response.accessToken,
        level: "",
        firstName: `${firstname}`,
        lastName: `${lastname}`,
        username: username,
        email: response.account.username,
        role: ``,
        phoneNumber: ""
      };
      createSession(user);
      addUserInfo(user);
      setAzure(JSON.stringify(response, null, 2)); //remove after we get production response
      console.log(firstname, lastname)
      toast.success(`welcome ${firstname}`);
      setAuth({
        isAuthenticated: true,
        user: response.account!,
        error: null,
      });
      // Redirect to the hoxmepage after successful login
      navigate.push("/");
    } catch (err) {
      setAuth({
        isAuthenticated: false,
        user: null,
        error: (err as Error).message,
      });
    }
  };

  const logout = () => {
    publicClientApplication.logout();
    setAuth({
      isAuthenticated: false,
      user: null,
      error: null,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(credentials);
  };

  // useEffect(()=> {
  //   if (user?.token != "") {
  //     navigate.push('/')
  //   window.location.reload();

  //   }
  // }, [])

  return (
    <div className="">
      <div className="xs:flex sm:hidden lg:hidden xl:hidden 2xl:hidden xs:flex-col xs:h-full xs:w-full relative">
        <div className="xs:h-[250px] bg-[#5FC5DA] flex items-center justify-center">
          <Link href="/">
            <Image
              className="ml-3 opacity-60 cursor-pointer"
              src="/images/Ecologo3.png"
              alt="/"
              width={150}
              height={150}
            />
          </Link>
        </div>
        <div className="xs:h-[700px] xs:w-full overflow-hidden scroll-py-0 bg-[#031922] flex flex-col justify-center items-center rounded-t-[66px] absolute top-[190px] gap-[30px] ">
          <div className="flex items-center justify-center flex-col mt-[-270px]">
            <h3 className="text-white text-2xl font-bold">Sign in</h3>
          </div>
          <div className="flex flex-col justify-start items-start mt-[-10px]">
            <label htmlFor="email" className="mb-[5px]">
              <h3 className="text-[#BDF5FF] font-extralight">Email</h3>
            </label>
            <input
              type="text"
              className="w-[300px] h-[35px] rounded-xl text-center bg-inherit"
              style={{ border: "1px solid #10A2DC" }}
              placeholder="oolamilekan@ecobank.com"
              value={credentials.username}
              name="username"
              onChange={handleChange}
            />
          </div>
          <div className=" flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="">
                <FontAwesomeIcon
                  icon={faLock}
                  className="text-[#2F98B4]"
                  width={16}
                  height={16}
                />
              </div>
              <div className="">
                <h3 className="text-[#2F98B4] font-light">
                  Single Sign-on enabled
                </h3>
              </div>
              
            </div>
            <div className="">
              <FontAwesomeIcon
                icon={faArrowsV}
                className="text-[#ffffff] transform scale-y-150"
                style={{ width: "10px", height: "36px" }}
              />
            </div>
            <div className=" mt-[10px]">
              <Link href="" className="cursor-pointer">
                <h3 className="text-[#ffffff] font-light text-[15px]">
                  Use password instead
                </h3>
              </Link>
            </div>
            <div
                className="w-[300px] h-[40px] bg-gradient-to-r from-[#97329f] via-[#97329f] to-[#026a6a] flex flex-row items-center justify-center gap-4 cursor-pointer mt-[10px]"
                onClick={login}
              >
                <div className="">
                  <FontAwesomeIcon
                    icon={faCircleArrowLeft}
                    className="text-white font-bold"
                    width={16}
                    height={16}
                  />
                </div>
                <div className="">
                  {/* <h3 className="text-white font-light" onClick={login}>Company Single Sign-On</h3> */}
                  <button className="text-white font-light" onClick={()=>login}>
                    Login
                  </button>
                </div>
              </div>
              <div className="mt-[40px]">
                <h3 className="text-[#BDF5FF] font-light">
                  I don&apos;t have an account{" "}
                  <Link href="" className="cursor-pointer">
                    <span className="text-[#ffffff]">Create account!</span>
                  </Link>
                </h3>
              </div>
          </div>
        </div>
      </div>
      <div className="xs:hidden w-screen h-screen lg:flex flex-col justify-center items-center bg-gradient-to-b from-[#10A2DC] via-[#315fa4] to-[#040533] gap-4 overscroll-none overflow-hidden">
        <div className="">
          <Image src="/images/Ecologo3.png" alt="" width={80} height={80} />
        </div>
        <div
          className="w-[500px] h-[500px] flex flex-col gap-6 justify-center items-center border-red-500 shadow-black shadow-2xl bg-[#e3f5fa] opacity-90 rounded-lg"
          style={{ border: "1px solid #10A2DC" }}
        >
          <div className="flex flex-col">
            <div className="flex-1 flex flex-col items-center justify-center mt-[-40px]">
              <h1
                className="text-black text-[80px]"
                style={{ fontSize: "30px" }}
              >
                Welcome back!!
              </h1>
              <hr className="w-[70px] h-[6px] bg-[#10A2DC] ml-[140px] rounded-lg" />
            </div>
            <div className="flex flex-col justify-center items-center gap-4 flex-[5]">
              <div className="flex flex-col justify-center items-center mt-[35px]">
                <div className="">
                  <label htmlFor="email" className="">
                    <h3 className="text-black font-extralight">Username</h3>
                  </label>
                  <input
                    type="text"
                    className="w-[400px] h-[35px] rounded-xl text-center"
                    style={{ border: "1px solid #10A2DC" }}
                    placeholder="username@ecobank.com"
                    value={credentials.username}
                    name="username"
                    onChange={handleChange}
                  />
                </div>
                <div className="">
                  <label htmlFor="password" className="">
                    <h3 className="text-black font-extralight">Password</h3>
                  </label>
                  <input
                    type="password"
                    className="w-[400px] h-[35px] rounded-xl text-center"
                    style={{ border: "1px solid #10A2DC" }}
                    placeholder="123456"
                    value={credentials.password}
                    name="password"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className=" flex flex-col items-center justify-center">
                <div className="flex items-center justify-center gap-2">
                  <div className="">
                    <FontAwesomeIcon
                      icon={faLock}
                      className="text-black"
                      width={16}
                      height={16}
                    />
                  </div>
                  <div className="">
                    <h3 className="text-black font-light">
                      Single Sign-on enabled
                    </h3>
                  </div>
                </div>
                <div className=" mt-[10px]">
                  <Link href="" className="cursor-pointer">
                    <h3 className="text-[#10A2DC] font-bold">
                      Use password instead
                    </h3>
                  </Link>
                </div>
              </div>
              <div
                className="w-[400px] h-[40px] bg-gradient-to-r from-[#97329f] via-[#97329f] to-[#012727] flex flex-row items-center justify-center gap-4 cursor-pointer"
                onClick={login}
              >
                <div className="">
                  <FontAwesomeIcon
                    icon={faCircleArrowLeft}
                    className="text-white font-bold"
                    width={16}
                    height={16}
                  />
                </div>
                <div className="">
                  {/* <h3 className="text-white font-light" onClick={login}>Company Single Sign-On</h3> */}
                  <button className="text-white font-light" onClick={login}>
                    Login
                  </button>
                </div>
              </div>
              <div className="mt-[40px]">
                <h3 className="text-black font-light">
                  I don&apos;t have an account{" "}
                  <Link href="" className="cursor-pointer">
                    <span className="text-[#10A2DC]">Create account!</span>
                  </Link>
                </h3>
              </div>
            </div>
          </div>
          {message && (
            <p className="text-[35px] font-bold text-red-600">{message}</p>
          )}
          {/* //remove after we get production response */}
          <p className="text-[5px] font-bold text-red-600">{azure}</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
