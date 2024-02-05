import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import LoginButton from "@/components/auth/LoginButton";
const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className="flex h-full items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <div className="space-y-6">
        <h1
          className={cn(
            `text-5xl fomt-semibold text-white drop-shadow-md text-center`,
            font.className
          )}
        >
          Santra Auth
        </h1>
        <p className="text-white text-lg">A simple authentication service</p>
        <div>
          <LoginButton>
            <Button variant={"secondary"} size="lg">
              {" "}
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
