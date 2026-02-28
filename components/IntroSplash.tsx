"use client";

export default function IntroSplash() {
  return (
    <section
      className="relative flex w-full items-center justify-center bg-secondary"
      style={{
        minHeight: "100vh",
        backgroundImage: "url(/hero-logo.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
      aria-label="Agro SouthWest"
    />
  );
}

