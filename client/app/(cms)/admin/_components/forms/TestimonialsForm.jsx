import InputField from "../fields/InputField";
import TextareaField from "../fields/TextareaField";

export default function TestimonialsForm({ data, setData }) {
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
            <InputField
              label="Designation"
              value={test.designation}
              onChange={(v) => updateTestimonial(test.id, "designation", v)}
            />
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
