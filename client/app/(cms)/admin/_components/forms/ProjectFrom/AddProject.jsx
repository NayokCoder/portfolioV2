"use client";

import { useState } from "react";
import ProjectsForm from "./ProjectsForm";
import { createProject } from "@/lib/api/projects/api-projects";
import AllProjects from "./AllProjects";

export default function AddProjectPage() {
  const [project, setProject] = useState({
    title: "",
    description: "",
    image: null,
    imagePreview: "",
    technologies: [],
    liveUrl: "",
    githubUrl: "",
    featured: false,
  });

  const handleSave = async () => {
    try {
      const formData = new FormData();
      formData.append("title", project.title);
      formData.append("description", project.description);
      if (project.image) {
        formData.append("image", project.image);
      }
      project.technologies.forEach((tech) => {
        formData.append("technologies", tech);
      });
      if (project.liveUrl) formData.append("liveUrl", project.liveUrl);
      if (project.githubUrl) formData.append("githubUrl", project.githubUrl);
      formData.append("featured", project.featured);

      await createProject(formData);
      alert("Project added successfully ✅");

      // reset form
      setProject({
        title: "",
        description: "",
        image: null,
        imagePreview: "",
        technologies: [],
        liveUrl: "",
        githubUrl: "",
        featured: false,
      });
      console.log("Project added:", project);
    } catch (err) {
      console.error(err);
      alert("Failed to add project ❌");
    }
  };

  return (
    <div className="space-y-6">
      <ProjectsForm project={project} setProject={setProject} />

      <button onClick={handleSave} className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl">
        Save Project
      </button>

      <AllProjects />
    </div>
  );
}
