"use client"

import Link from "next/link"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog"

import { Bot, Search, Apple } from "lucide-react"

export default function ErrorPage() {
  return (
    <section className="container flex flex-col justify-center items-center pb-8 pt-6 md:py-10 mx-auto text-center max-w-7xl">
      <h1 className="text-9xl font-bold leading-tight tracking-tighter md:text-9xl mt-4 bg-gradient-radial text-transparent bg-clip-text">
        Applio
      </h1>
      <p className="mt-4 text-muted-foreground mb-24 text-xs md:text-xl ">
        Enjoy +8000 voice models available in our database, but from Discord!
      </p>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it free?</AccordionTrigger>
          <AccordionContent>
            Yes, everything we develop is done on a non-profit basis and for the
            benefit of the community.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How often are the models updated?</AccordionTrigger>
          <AccordionContent>
            This is a laborious process and is currently done manually. We aim
            to update our database on a monthly basis.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            How do I invite the bot to my server?
          </AccordionTrigger>
          <AccordionContent>
            Simply click{" "}
            <span className="text-green-500">
              <Link href="https://discord.com/api/oauth2/authorize?client_id=1144714449563955302&permissions=277026719809&scope=bot">
                here
              </Link>
            </span>{" "}
            and follow the steps discord tells you to follow.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="mt-8">

        {/* Applio Canary Bot  */}
        <Dialog>
          <DialogTrigger asChild>
            <Button className="font-bold hover:bg-orange-300 bg-orange-400 text-black" size="lg">Invite Applio Canary<div className="ml-1"><Apple></Apple></div></Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="font-bold text-2xl">Search models easily 🍏</DialogTitle>
              <DialogDescription>
                By inviting our bot to your server, you will able to search +8000 models in your Discord server with this command
                <div className="bg-gray-900 hover:bg-gray-800 text-orange-200 flex justify-center rounded p-2 mt-4 mb-2 font-bold text-xl css-0">/search [Model Name]</div>
              </DialogDescription>
              <DialogFooter>
                <Button asChild className="bg-orange-400 hover:bg-orange-300 border-0 text-1xl" size="sm" type="submit">
                  <Link href="https://discord.com/oauth2/authorize?client_id=1151157990477533326&permissions=8&scope=bot" target="blank">Invite</Link>
                </Button>
              </DialogFooter>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        {/* Applio Beta BOT */}
        <Dialog>
          <DialogTrigger asChild>
            <Button className="font-bold hover:bg-pink-500 bg-pink-600 text-black ml-5" size="lg">Invite Applio Beta<div className="ml-1"><Apple></Apple></div></Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="font-bold text-2xl">Search models easily 🍏</DialogTitle>
              <DialogDescription>
                By inviting our bot to your server, you will able to search +8000 models in your Discord server with this command
                <div className="bg-gray-900 hover:bg-gray-800 text-pink-400 flex justify-center rounded p-2 mt-4 mb-2 font-bold text-xl css-0">/search [Model Name]</div>
              </DialogDescription>
              <DialogFooter>
                <Button asChild className="bg-pink-600 hover:bg-pink-500 border-0 text-1xl" size="sm" type="submit">
                  <Link href="https://discord.com/oauth2/authorize?client_id=1150834440973594784&permissions=8&scope=bot" target="blank">Invite</Link>
                </Button>
              </DialogFooter>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        {/* Applio BOT*/}
        <Dialog>
          <DialogTrigger asChild>
            <Button className="font-bold hover:bg-green-400 bg-green-500 text-black ml-5" size="lg">Invite Applio<div className="ml-1"><Apple></Apple></div></Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="font-bold text-2xl">Search models easily 🍏</DialogTitle>
              <DialogDescription>
                By inviting our bot to your server, you will able to search +8000 models in your Discord server with this command
                <div className="bg-gray-900 hover:bg-gray-800 text-green-300 flex justify-center rounded p-2 mt-4 mb-2 font-bold text-xl css-0">/search [Model Name]</div>
              </DialogDescription>
              <DialogFooter>
                <Button asChild className="bg-green-400 hover:bg-green-300 border-0 text-1xl" size="sm" type="submit">
                  <Link href="https://discord.com/oauth2/authorize?client_id=1144714449563955302&permissions=8&scope=bot" target="blank">Invite</Link>
                </Button>
              </DialogFooter>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <Button variant="default" className="mt-10 ml-[3rem] font-bold">
        <Link href="/models">Do you want to see all our models?</Link>
      </Button>
    </section>
  )
}