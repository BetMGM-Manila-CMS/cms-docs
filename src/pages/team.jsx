import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

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
        </div>
      </section>

      <section className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="overflow-x-auto">
          <table className="daisy-table">
            {/* head */}
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
              {/* row 1 */}
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
        </div>
      </section>
    </Layout>
  );
}
