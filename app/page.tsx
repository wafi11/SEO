import { NextSeo } from "next-seo";
import Image from "next/image";
import SEO from "../next-seo-config"
import { ObjectId } from "bson";


export default function Home() {
  return (
    <main className="no-scrollbar bg-black text-white">
      <section>
        ,<meta name="apapaaaya " content="gataua bingugg" />
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center h-screen">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-5xl font-bold">
                <span className="text-red-500">Next</span>
                <span className="text-green-500">JS</span>
              </h1>
              <p className="text-2xl font-semibold">
                A modern framework for building web applications
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export const isValidObjectId = (id: string): boolean => {
  return ObjectId.isValid(id) && new ObjectId(id).toHexString() === id;
};
