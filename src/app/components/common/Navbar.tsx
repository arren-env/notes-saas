import Link from "next/link";
import { ROUTE_HOME } from "@/constant/string.constant";
import { ThemeToggle } from "../ThemeToggle";
import { Button } from "@/components/ui/button";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import UserNavbar from "./UserNavbar";

const Navbar = async () => {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const user = await getUser();
  
  return (
    <div className="border-b bg-background h-[10vh] flex items-center">
      <div className="container flex items-center justify-between">
        <Link className="flex gap-2 items-center" href={ROUTE_HOME}>
          <Image src="/sticky-note.png" alt="logo" width={30} height={30} />
          <h1 className="font-bold text-3xl">saas</h1>
        </Link>
        <div className="flex items-center gap-x-5">
          <ThemeToggle />
          {(await isAuthenticated()) ? (
            // <LogoutLink>
            //   <Button>Log out</Button>
            // </LogoutLink>
            <UserNavbar
              name={user?.given_name as string}
              email={user?.email as string}
              image={user?.picture as string}
            />
          ) : (
            <div className="flex items-center gap-x-5">
              <LoginLink>
                <Button>Sign In</Button>
              </LoginLink>
              <RegisterLink>
                <Button variant={"secondary"}>Sign Up</Button>
              </RegisterLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
