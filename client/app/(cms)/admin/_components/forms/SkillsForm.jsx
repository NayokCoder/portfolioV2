import InputField from "../fields/InputField";
import SelectField from "../fields/SelectField";

export default function SkillsForm({ data, setData }) {
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
