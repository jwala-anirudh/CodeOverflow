import { UserButton } from '@clerk/nextjs';

const Home = () => (
  <div>
    <UserButton afterSignOutUrl='/' />
    <h1 className='h1-bold'>Next.js stackoverflow application</h1>
  </div>
);

export default Home;
