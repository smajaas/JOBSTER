import { useEffect } from 'react';
import Job from './Job';
import Wrapper from '../assets/wrappers/JobsContainer';
import { useSelector, useDispatch } from 'react-redux';
import Loading from './Loading';
import { getAllJobs } from '../features/allJobs/allJobsSlice';

const JobsContainer = () => {
  const { jobs, isLoading } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobs());
  }, []);

  if (isLoading) {
    return (
      <Wrapper>
        <Loading center />
      </Wrapper>
    );
  }
  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>job info</h5>
      <div className='jobs'>
        {jobs.map((job) => {
          console.log(job);
          return <Job key={job._id} {...job} />;
        })}
      </div>
    </Wrapper>
  );
};
export default JobsContainer;
