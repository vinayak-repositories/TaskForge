import LoginButton from "@/components/LoginButton";
import LogoutButton from "@/components/LogoutButton";
import {authOptions} from "@/lib/authOptions";
import {getServerSession} from "next-auth";
import Image from "next/image";
import Link from "next/link";

export default async function Header() {
  const session = await getServerSession(authOptions);
  return (
    <header className="bg-gray-200 p-4 px-8">
      
      <div className="flex justify-between items-center">
        <Link href="/" className="logo flex items-center gap-1">
        <Image
            src="/logo_nobg.png"
            alt="TaskForge Logo"
            width={40}
            height={40}
          />
        TaskForge
        </Link>
        <div>
          {session && (
            <>
              Hello, {session?.user?.name}
              <LogoutButton />
            </>
          )}
          {!session && (
            <>
              Not logged in
              <LoginButton />
            </>
          )}
        </div>
      </div>
    </header>
  );
}