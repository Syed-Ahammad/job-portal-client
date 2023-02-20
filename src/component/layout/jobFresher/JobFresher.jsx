import React from "react";

const JobFresher = () => {
  const fresherJobs = [
    {
      title: "Software Developer",
      company: "ABC Technologies",
      location: "Dhaka, Bangladesh",
      description:
        "We are looking for a software developer with experience in React JS and Node.js.",
      applyLink: "https://example.com/apply/software-developer",
    },
    {
      title: "UI/UX Designer",
      company: "XYZ Designs",
      location: "Chittagong, Bangladesh",
      description:
        "We are seeking a talented UI/UX designer with a strong portfolio of design work.",
      applyLink: "https://example.com/apply/ui-ux-designer",
    },
    {
      title: "Data Analyst",
      company: "123 Analytics",
      location: "Dhaka, Bangladesh",
      description:
        "We are looking for a data analyst to help us make data-driven decisions.",
      applyLink: "https://example.com/apply/data-analyst",
    },
    {
      title: "Frontend Developer",
      company: "PQR Solutions",
      location: "Khulna, Bangladesh",
      description:
        "We are looking for a frontend developer with experience in React JS and Redux.",
      applyLink: "https://example.com/apply/frontend-developer",
    },
    {
      title: "Backend Developer",
      company: "DEF Systems",
      location: "Dhaka, Bangladesh",
      description:
        "We are looking for a backend developer with experience in Node.js and MongoDB.",
      applyLink: "https://example.com/apply/backend-developer",
    },
    {
      title: "Mobile App Developer",
      company: "LMN Mobile",
      location: "Sylhet, Bangladesh",
      description:
        "We are looking for a mobile app developer with experience in React Native and Firebase.",
      applyLink: "https://example.com/apply/mobile-app-developer",
    },
  ];
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Fresher Jobs
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Latest Job Listings for Fresher Candidates
          </p>
        </div>
        <div className="mt-10 space-y-8">
          {fresherJobs.slice(0, 6).map((job, index) => (
            <div
              key={index}
              className="bg-white shadow-2xl overflow-hidden sm:rounded-md"
            >
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  {job.title}
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  {job.company} - {job.location}
                </p>
              </div>
              <div className="px-4 py-5 sm:p-6">
                <p className="text-base text-gray-700">{job.description}</p>
              </div>
              <div className="flex justify-end bg-gray-50 px-4 py-4 sm:px-6">
                <a href=" " className="text-indigo-600 hover:text-indigo-900">
                  Apply
                </a>
              </div>
            </div>
          ))}
          <div className="flex justify-center">
            <button className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">
              See All Jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobFresher;
