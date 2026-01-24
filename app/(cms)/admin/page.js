"use client";
import React, { useState, useEffect } from "react";
import {
  Home, User, Briefcase, FolderOpen, MessageSquare,
  GraduationCap, Mail, Save, Menu, X, Code
} from "lucide-react";

const sections = [
  { id: "intro", label: "Introduction", icon: Home },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "about", label: "About Me", icon: User },
  { id: "skills", label: "Skills", icon: Code },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "projects", label: "Projects", icon: FolderOpen },
  { id: "testimonials", label: "Testimonials", icon: MessageSquare },
  { id: "contact", label: "Contact", icon: Mail },
];

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
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  activeSection === section.id
                    ? "bg-blue-600 text-white"
                    : "text-gray-300 hover:bg-gray-800"
                }`}
              >
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
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-white p-2 hover:bg-gray-800 rounded-lg"
            >
              {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <h2 className="text-2xl font-bold text-white capitalize">
              {activeSection.replace(/([A-Z])/g, " $1")}
            </h2>
          </div>
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg disabled:opacity-50"
          >
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
          {activeSection === "projects" && <ProjectsForm data={data} setData={setData} />}
          {activeSection === "testimonials" && <TestimonialsForm data={data} setData={setData} />}
          {activeSection === "contact" && <ContactForm data={data} setData={setData} />}
        </div>
      </main>
    </div>
  );
}

// Form Components
function IntroForm({ data, setData }) {
  const update = (field, value) => {
    setData({ ...data, intro: { ...data.intro, [field]: value } });
  };

  return (
    <div className="space-y-6">
      <InputField label="Location" value={data.intro.location} onChange={(v) => update("location", v)} />
      <InputField label="Headline" value={data.intro.headline} onChange={(v) => update("headline", v)} />
      <TextareaField label="Bio" value={data.intro.bio} onChange={(v) => update("bio", v)} />
      <InputField label="Success Rate (%)" type="number" value={data.intro.successRate} onChange={(v) => update("successRate", parseInt(v))} />
      <InputField label="Projects Completed" value={data.intro.projectsCompleted} onChange={(v) => update("projectsCompleted", v)} />
      <TagsField label="Tags" tags={data.intro.tags} onChange={(v) => update("tags", v)} />
    </div>
  );
}

function ExperienceForm({ data, setData }) {
  const addExperience = () => {
    const newExp = { id: Date.now(), company: "", role: "", date: "" };
    setData({ ...data, experience: [...data.experience, newExp] });
  };

  const updateExp = (id, field, value) => {
    setData({
      ...data,
      experience: data.experience.map((e) => (e.id === id ? { ...e, [field]: value } : e)),
    });
  };

  const removeExp = (id) => {
    setData({ ...data, experience: data.experience.filter((e) => e.id !== id) });
  };

  return (
    <div className="space-y-6">
      {data.experience.map((exp, idx) => (
        <div key={exp.id} className="p-4 bg-gray-900/50 rounded-lg border border-gray-600">
          <div className="flex justify-between items-center mb-4">
            <span className="text-white font-medium">Experience #{idx + 1}</span>
            <button onClick={() => removeExp(exp.id)} className="text-red-400 hover:text-red-300">Remove</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <InputField label="Company" value={exp.company} onChange={(v) => updateExp(exp.id, "company", v)} />
            <InputField label="Role" value={exp.role} onChange={(v) => updateExp(exp.id, "role", v)} />
            <InputField label="Date" value={exp.date} onChange={(v) => updateExp(exp.id, "date", v)} />
          </div>
        </div>
      ))}
      <button onClick={addExperience} className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg">
        + Add Experience
      </button>
    </div>
  );
}

function AboutForm({ data, setData }) {
  const update = (field, value) => {
    setData({ ...data, about: { ...data.about, [field]: value } });
  };

  return (
    <div className="space-y-6">
      <InputField label="Heading" value={data.about.heading} onChange={(v) => update("heading", v)} />
      <TextareaField label="Description" value={data.about.description} onChange={(v) => update("description", v)} />
      <TagsField label="Strengths" tags={data.about.strengths} onChange={(v) => update("strengths", v)} />
      <TagsField label="Technologies" tags={data.about.technologies} onChange={(v) => update("technologies", v)} />
    </div>
  );
}

function SkillsForm({ data, setData }) {
  const addSkill = () => {
    const newSkill = { id: Date.now(), logo: "", name: "", proficiency: "Beginner" };
    setData({ ...data, skills: [...data.skills, newSkill] });
  };

  const updateSkill = (id, field, value) => {
    setData({
      ...data,
      skills: data.skills.map((s) => (s.id === id ? { ...s, [field]: value } : s)),
    });
  };

  const removeSkill = (id) => {
    setData({ ...data, skills: data.skills.filter((s) => s.id !== id) });
  };

  return (
    <div className="space-y-6">
      {data.skills.map((skill, idx) => (
        <div key={skill.id} className="p-4 bg-gray-900/50 rounded-lg border border-gray-600">
          <div className="flex justify-between items-center mb-4">
            <span className="text-white font-medium">Skill #{idx + 1}</span>
            <button onClick={() => removeSkill(skill.id)} className="text-red-400 hover:text-red-300">Remove</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <InputField label="Name" value={skill.name} onChange={(v) => updateSkill(skill.id, "name", v)} />
            <InputField label="Logo Path" value={skill.logo} onChange={(v) => updateSkill(skill.id, "logo", v)} />
            <SelectField
              label="Proficiency"
              value={skill.proficiency}
              options={["Beginner", "Intermediate", "Advanced"]}
              onChange={(v) => updateSkill(skill.id, "proficiency", v)}
            />
          </div>
        </div>
      ))}
      <button onClick={addSkill} className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg">
        + Add Skill
      </button>
    </div>
  );
}

function EducationForm({ data, setData }) {
  const updateCert = (field, value) => {
    setData({
      ...data,
      education: { ...data.education, certificate: { ...data.education.certificate, [field]: value } },
    });
  };

  const addDegree = () => {
    const newDeg = { id: Date.now(), degree: "", institution: "", period: "", cgpa: "" };
    setData({ ...data, education: { ...data.education, degrees: [...data.education.degrees, newDeg] } });
  };

  const updateDegree = (id, field, value) => {
    setData({
      ...data,
      education: {
        ...data.education,
        degrees: data.education.degrees.map((d) => (d.id === id ? { ...d, [field]: value } : d)),
      },
    });
  };

  const removeDegree = (id) => {
    setData({
      ...data,
      education: { ...data.education, degrees: data.education.degrees.filter((d) => d.id !== id) },
    });
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">Certificate</h3>
        <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-600 space-y-4">
          <InputField label="Title" value={data.education.certificate.title} onChange={(v) => updateCert("title", v)} />
          <InputField label="Organization" value={data.education.certificate.organization} onChange={(v) => updateCert("organization", v)} />
          <InputField label="Date" value={data.education.certificate.date} onChange={(v) => updateCert("date", v)} />
          <TextareaField label="Description" value={data.education.certificate.description} onChange={(v) => updateCert("description", v)} />
          <InputField label="Certificate Link" value={data.education.certificate.link} onChange={(v) => updateCert("link", v)} />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-4">Education</h3>
        {data.education.degrees.map((deg, idx) => (
          <div key={deg.id} className="p-4 bg-gray-900/50 rounded-lg border border-gray-600 mb-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-white font-medium">Degree #{idx + 1}</span>
              <button onClick={() => removeDegree(deg.id)} className="text-red-400 hover:text-red-300">Remove</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField label="Degree" value={deg.degree} onChange={(v) => updateDegree(deg.id, "degree", v)} />
              <InputField label="Institution" value={deg.institution} onChange={(v) => updateDegree(deg.id, "institution", v)} />
              <InputField label="Period" value={deg.period} onChange={(v) => updateDegree(deg.id, "period", v)} />
              <InputField label="CGPA" value={deg.cgpa} onChange={(v) => updateDegree(deg.id, "cgpa", v)} />
            </div>
          </div>
        ))}
        <button onClick={addDegree} className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg">
          + Add Education
        </button>
      </div>
    </div>
  );
}

function ProjectsForm({ data, setData }) {
  const addProject = () => {
    const newProj = { id: Date.now(), name: "", year: 2024, description: "", tags: [], image: "", live_link: "" };
    setData({ ...data, projects: [...data.projects, newProj] });
  };

  const updateProject = (id, field, value) => {
    setData({
      ...data,
      projects: data.projects.map((p) => (p.id === id ? { ...p, [field]: value } : p)),
    });
  };

  const removeProject = (id) => {
    setData({ ...data, projects: data.projects.filter((p) => p.id !== id) });
  };

  return (
    <div className="space-y-6">
      {data.projects.map((proj, idx) => (
        <div key={proj.id} className="p-4 bg-gray-900/50 rounded-lg border border-gray-600">
          <div className="flex justify-between items-center mb-4">
            <span className="text-white font-medium">Project #{idx + 1}</span>
            <button onClick={() => removeProject(proj.id)} className="text-red-400 hover:text-red-300">Remove</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField label="Name" value={proj.name} onChange={(v) => updateProject(proj.id, "name", v)} />
            <InputField label="Year" type="number" value={proj.year} onChange={(v) => updateProject(proj.id, "year", parseInt(v))} />
            <InputField label="Image Path" value={proj.image} onChange={(v) => updateProject(proj.id, "image", v)} />
            <InputField label="Live Link" value={proj.live_link} onChange={(v) => updateProject(proj.id, "live_link", v)} />
          </div>
          <div className="mt-4">
            <TextareaField label="Description" value={proj.description} onChange={(v) => updateProject(proj.id, "description", v)} />
          </div>
          <div className="mt-4">
            <TagsField label="Tags" tags={proj.tags} onChange={(v) => updateProject(proj.id, "tags", v)} />
          </div>
        </div>
      ))}
      <button onClick={addProject} className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg">
        + Add Project
      </button>
    </div>
  );
}

function TestimonialsForm({ data, setData }) {
  const addTestimonial = () => {
    const newTest = { id: Date.now(), quote: "", name: "", designation: "", src: "" };
    setData({ ...data, testimonials: [...data.testimonials, newTest] });
  };

  const updateTestimonial = (id, field, value) => {
    setData({
      ...data,
      testimonials: data.testimonials.map((t) => (t.id === id ? { ...t, [field]: value } : t)),
    });
  };

  const removeTestimonial = (id) => {
    setData({ ...data, testimonials: data.testimonials.filter((t) => t.id !== id) });
  };

  return (
    <div className="space-y-6">
      {data.testimonials.map((test, idx) => (
        <div key={test.id} className="p-4 bg-gray-900/50 rounded-lg border border-gray-600">
          <div className="flex justify-between items-center mb-4">
            <span className="text-white font-medium">Testimonial #{idx + 1}</span>
            <button onClick={() => removeTestimonial(test.id)} className="text-red-400 hover:text-red-300">Remove</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField label="Name" value={test.name} onChange={(v) => updateTestimonial(test.id, "name", v)} />
            <InputField label="Designation" value={test.designation} onChange={(v) => updateTestimonial(test.id, "designation", v)} />
          </div>
          <div className="mt-4">
            <InputField label="Image URL" value={test.src} onChange={(v) => updateTestimonial(test.id, "src", v)} />
          </div>
          <div className="mt-4">
            <TextareaField label="Quote" value={test.quote} onChange={(v) => updateTestimonial(test.id, "quote", v)} />
          </div>
        </div>
      ))}
      <button onClick={addTestimonial} className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg">
        + Add Testimonial
      </button>
    </div>
  );
}

function ContactForm({ data, setData }) {
  const update = (field, value) => {
    setData({ ...data, contact: { ...data.contact, [field]: value } });
  };

  return (
    <div className="space-y-6">
      <InputField label="Heading" value={data.contact.heading} onChange={(v) => update("heading", v)} />
      <InputField label="Email Placeholder" value={data.contact.emailPlaceholder} onChange={(v) => update("emailPlaceholder", v)} />
      <InputField label="Phone Placeholder" value={data.contact.phonePlaceholder} onChange={(v) => update("phonePlaceholder", v)} />
      <InputField label="Message Placeholder" value={data.contact.messagePlaceholder} onChange={(v) => update("messagePlaceholder", v)} />
      <InputField label="Button Text" value={data.contact.buttonText} onChange={(v) => update("buttonText", v)} />
      <InputField label="Marquee Text" value={data.contact.marqueeText} onChange={(v) => update("marqueeText", v)} />
    </div>
  );
}

// Reusable UI Components
function InputField({ label, value, onChange, type = "text" }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-2">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 bg-gray-900 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  );
}

function TextareaField({ label, value, onChange }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-2">{label}</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={4}
        className="w-full px-4 py-2 bg-gray-900 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  );
}

function SelectField({ label, value, options, onChange }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-2">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 bg-gray-900 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}

function TagsField({ label, tags, onChange }) {
  const [input, setInput] = useState("");

  const addTag = () => {
    if (input.trim() && !tags.includes(input.trim())) {
      onChange([...tags, input.trim()]);
      setInput("");
    }
  };

  const removeTag = (tag) => {
    onChange(tags.filter((t) => t !== tag));
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-2">{label}</label>
      <div className="flex flex-wrap gap-2 mb-2">
        {tags.map((tag) => (
          <span key={tag} className="flex items-center gap-1 px-3 py-1 bg-blue-600/30 text-blue-300 rounded-full text-sm">
            {tag}
            <button onClick={() => removeTag(tag)} className="hover:text-white">&times;</button>
          </span>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
          placeholder="Add tag..."
          className="flex-1 px-4 py-2 bg-gray-900 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button onClick={addTag} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">Add</button>
      </div>
    </div>
  );
}
