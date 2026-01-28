import InputField from "../fields/InputField";

export default function ExperienceForm({ data, setData }) {
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
