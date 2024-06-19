import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

export default function () {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="Team" description="All things about the team, weekly schedules, monthly assignments and learn more about every one in the team.">
      <section
        style={{
          backgroundImage: `url(https://res.cloudinary.com/dlfu36fiw/image/upload/v1718701454/team-hero-bg_kbpnoz.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
        className="bg-white dark:bg-[#333333] bg-cover bg-blend-multiply bg-fixed"
      >
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">

          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl dark:text-primary text-white inline-flex">
            BetMGM Manila CMS Team
                    </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-white">
            Explore everything there is to know about the team: from weekly schedules and monthly assignments to gaining insights into each team member's role and background.
          </p>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link
              to="docs/builds/assets"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Get Started
            <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
            <Link
              to="/"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              <svg
                className="mr-2 -ml-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
              </svg>
              Know the Team
          </Link>
          </div>
        </div>
      </section>

      <section className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        {/* <div className="overflow-x-auto">
          <table className="daisy-table">
            <thead>
              <tr>
                <th>Member</th>
                <th>Mon</th>
                <th>Teu</th>
                <th>Wed</th>
                <th>Thu</th>
                <th>Fri</th>
                <th>Sat</th>
                <th>Sun</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="daisy-avatar">
                      <div className="daisy-mask daisy-mask-squircle w-12 h-12">
                        <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Kyle Atienza</div>
                      <div className="text-sm opacity-50">Jr. CMS Developer</div>
                    </div>
                  </div>
                </td>
                <th>
                  WFO
                </th>
                <th>
                  WFO
                </th>
                <th>
                  WFO
                </th>
                <th>
                  WFO
                </th>
                <th>
                  WFO
                </th>
                <th>
                  WFO
                </th>
                <th>
                  WFO
                </th>
              </tr>

            </tbody>
          </table>
        </div> */}
      </section>
    </Layout>
  );
}
