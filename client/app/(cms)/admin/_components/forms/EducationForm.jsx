import InputField from "../fields/InputField";
import TextareaField from "../fields/TextareaField";

export default function EducationForm({ data, setData }) {
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
          <InputField
            label="Organization"
            value={data.education.certificate.organization}
            onChange={(v) => updateCert("organization", v)}
          />
          <InputField label="Date" value={data.education.certificate.date} onChange={(v) => updateCert("date", v)} />
          <TextareaField
            label="Description"
            value={data.education.certificate.description}
            onChange={(v) => updateCert("description", v)}
          />
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
