/**
 * v0 by Vercel.
 * @see https://v0.dev/t/0LPSrWHhSQo
 */
import Link from "next/link"
import { CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <>
      <div className="flex items-center justify-between p-6 bg-[#ffffff]">
        <div className="h-6 w-6" />
        <nav className="flex gap-4">
          <Link className="text-gray-600 hover:text-gray-900" href="#">
            About
          </Link>
          <Link className="text-gray-600 hover:text-gray-900" href="#">
            Features
          </Link>
          <Link className="text-gray-600 hover:text-gray-900" href="#">
            Pricing
          </Link>
          <Link className="text-gray-600 hover:text-gray-900" href="#">
            Contact
          </Link>
        </nav>
      </div>
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">VPN Pricing</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="flex flex-col items-center text-center">
            <CardContent className="flex flex-col items-center gap-4">
              <h2 className="text-lg font-bold">Basic Plan</h2>
              <span className="text-4xl font-bold">$9.99</span>
              <span className="text-gray-500">per month</span>
              <ul className="text-left">
                <li>Speed: 10 Mbps</li>
                <li>5 Devices</li>
                <li>Basic Support</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Buy Now</Button>
            </CardFooter>
          </Card>
          <Card className="flex flex-col items-center text-center">
            <CardContent className="flex flex-col items-center gap-4">
              <h2 className="text-lg font-bold">Premium Plan</h2>
              <span className="text-4xl font-bold">$19.99</span>
              <span className="text-gray-500">per month</span>
              <ul className="text-left">
                <li>Speed: 50 Mbps</li>
                <li>10 Devices</li>
                <li>Premium Support</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Buy Now</Button>
            </CardFooter>
          </Card>
          <Card className="flex flex-col items-center text-center">
            <CardContent className="flex flex-col items-center gap-4">
              <h2 className="text-lg font-bold">Ultimate Plan</h2>
              <span className="text-4xl font-bold">$29.99</span>
              <span className="text-gray-500">per month</span>
              <ul className="text-left">
                <li>Speed: 100 Mbps</li>
                <li>Unlimited Devices</li>
                <li>24/7 Support</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Buy Now</Button>
            </CardFooter>
          </Card>
        </div>
      </main>
      <footer className="p-6 bg-[#f3f3f3] mt-6">
        <div className="flex justify-between">
          <div>
            <h3 className="text-lg font-bold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">Features</Link>
              </li>
              <li>
                <Link href="#">Pricing</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Contact Us</h3>
            <p>123, Main Street, Your City</p>
            <p>email@example.com</p>
            <p>+1 234 567 890</p>
          </div>
        </div>
      </footer>
    </>
  )
}

