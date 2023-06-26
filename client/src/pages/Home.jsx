import Profile from '../components/Profile';
import Feed from "../components/Feed";
import Widgets from "../components/Widgets";

const Home = () => {
  return (
    <section className='flex gap-5'>
      <Profile />
      <Feed />
      <Widgets />
    </section>
  )
}

export default Home