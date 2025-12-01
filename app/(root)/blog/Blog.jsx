import React from "react";

const Blog = () => {
  return (
    <div className="w-full py-16 flex flex-col items-center gap-8 bg-[#0d1117] text-white">
      <h2 className="text-3xl font-bold">GitHub Activity</h2>

      {/* Contribution Graph */}
      <img src="https://github-readme-activity-graph.vercel.app/graph?username=NayokCoder&theme=react-dark" alt="GitHub Activity Graph" className="rounded-lg shadow-lg max-w-full" />

      {/* Stats Card */}
      <div className="flex flex-col md:flex-row gap-6">
        <img src="https://github-readme-stats.vercel.app/api?username=NayokCoder&show_icons=true&theme=radical" alt="GitHub Stats" className="rounded-lg shadow-lg" />

        {/* Top Languages */}
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=NayokCoder&layout=compact&theme=radical" alt="Top Languages" className="rounded-lg shadow-lg" />
      </div>
    </div>
  );
};

export default Blog;
