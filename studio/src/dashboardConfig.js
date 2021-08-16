export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "611a6d9269bb555ceec2e533",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-732axjw9",
                  apiId: "94f9c1f2-6d77-4321-adee-03fbcac0259b",
                },
                {
                  buildHookId: "611a6d92fc2c0bd0ce6c64f8",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-5gzp91dm",
                  apiId: "53e47b1b-56f7-431d-bb08-a62c195feb9d",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/cloudcrcr/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-5gzp91dm.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
