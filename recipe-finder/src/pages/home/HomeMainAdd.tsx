import HomeAdd from '../../images/Add-1.png'

export default function HomeMainAdd() {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-once="true"
      className="home-main-content-ad">
      <a href="#">
        <img src={HomeAdd} alt="home add" />
      </a>
    </div>
  )
}