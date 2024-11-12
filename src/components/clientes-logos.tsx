import Marquee from "react-fast-marquee";

const LOGOS = [
  "logo-cemir-color",
  "unesi-logo-color",
  "zeyma-logo-color",
  "gicabeco-logo",
];

export default function ClientsLogos() {
  return (
    <Marquee gradient autoFill>
      {LOGOS.map((logo) => (
        <img
          src={`logos/${logo}.webp`}
          alt={logo}
          title={logo}
          loading="lazy"
          className="h-20 ml-20"
        />
      ))}
    </Marquee>
  );
}
