import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import type { IJob } from "../types/index";

interface JobDetailProps {
  data: {
    markdownRemark: {
      frontmatter: IJob;
      html: string;
    };
  };
}

const JobDetailPage: React.FC<JobDetailProps> = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;

  // Format the date to be more readable
  const formattedDate = new Date(frontmatter.publishedDate).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div className="flex items-center mb-4 md:mb-0">
                  <img
                    src={frontmatter.companyLogo || "/placeholder.svg"}
                    alt={`${frontmatter.title} logo`}
                    className="w-16 h-16 rounded-md object-contain bg-gray-50 mr-4"
                  />
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">
                      {frontmatter.title}
                    </h1>
                    <p className="text-gray-600">{frontmatter.location}</p>
                  </div>
                </div>
                <div className="flex flex-col items-start md:items-end">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      frontmatter.jobType === "Full-time"
                        ? "bg-green-100 text-green-800"
                        : frontmatter.jobType === "Part-time"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {frontmatter.jobType}
                  </span>
                  <span className="text-gray-500 text-sm mt-2">
                    Posted on {formattedDate}
                  </span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <div className="prose prose-indigo max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: html }} />
                </div>
              </div>

              <div className="mt-8 border-t border-gray-200 pt-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-lg font-medium text-gray-900">
                      Salary
                    </h3>
                    <p className="text-gray-600">{frontmatter.salary}</p>
                  </div>
                  <a
                    // href={frontmatter.applyLink}
                    href="https://techholding.co/careers/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Apply for this position
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Not the right job for you?</p>
            <a
              href="/jobs"
              className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Browse more jobs
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query JobDetailQuery($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
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
`;

export default JobDetailPage;

export const Head = ({ data }: JobDetailProps) => (
  <title>{data.markdownRemark.frontmatter.title} | JobBoard</title>
);
