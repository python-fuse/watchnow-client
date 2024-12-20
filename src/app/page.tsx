import Image from "next/image";
import Button from "@/components/global/Button";
import { BsArrowRight, BsCameraVideo, BsEnvelope } from "react-icons/bs";
import Link from "next/link";

export default function page() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-white px-4 sm:px-6 lg:px-8"
      style={{
        background: "linear-gradient(180deg, #cd55b3, #5622af)",
      }}
    >
      <main className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-6xl font-bold mb-6">
          Welcome to Tube Buddy
        </h1>
        <p className="text-xl sm:text-2xl mb-8">
          Never forget to finish your YouTube videos again!
        </p>
        <div className="flex justify-center space-x-4 mb-12">
          <FeatureCard
            icon={<BsCameraVideo className="w-12 h-12 mb-4" />}
            title="Save Videos"
            description="Easily save your favorite YouTube videos for later"
          />
          <FeatureCard
            icon={<BsEnvelope className="w-12 h-12 mb-4" />}
            title="Email Reminders"
            description="Get friendly reminders to finish your unwatched videos"
          />
        </div>

        <Link href={"/dashboard"}>
          <Button
            text="Get Started"
            className="bg-white   mx-auto text-xl hover:bg-gray-100 text-black"
          >
            Get Started{" "}
            <BsArrowRight className="ml-2 duration-300 animate-start" />
          </Button>
        </Link>
      </main>
      <footer className="mt-16 text-sm opacity-75">
        © {new Date().getFullYear()} Tube Buddy. All rights reserved.
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { [key: string]: any }) {
  return (
    <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm flex flex-col items-center justify-center space-y-2">
      {icon}
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-sm">{description}</p>
    </div>
  );
}
