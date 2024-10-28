export default function Projects() {
  return (
    <div className="bg-base-200 min-h-screen flex justify-center">
      <div className="w-3/4 text-center">

  <div className="collapse collapse-arrow bg-base-200 mt-10">
    <input type="radio" name="my-accordion-2" defaultChecked />
    <div className="collapse-title text-xl font-medium">Project 1</div>
    <div className="collapse-content">
      <p>This is a blurb about the project</p>
    </div>
    </div>

    <div className="collapse collapse-arrow bg-base-200">
      <input type="radio" name="my-accordion-2" />
      <div className="collapse-title text-xl font-medium">Project 2</div>
      <div className="collapse-content">
        <p>This is a blurb about the project</p>
      </div>
    </div>
    
    <div className="collapse collapse-arrow bg-base-200">
      <input type="radio" name="my-accordion-2" />
      <div className="collapse-title text-xl font-medium">Project 3</div>
      <div className="collapse-content">
        <p>This is a blurb about the project</p>
      </div>
  </div>

  </div>
</div>
  )
}