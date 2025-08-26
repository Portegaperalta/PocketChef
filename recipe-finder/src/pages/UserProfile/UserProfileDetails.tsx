export default function UserProfileDetails() {
  return (
    <section className="user-profile-details mt-10 mb-40">
      <div className="user-profile-details-content flex flex-col gap-6">
        <div className="user-name flex items-center gap-2">
          <p className="text-(--clr-secondary) text-[1.1rem]
          font-[600]">Name:</p>
          <p className="text-(--clr-secondary) text-[1.1rem]
          font-[500]">
            Guest User
          </p>
        </div>
        <div className="user-bio flex flex-row items-center gap-2">
          <p className="text-(--clr-secondary) text-[1.1rem]
          font-[600]">
            Bio:
          </p>
          <p className="text-(--clr-secondary) text-[1.1rem]
          font-[500]">
            Food enthusiast
          </p>
        </div>
        <div className="user-email flex flex-row items-center gap-2">
          <p className="text-(--clr-secondary) text-[1.1rem]
          font-[600]">
            Email:
          </p>
          <p className="text-(--clr-secondary) text-[1.1rem]
          font-[500]">
            example@email.com
          </p>
        </div>
      </div>
    </section>
  )
}