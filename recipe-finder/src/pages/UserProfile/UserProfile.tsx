import UserProfileDetails from "./UserProfileDetails";
import UserProfileTop from "./UserProfileTop";

export default function UserProfile() {
  return (
    <main className="mt-4 px-6 lg:px-30">
      <UserProfileTop />
      <UserProfileDetails />
    </main>
  )
}