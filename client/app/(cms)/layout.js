export default function CMSLayout({ children }) {
  return (
    <div className="min-h-screen">
      <video className="fixed top-0 left-0 w-full h-full object-cover -z-10" autoPlay loop muted playsInline preload="auto">
        <source src="/asset/Bg-Video/video5.mp4" type="video/mp4" />
      </video>
      {children}
    </div>
  );
}
