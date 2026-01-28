import InputField from "../../fields/InputField";
import TagsField from "../../fields/TagsField";
import TextareaField from "../../fields/TextareaField";

export default function ProjectsForm({ project, setProject }) {
  const updateField = (field, value) => {
    setProject((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleImageChange = (file) => {
    if (!file) return;

    const preview = URL.createObjectURL(file);

    setProject((prev) => ({
      ...prev,
      image: file, // actual file
      imagePreview: preview, // preview url
    }));
  };

  return (
    <div className="space-y-6 p-6 bg-gray-900/50 rounded-xl border border-gray-700">
      {/* 🔥 IMAGE UPLOAD */}
      <div className="space-y-2">
        <label className="text-sm text-gray-300">Project Image</label>

        <div className="flex items-center gap-4">
          <label className="cursor-pointer flex items-center justify-center w-40 h-40 border-2 border-dashed border-gray-500 rounded-xl hover:border-blue-500 transition">
            {project.imagePreview ? <img src={project.imagePreview} alt="Preview" className="w-full h-full object-cover rounded-xl" /> : <span className="text-gray-400 text-sm text-center px-2">Click to upload image</span>}

            <input type="file" accept="image/*" hidden onChange={(e) => handleImageChange(e.target.files[0])} />
          </label>

          {project.image && (
            <button
              type="button"
              onClick={() =>
                setProject((prev) => ({
                  ...prev,
                  image: null,
                  imagePreview: "",
                }))
              }
              className="text-red-400 hover:text-red-300 text-sm"
            >
              Remove
            </button>
          )}
        </div>
      </div>

      {/* 🔹 OTHER FIELDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField label="Title" value={project.title} onChange={(v) => updateField("title", v)} />

        <InputField label="Live URL" value={project.liveUrl} onChange={(v) => updateField("liveUrl", v)} />

        <InputField label="GitHub URL" value={project.githubUrl} onChange={(v) => updateField("githubUrl", v)} />
      </div>

      <TextareaField label="Description" value={project.description} onChange={(v) => updateField("description", v)} />

      <TagsField label="Technologies" tags={project.technologies} onChange={(v) => updateField("technologies", v)} />

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="featured"
          checked={project.featured}
          onChange={(e) => updateField("featured", e.target.checked)}
          className="w-4 h-4"
        />
        <label htmlFor="featured" className="text-sm text-gray-300">Featured Project</label>
      </div>
    </div>
  );
}
