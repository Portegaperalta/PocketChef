import UserProfileDetails from "./UserProfileDetails";
import UserProfileTop from "./UserProfileTop";

export default function UserProfile() {
  return (
    <main className="user-profile px-6 py-4 mt-4 md:px-16 lg:px-30">
      <UserProfileTop />
      <UserProfileDetails />
    </main>
  )
}