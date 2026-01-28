import InputField from "../fields/InputField";

export default function ContactForm({ data, setData }) {
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
