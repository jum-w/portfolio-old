import Head from "next/head"

export default function index() {
  return (
    <div className="bg-white text-black min-h-screen">
      <Head>
        <title>Daniel</title>
      </Head>
      <div className="flex justify-center p-2 text-black font-extralight">
        <a href="/" className="group transition duration-300 m-2">
          Home
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black"></span></a>
        <a href="projects" className="group transition duration-300 m-2">Projects
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black"></span></a>
      </div>
      <div className="flex flex-col text-center justify-center items-center h-[500px]">
        <div className="text-6xl font-black tracking-wider">HELLO</div>
        <div className="font-extralight">I&apos;m Daniel, a Computer Science student with a passion for Web Development.</div>
      </div>
      
    </div>
  )
}
