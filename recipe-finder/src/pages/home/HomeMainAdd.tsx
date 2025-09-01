import { Link } from 'react-router'
import HomeAdd from '../../images/Add-1.png'

export default function HomeMainAdd() {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-once="true"
      className="home-main-content-ad">
      <Link to="/SignIn">
        <img src={HomeAdd} alt="home add" />
      </Link>
    </div>
  )
}