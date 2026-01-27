import InputField from "../fields/InputField";
import TextareaField from "../fields/TextareaField";
import TagsField from "../fields/TagsField";

export default function AboutForm({ data, setData }) {
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
