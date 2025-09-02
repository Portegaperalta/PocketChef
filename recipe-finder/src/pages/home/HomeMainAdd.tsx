import { Link } from 'react-router'

export default function HomeMainAdd() {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-once="true"
      className="home-main-content-ad">
      <Link to="/SignIn">
        <img src="/images/home-add.png" alt="home add" />
      </Link>
    </div>
  )
}