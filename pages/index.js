import SmallCard from '../components/SmallCard';
import { projectIcons } from '../components/Icons';
import Image from 'next/image';
import { projects } from '../utils/projectsData';

const Home = () => (
  <div className="home">
    <h1>What Can I Deploy to Static Apps?</h1>
    <div className="card-grid">
      {projects.map((project) => {
        const Icon = projectIcons[project.id];
        return (
          <SmallCard
            key={project.id}
            Icon={Icon}
            title={project.name}
            slug={project.slug}
          />
        );
      })}
    </div>
    <Image
      src='/1.png'
      alt='test image'
      className='dark:invert'
      width={1280}
      height={300}
      priority
    />
  </div>
);

export default Home;
