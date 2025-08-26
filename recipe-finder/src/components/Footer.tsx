export default function Footer() {
  return (
    <footer>
      <div className="footer-content px-6 py-4 mt-16 flex flex-col-reverse justify-between 
      items-start gap-4 md:flex-row lg:px-30">
        <div className="footer-company">
          <p className="text-[.9rem]">
            ©2025 <span>PocketChef.</span>
          </p>
        </div>
        <div className="footer-terms">
          <a href="#" className="text-(--clr-secondary) text-[.9rem]
          hover:text-(--clr-primary) duration-100 ease-in-out">
            Terms
          </a>
        </div>
        <div className="footer-docs">
          <a href="#" className="text-(--clr-secondary) text-[.9rem]
          hover:text-(--clr-primary) duration-100 ease-in-out">
            Docs
          </a>
        </div>
        <div className="footer-privacy">
          <a href="#" className="text-(--clr-secondary) text-[.9rem]
          hover:text-(--clr-primary) duration-100 ease-in-out">
            Privacy
          </a>
        </div>
        <div className="footer-contact">
          <a href="#" className="text-(--clr-secondary) text-[.9rem]
          hover:text-(--clr-primary) duration-100 ease-in-out">
            Contact
          </a>
        </div>
        <div className="footer-cookies">
          <a href="#" className="text-(--clr-secondary) text-[.9rem]
          hover:text-(--clr-primary) duration-100 ease-in-out">
            Manage cookies
          </a>
        </div>
      </div>
    </footer>
  )
}