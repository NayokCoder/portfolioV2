"use client";

import { useEffect, useState } from "react";
import { getProjects, deleteProject, updateProject } from "@/lib/api/projects/api-projects";
import ProjectsForm from "./ProjectsForm";

const AllProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [editProject, setEditProject] = useState(null);

  const fetchProjects = async () => {
    try {
      const data = await getProjects();
      setProjects(data.data || []);
    } catch (err) {
      console.error("Failed to fetch projects:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this project?")) return;
    try {
      await deleteProject(id);
      setProjects((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      console.error("Failed to delete:", err);
      alert("Failed to delete project");
    }
  };

  const handleEdit = (project) => {
    setEditingId(project._id);
    setEditProject({
      title: project.title || "",
      description: project.description || "",
      image: null,
      imagePreview: project.image ? `http://localhost:5000${project.image}` : "",
      technologies: project.technologies || [],
      liveUrl: project.liveUrl || "",
      githubUrl: project.githubUrl || "",
      featured: project.featured || false,
    });
  };

  const handleUpdate = async () => {
    try {
      const formData = new FormData();
      formData.append("title", editProject.title);
      formData.append("description", editProject.description);
      if (editProject.image) {
        formData.append("image", editProject.image);
      }
      editProject.technologies.forEach((tech) => {
        formData.append("technologies", tech);
      });
      if (editProject.liveUrl) formData.append("liveUrl", editProject.liveUrl);
      if (editProject.githubUrl) formData.append("githubUrl", editProject.githubUrl);
      formData.append("featured", editProject.featured);

      await updateProject(editingId, formData);
      setEditingId(null);
      setEditProject(null);
      fetchProjects();
      alert("Project updated successfully");
    } catch (err) {
      console.error("Failed to update:", err);
      alert("Failed to update project");
    }
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditProject(null);
  };

  if (loading) return <div className="text-gray-400">Loading projects...</div>;

  if (projects.length === 0) return <div className="text-gray-400">No projects found</div>;

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-white">All Projects</h2>
      <div className="grid gap-4">
        {projects.map((project) => (
          <div key={project._id} className="p-4 bg-gray-800 rounded-lg border border-gray-700">
            {editingId === project._id ? (
              <div className="space-y-4">
                <ProjectsForm project={editProject} setProject={setEditProject} />
                <div className="flex gap-2">
                  <button onClick={handleUpdate} className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg">
                    Save
                  </button>
                  <button onClick={handleCancelEdit} className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg">
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-start gap-4">
                {project.image && <img src={`http://localhost:5000${project.image}`} alt={project.title} className="w-20 h-20 object-cover rounded-lg" />}
                <div className="flex-1">
                  <h3 className="text-white font-medium">{project.title}</h3>
                  <p className="text-gray-400 text-sm line-clamp-2">{project.description}</p>
                  {project.technologies?.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="px-2 py-0.5 bg-gray-700 text-gray-300 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="flex gap-2">
                  <button onClick={() => handleEdit(project)} className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(project._id)} className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-sm rounded">
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
