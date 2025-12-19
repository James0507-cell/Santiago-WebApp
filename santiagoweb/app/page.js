import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-indigo-600">Santiago's Blog</span>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-indigo-600 transition">Home</a>
              <a href="#" className="text-gray-600 hover:text-indigo-600 transition">About</a>
              <a href="#" className="text-gray-600 hover:text-indigo-600 transition">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <article className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header Image / Banner */}
          <div className="h-64 bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center px-4">
              How to Use Tailwind CSS
            </h1>
          </div>

          <div className="p-8 md:p-12">
            {/* Article Meta */}
            <div className="flex items-center mb-8 text-sm text-gray-500 border-b border-gray-100 pb-8">
              <span className="mr-4">Published on Dec 20, 2025</span>
              <span className="mx-2">•</span>
              <span>By Admin</span>
              <span className="mx-2">•</span>
              <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs font-semibold">Tutorial</span>
            </div>

            {/* Introduction */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-4">
                Tailwind CSS is a utility-first CSS framework that has revolutionized the way developers build modern websites. 
                Unlike traditional frameworks that give you pre-built components (like buttons or navbars), Tailwind provides you with low-level utility classes 
                that let you build completely custom designs without ever leaving your HTML.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                In this tutorial, we'll explore how to get started with Tailwind CSS and why it's become a favorite tool for frontend developers worldwide.
              </p>
            </section>

            {/* Why Tailwind? */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Tailwind?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="font-bold text-blue-900 mb-2">Utility-First</h3>
                  <p className="text-blue-800">
                    Style elements directly in your markup using classes like <code className="bg-blue-200 px-1 rounded text-sm">flex</code>, <code className="bg-blue-200 px-1 rounded text-sm">pt-4</code>, and <code className="bg-blue-200 px-1 rounded text-sm">text-center</code>.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="font-bold text-green-900 mb-2">Responsive Design</h3>
                  <p className="text-green-800">
                    Build responsive layouts with ease using prefixes like <code className="bg-green-200 px-1 rounded text-sm">md:</code>, <code className="bg-green-200 px-1 rounded text-sm">lg:</code>, and <code className="bg-green-200 px-1 rounded text-sm">hover:</code>.
                  </p>
                </div>
              </div>
            </section>

            {/* Installation */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Installation in Next.js</h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-4">
                Setting up Tailwind in a Next.js project is incredibly straightforward. If you are creating a new project, you can simply run:
              </p>
              <div className="bg-gray-900 text-gray-100 rounded-lg p-4 mb-4 overflow-x-auto">
                <code className="font-mono">npx create-next-app@latest my-project --typescript --tailwind --eslint</code>
              </div>
              <p className="text-lg leading-relaxed text-gray-700 mb-4">
                This command sets up everything for you automatically. If you're adding it to an existing project, you'll need to install the dependencies and configure your <code className="bg-gray-100 px-1 rounded text-gray-800">tailwind.config.js</code> and <code className="bg-gray-100 px-1 rounded text-gray-800">globals.css</code> files.
              </p>
            </section>

            {/* Basic Usage */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Basic Usage Examples</h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Here are a few examples of how you can transform standard HTML using Tailwind classes.
              </p>

              {/* Example 1 */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">1. Styling a Button</h3>
                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-3">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                    Click Me
                  </button>
                </div>
                <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto">
                  <code className="font-mono text-sm">
                    &lt;button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"&gt;<br/>
                    &nbsp;&nbsp;Click Me<br/>
                    &lt;/button&gt;
                  </code>
                </div>
              </div>

              {/* Example 2 */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">2. Creating a Card</h3>
                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-3 max-w-sm mx-auto sm:mx-0">
                  <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                      <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto">
                  <code className="font-mono text-sm">
                    &lt;div class="max-w-sm rounded overflow-hidden shadow-lg bg-white"&gt;<br/>
                    &nbsp;&nbsp;&lt;div class="px-6 py-4"&gt;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="font-bold text-xl mb-2"&gt;The Coldest Sunset&lt;/div&gt;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;p class="text-gray-700 text-base"&gt;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet...<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/p&gt;<br/>
                    &nbsp;&nbsp;&lt;/div&gt;<br/>
                    &lt;/div&gt;
                  </code>
                </div>
              </div>
            </section>

             {/* Conclusion */}
             <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusion</h2>
              <p className="text-lg leading-relaxed text-gray-700">
                Tailwind CSS might look messy at first with all those classes in your HTML, but once you start using it, the speed at which you can build and iterate on designs is unmatched. 
                Give it a try in your next project!
              </p>
            </section>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-200 mt-12 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center text-gray-500">
          <p>&copy; 2025 Santiago's Tech Blog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
