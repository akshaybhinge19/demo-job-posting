import React from "react"
import { Link } from "gatsby"
import type { IJob } from "../../types"

const JobCard: React.FC<{ job: IJob }> = ({ job }) => {
  // Format the date to be more readable
  const formattedDate = new Date(job.publishedDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300" data-aos="fade-up">
      <div className="p-6">
        <div className="flex items-start">
          <img
            src={job.companyLogo || "/placeholder.svg"}
            alt={`${job.title} logo`}
            className="w-16 h-16 rounded-md object-contain bg-gray-50 mr-4"
          />
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-bold text-gray-900 hover:text-indigo-600">
                  <Link to={`/jobs/${job.slug}`}>{job.title}</Link>
                </h2>
                <div className="mt-1 text-gray-600">{job.location}</div>
              </div>
              <div className="flex flex-col items-end">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    job.jobType === "Full-time"
                      ? "bg-green-100 text-green-800"
                      : job.jobType === "Part-time"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {job.jobType}
                </span>
                <span className="text-gray-500 text-sm mt-2">{formattedDate}</span>
              </div>
            </div>

            <div className="mt-3">
              <p className="text-gray-600 line-clamp-2">{job.description}</p>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div className="flex space-x-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                  {job.category}
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  {job.salary}
                </span>
              </div>
              <a
                href={job.applyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobCard
