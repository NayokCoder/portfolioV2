import InputField from "../fields/InputField";
import TextareaField from "../fields/TextareaField";
import TagsField from "../fields/TagsField";

export default function IntroForm({ data, setData }) {
  const update = (field, value) => {
    setData({ ...data, intro: { ...data.intro, [field]: value } });
  };

  return (
    <div className="space-y-6">
      <InputField label="Location" value={data.intro.location} onChange={(v) => update("location", v)} />
      <InputField label="Headline" value={data.intro.headline} onChange={(v) => update("headline", v)} />
      <TextareaField label="Bio" value={data.intro.bio} onChange={(v) => update("bio", v)} />
      <InputField
        label="Success Rate (%)"
        type="number"
        value={data.intro.successRate}
        onChange={(v) => update("successRate", parseInt(v))}
      />
      <InputField label="Projects Completed" value={data.intro.projectsCompleted} onChange={(v) => update("projectsCompleted", v)} />
      <TagsField label="Tags" tags={data.intro.tags} onChange={(v) => update("tags", v)} />
    </div>
  );
}
