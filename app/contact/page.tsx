import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      <header className="flex items-center justify-between p-6">
        <div className="flex space-x-2">
          <div className="h-2 w-2 rounded-full bg-black"></div>
          <div className="h-2 w-2 rounded-full bg-black"></div>
        </div>
        <div className="flex items-center space-x-6">
          <Link href="/" className="text-sm hover:underline">
            HOME
          </Link>
          <button className="flex flex-col space-y-1">
            <span className="h-0.5 w-6 bg-black"></span>
            <span className="h-0.5 w-6 bg-black"></span>
          </button>
        </div>
      </header>

      <main className="relative px-6 pt-12">
        {/* Gradient blob */}
        <div
          className="absolute right-0 top-0 h-[300px] w-[300px] animate-pulse rounded-full bg-gradient-to-br from-pink-400 via-orange-300 to-yellow-200 opacity-70 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative">
          <h1 className="max-w-3xl text-6xl font-light leading-tight tracking-tight">
            GET IN
            <br />
            TOUCH WITH
            <br />
            US.
          </h1>

          <div className="mt-24 grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-light">Contact Information</h2>
                <p className="mt-4 text-sm text-gray-600">
                  We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium">Email</h3>
                  <p className="mt-1 text-sm text-gray-600">hello@riverstone.com</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium">Phone</h3>
                  <p className="mt-1 text-sm text-gray-600">+1 (555) 123-4567</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium">Location</h3>
                  <p className="mt-1 text-sm text-gray-600">San Francisco, CA</p>
                </div>
              </div>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                ></textarea>
              </div>
              <Button variant="outline" className="rounded-full border-2 px-8">
                <span className="relative">
                  SEND MESSAGE
                  <div className="absolute -left-4 -right-4 -top-4 -bottom-4 animate-spin-slow rounded-full border border-black opacity-50"></div>
                </span>
              </Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
} 