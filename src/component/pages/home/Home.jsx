import React from 'react';
import JobExperience from '../../layout/jobExperience/JobExperience';
import JobFresher from '../../layout/jobFresher/JobFresher';
import Banner from '../../layout/navbar/Banner';
import Navbar from '../../layout/navbar/Navbar';

const Home = () => {
    return (
        <div className='relative'>
            <Navbar></Navbar>
            <Banner></Banner>
            <JobFresher></JobFresher>
            <JobExperience></JobExperience>
        </div>
    );
};

export default Home;