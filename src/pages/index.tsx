import React from "react"
import { graphql } from "gatsby"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout/layout"
import HeroSection from "../components/home/hero-section"
import FeaturedJobs from "../components/home/featured-jobs"
import type { IJob } from "../types"

interface HomePageProps extends PageProps {
  data: {
    allMarkdownRemark: {
      nodes: Array<{
        frontmatter: IJob
      }>
    }
  }
}

const IndexPage: React.FC<HomePageProps> = ({ data }) => {
  const jobs = data.allMarkdownRemark.nodes.map((node) => node.frontmatter)

  return (
    <Layout>
      <HeroSection />
      <FeaturedJobs jobs={jobs} />
      <section className="py-12 bg-indigo-700 text-white" data-aos="fade-up">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Next Opportunity?</h2>
          <p className="text-xl text-indigo-200 mb-8 max-w-3xl mx-auto">
            Browse our job listings and find the perfect match for your skills and career goals.
          </p>
          <a
            href="/jobs"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white"
          >
            Browse All Jobs
          </a>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query HomePageQuery {
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

export default IndexPage

export const Head: HeadFC = () => <title>JobBoard - Find Your Dream Job</title>
