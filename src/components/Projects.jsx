export default function Projects() {
  return ( 
<div className="bg-base-200 min-h-screen w-screen flex justify-between">

<div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
  </div>
  <div className="drawer-side">
    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
      {/* Sidebar content here */}
      <li><a>Project 1</a></li>
      <li><a>Project 2</a></li>
    </ul>
  </div>
</div>

<div className="flex-col w-2/3 justify-center">
<div className="hero-content text-center">
  <div className="max-w-screen">
    <h1 className="text-5xl font-bold mb-5">Projects</h1>
    <h2 className="text-3xl font-bold">This page is under construction</h2>
    <p className="py-6">
      Check back soon!
    </p>
    <button className="btn btn-primary m-10">Get Started</button>
  </div>
</div>
</div>
</div>
  )
}