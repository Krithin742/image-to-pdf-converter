import React from "react";
//import { Card, CardContent } from "@/components/ui/card";
//import { Button } from "@/components/ui/button";
//import { Github, Linkedin } from "lucide-react";


function App() {
 

  return (
    <>
       <div className="min-h-screen bg-gray-100 p-6 font-sans">
            <header className="text-center mb-10">
              <h1 className="text-4xl font-bold text-gray-800 mb-2">Rithin K</h1>
              <p className="text-lg text-gray-600">
                Python Developer | Web Developer | BSc CS Student
              </p>
              <div className="mt-4 flex justify-center gap-4">
                <a href="https://github.com/yourusername" target="_blank">
                  <Github className="w-6 h-6 text-gray-700 hover:text-black" />
                </a>
                <a href="https://linkedin.com/in/rithin-k" target="_blank">
                  <Linkedin className="w-6 h-6 text-gray-700 hover:text-blue-600" />
                </a>
              </div>
            </header>
      
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="text-xl font-bold">FoodSaver (OLIO Clone)</h3>
                    <p className="text-gray-600 my-2">
                      A Django-based food sharing app to reduce food waste. Features user auth,
                      listing system, and location-based sharing.
                    </p>
                    <a
                      href="https://github.com/yourusername/foodsaver"
                      className="text-blue-500 hover:underline"
                      target="_blank"
                    >
                      View on GitHub
                    </a>
                  </CardContent>
                </Card>
      
                <Card>
                  <CardContent className="p-4">
                    <h3 className="text-xl font-bold">Text Summarizer App</h3>
                    <p className="text-gray-600 my-2">
                      Built with Python and Flask, this app summarizes large texts and supports multiple file formats.
                    </p>
                    <a
                      href="https://github.com/yourusername/text-summarizer"
                      className="text-blue-500 hover:underline"
                      target="_blank"
                    >
                      View on GitHub
                    </a>
                  </CardContent>
                </Card>
              </div>
            </section>
      
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">About Me</h2>
              <p className="text-gray-700 max-w-3xl">
                I'm Rithin, a BSc Computer Science student passionate about building useful apps using Python.
                I enjoy exploring new technologies, solving problems through code, and contributing to real-world projects.
              </p>
            </section>
      
            <section className="text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Resume</h2>
              <a
                href="/resume.pdf"
                className="inline-block mt-2"
                target="_blank"
              >
                <Button>Download Resume</Button>
              </a>
            </section>
          </div>
    </>
  )
}

export default App
