"use client";

import { Button } from "@/components/ui/button";
import { Plus, ArrowRight, Shapes } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative">
      <div className="animation-delay-8 animate-fadeIn mt-20 flex flex-col items-center justify-center px-4 text-center md:mt-20">
        <div className="z-10 mb-6 mt-10 sm:justify-center md:mb-4 md:mt-20">
          <div className="relative flex items-center whitespace-nowrap rounded-full border bg-white/10 px-3 py-1 text-xs leading-6 text-white/60 backdrop-blur-sm">
            <Shapes className="h-5 p-1" /> Introducing Portfolio.
            <a
              href="/cv"
              rel="noreferrer"
              className="ml-1 flex items-center font-semibold hover:text-white"
            >
              <div className="absolute inset-0 flex" aria-hidden="true" />
              Explore{" "}
              <span aria-hidden="true">
                <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          </div>
        </div>

        <div className="mb-10 mt-4 md:mt-6">
          <div className="px-2">
            <div className="relative mx-auto h-full max-w-7xl border border-white/20 p-6 backdrop-blur-sm [mask-image:radial-gradient(800rem_96rem_at_center,white,transparent)] md:px-12 md:py-20">
              <h1 className="flex select-none flex-col px-3 py-2 text-center text-5xl font-light leading-none tracking-tight text-white md:flex-col md:text-8xl lg:flex-row lg:text-8xl">
                <Plus
                  strokeWidth={1}
                  className="absolute -left-5 -top-5 h-10 w-10 text-red-500"
                />
                <Plus
                  strokeWidth={1}
                  className="absolute -bottom-5 -left-5 h-10 w-10 text-red-500"
                />
                <Plus
                  strokeWidth={1}
                  className="absolute -right-5 -top-5 h-10 w-10 text-red-500"
                />
                <Plus
                  strokeWidth={1}
                  className="absolute -bottom-5 -right-5 h-10 w-10 text-red-500"
                />
                colin inkyu kim
              </h1>
              <div className="flex items-center justify-center gap-1">
                <span className="relative flex h-3 w-3 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                </span>
                <p className="text-xs text-green-500">Available Now</p>
              </div>
            </div>
          </div>

          <h1 className="mt-8 text-2xl text-white md:text-2xl">
            Welcome to my creative portfolio! I&#39;m an{" "}
            <span className="font-bold text-red-500">architect</span> and{" "}
            <span className="font-bold text-blue-500">developer</span>
          </h1>

          <p className="mx-auto mb-16 mt-2 max-w-2xl px-6 text-sm text-white/60 sm:px-6 md:max-w-4xl md:px-20 md:text-base lg:text-lg">
            I create at the intersection of physical and digital spaces, 
            crafting experiences that bridge architecture and technology.
          </p>
          
          <div className="flex justify-center gap-2">
            <Button 
              variant="default" 
              size="lg"
              className="bg-red-500 hover:bg-red-600 text-white"
            >
              View Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/20 text-white hover:bg-white/10"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}