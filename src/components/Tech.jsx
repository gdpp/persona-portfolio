import { BallCanvas } from './canvas';
import { technologies } from '../constants';

// Components
import {SectionWrapper} from '../hoc';

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {
        technologies.map((tech) => (
          <div key={tech.name} className='w-28 h-28'>
            <BallCanvas icon={tech.icon} />
          </div>
        ))
      }
    </div>
  )
}

export default SectionWrapper(Tech, "")