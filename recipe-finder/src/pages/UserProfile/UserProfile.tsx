import UserProfileDetails from "./UserProfileDetails";

export default function UserProfile() {
  return (
    <main className="user-profile px-6 py-26 md:px-16 lg:px-30">
      <section className="user-profile-top">
        <h2 className="text-(--clr-secondary) text-[1.6rem] font-[600]">
          Profile
        </h2>
      </section>
      <UserProfileDetails />
    </main>
  )
}