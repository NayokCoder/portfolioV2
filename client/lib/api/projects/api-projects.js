import { base_url } from "../api";

const BASE = base_url;

// GET all projects
export async function getProjects() {
  const res = await fetch(`${BASE}/projects`);

  if (!res.ok) throw new Error("GET failed");
  return res.json();
}

// POST create project
export async function createProject(formData) {
  const res = await fetch(`${BASE}/projects`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) throw new Error("POST failed");
  return res.json();
}

// PUT update project
export async function updateProject(id, formData) {
  const res = await fetch(`${BASE}/projects/${id}`, {
    method: "PUT",
    body: formData,
  });

  if (!res.ok) throw new Error("PUT failed");
  return res.json();
}

// DELETE project
export async function deleteProject(id) {
  const res = await fetch(`${BASE}/projects/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("DELETE failed");
  return true;
}
