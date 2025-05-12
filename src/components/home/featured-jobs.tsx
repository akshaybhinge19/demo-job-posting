import React from "react"
import type { IJob } from "../../types"
import JobCard from "../jobs/job-card"

interface FeaturedJobsProps {
  jobs: IJob[]
}

const FeaturedJobs: React.FC<FeaturedJobsProps> = ({ jobs }) => {
  // Get the 3 most recent jobs
  const featuredJobs = [...jobs]
    .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
    .slice(0, 3)

  return (
    <section className="py-12 bg-gray-50" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Featured Jobs</h2>
          <p className="mt-2 text-lg text-gray-600">Discover your next career opportunity</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredJobs.map((job) => (
            <JobCard key={job.slug} job={job} />
          ))}
        </div>

        {/* <div className="mt-10 text-center">
          <Link
            to="/jobs"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            View All Jobs
          </Link>
        </div> */}
      </div>
    </section>
  )
}

export default FeaturedJobs
