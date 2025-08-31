export default function Toaster() {
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top"
      className="fixed z-100 bottom-2 bg-(--clr-white) 
     shadow-md px-4 py-2 w-full max-w-40 rounded-md border-b-3 
     border-b-(--clr-primary)">
      <h3 className="text-(--clr-secondary) font-[500] text-center">
        Reciped Saved !
      </h3>
    </div>
  )
}