import { ClerkLoaded, ClerkLoading, SignIn } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen bg-background grid grid-cols-1 lg:grid-cols-2">
      <div className="m-auto">
        <ClerkLoaded>
          <SignIn path="/sign-in" />
        </ClerkLoaded>
        <ClerkLoading>
          <Loader2 size={100} className="text-primary animate-spin"/>
        </ClerkLoading>
      </div>
      <div className="max-lg:hidden bg-primary flex flex-col items-center justify-center select-none">
        <p className="text-7xl text-primary-green font-semibold italic">SpendLane</p>
        <Image
          className="ml-10"
          src="/assets/logo.svg" 
          alt="Sign in" 
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}