import React from "react";

const JobExperience = () => {
  const jobExperience = [
    {
      id: 1,
      title: "Software Engineer",
      location: "Dhaka",
      company: "Grameenphone",
      logo: "https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg",
      applyUrl: "#",
    },
    {
      id: 2,
      title: "Front-end Developer",
      location: "Dhaka",
      company: "Pathao",
      logo: "https://w7.pngwing.com/pngs/900/3/png-transparent-bangladesh-industrial-and-technical-assistance-center-pathao-business-service-business-text-trademark-service.png",
      applyUrl: "#",
    },
    {
      id: 3,
      title: "Mobile App Developer",
      location: "Dhaka",
      company: "bKash",
      logo: "https://1000logos.net/wp-content/uploads/2021/02/Bkash-logo.png",
      applyUrl: "#",
    },
    {
      id: 4,
      title: "Data Scientist",
      location: "Dhaka",
      company: "Rangs Electronics",
      logo: "https://prod-media-eng.dhakatribune.com/uploads/2021/02/whitagram-image-1614547079999.jpg",
      applyUrl: "#",
    },
    {
      id: 5,
      title: "DevOps Engineer",
      location: "Dhaka",
      company: "SSL Wireless",
      logo: "https://seeklogo.com/images/S/ssl-wireless-logo-31EDC493D5-seeklogo.com.png",
      applyUrl: "#",
    },
    {
      id: 6,
      title: "Full-stack Developer",
      location: "Dhaka",
      company: "Robi",
      logo: "https://seeklogo.com/images/R/robi-logo-263EE1D4A2-seeklogo.com.png",
      applyUrl: "#",
    },
  ];

  return (
    <div>
      <div className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Experienced Jobs
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Top 6 Tech Jobs Suggestions
            </p>

            <div className="mt-8 max-w-2xl mx-auto">
              <p className="text-xl text-gray-500">
                Apply to the best tech jobs with ease
              </p>
            </div>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Job start */}
              {jobExperience.map((job) => (
                <div
                  key={job.id}
                  className="bg-white overflow-hidden shadow-2xl rounded-lg"
                >
                  <div className="p-5">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <img
                          className="h-10 w-10"
                          src={job.logo}
                          alt={job.company}
                        />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-lg font-medium text-gray-900">
                          {job.title}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          Company Name: {job.company}
                        </p>
                        <div className="mt-4">
                          <p className="text-sm text-gray-500">
                            Location: {job.location}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="px-5 py-3 bg-gray-50 text-right">
                      <a
                        href={job.applyUrl}
                        className="font-medium text-indigo-600 hover:text-indigo-500 hover:text-indigo-500"
                      >
                        Apply Now
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <a
                href=" "
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                See All Jobs
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobExperience;
