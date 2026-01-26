"use client";
import React, { useState, useEffect } from "react";
import { Save, Menu, X } from "lucide-react";
import { sections } from "./_components/sections";
import IntroForm from "./_components/forms/IntroForm";
import ExperienceForm from "./_components/forms/ExperienceForm";
import AboutForm from "./_components/forms/AboutForm";
import SkillsForm from "./_components/forms/SkillsForm";
import EducationForm from "./_components/forms/EducationForm";
import TestimonialsForm from "./_components/forms/TestimonialsForm";
import ContactForm from "./_components/forms/ContactForm";
import AddProjectPage from "./_components/forms/ProjectFrom/AddProject";

export default function AdminPage() {
  const [data, setData] = useState(null);
  const [activeSection, setActiveSection] = useState("intro");
  const [saving, setSaving] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    fetch("/api/portfolio")
      .then((res) => res.json())
      .then(setData);
  }, []);

  const handleSave = async () => {
    setSaving(true);
    await fetch("/api/portfolio", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setSaving(false);
    alert("Saved successfully!");
  };

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-gray-900/50 backdrop-blur-sm">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? "w-64" : "w-0"} transition-all duration-300 bg-gray-900/80 border-r border-gray-700 overflow-hidden`}>
        <div className="p-4">
          <h1 className="text-xl font-bold text-white mb-6">Portfolio CMS</h1>
          <nav className="space-y-2">
            {sections.map((section) => (
              <button key={section.id} onClick={() => setActiveSection(section.id)} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeSection === section.id ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-800"}`}>
                <section.icon size={20} />
                {section.label}
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-white p-2 hover:bg-gray-800 rounded-lg">
              {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <h2 className="text-2xl font-bold text-white capitalize">{activeSection.replace(/([A-Z])/g, " $1")}</h2>
          </div>
          <button onClick={handleSave} disabled={saving} className="flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg disabled:opacity-50">
            <Save size={20} />
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>

        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
          {activeSection === "intro" && <IntroForm data={data} setData={setData} />}
          {activeSection === "experience" && <ExperienceForm data={data} setData={setData} />}
          {activeSection === "about" && <AboutForm data={data} setData={setData} />}
          {activeSection === "skills" && <SkillsForm data={data} setData={setData} />}
          {activeSection === "education" && <EducationForm data={data} setData={setData} />}
          {activeSection === "add-projects" && <AddProjectPage data={data} setData={setData} />}
          {activeSection === "testimonials" && <TestimonialsForm data={data} setData={setData} />}
          {activeSection === "contact" && <ContactForm data={data} setData={setData} />}
        </div>
      </main>
    </div>
  );
}
