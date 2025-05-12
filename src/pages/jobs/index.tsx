import React from "react"
import { useState, useMemo } from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout/layout"
import JobCard from "../../components/jobs/job-card"
import SearchBar from "../../components/jobs/search-bar"
import CategoryFilter from "../../components/jobs/category-filter"
import type { IJobsPageProps } from "../../types"

const JobsPage: React.FC<IJobsPageProps> = ({ data }) => {
  const allJobs = data.allMarkdownRemark.nodes.map((node) => node.frontmatter)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Extract unique categories
  const categories = useMemo(() => {
    const categorySet = new Set(allJobs.map((job) => job.category))
    return Array.from(categorySet)
  }, [allJobs])

  
  // const [selectedLocations, setSelectedLocations] = useState<string[]>([])
  // const handleLocationChange = (location: string) => {
  //   const newLocations = selectedLocations.includes(location)
  //     ? selectedLocations.filter((loc) => loc !== location)
  //     : [...selectedLocations, location]

  //   setSelectedLocations(newLocations)
  // }
  // Filter jobs based on search term and category
  const filteredJobs = useMemo(() => {
    return allJobs.filter((job) => {
      const matchesSearch =
        searchTerm === "" ||
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesCategory = selectedCategory === null || job.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [allJobs, searchTerm, selectedCategory])


  return (
    <Layout title="Browse Jobs">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar with filters */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Filters</h2>

              <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />
              {/* ://TODO: add job type filter */}
              {/* <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Job Type</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700">Full-time</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700">Part-time</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700">Contract</span>
                  </label>
                </div>
              </div> */}

              {/* ://TODO: add location filter */}
              {/* <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Location</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      onClick={() => handleLocationChange("Remote")}
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700">Remote</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      onClick={() => handleLocationChange("Bangalore")}
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700">Bangalore</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      onClick={() => handleLocationChange("Mumbai")}
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700">Mumbai</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      onClick={() => handleLocationChange("Pune")}
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700">Pune</span>
                  </label>
                </div>
              </div> */}
            </div>
          </div>

          {/* Main content with job listings */}
          <div className="lg:col-span-3">
            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

            <div className="mb-4 flex justify-between items-center">
              <div className="text-gray-600">Showing {filteredJobs.length} jobs</div>
              {/* ://TODO: add sorting */}
              {/* <div>
                <select className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                  <option>Most Recent</option>
                  <option>Salary: High to Low</option>
                  <option>Salary: Low to High</option>
                </select>
              </div> */}
            </div>

            <div className="space-y-6">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => <JobCard key={job.slug} job={job} />)
              ) : (
                <div className="text-center py-12 bg-white rounded-lg shadow">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h3 className="mt-2 text-lg font-medium text-gray-900">No jobs found</h3>
                  <p className="mt-1 text-gray-500">Try adjusting your search or filter criteria.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const jobsQuery = graphql`
  query jobsQuery {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          slug
          location
          description
          jobType
          salary
          publishedDate
          category
          companyLogo
          applyLink
        }
      }
    }
  }
`

export default JobsPage

export const Head = () => <title>Browse Jobs | JobBoard</title>
