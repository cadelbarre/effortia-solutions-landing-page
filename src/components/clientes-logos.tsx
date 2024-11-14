import Marquee from "react-fast-marquee";

const LOGOS = [
  "logo-cemir-color",
  "unesi-logo-color",
  "colni-logo",
  "zeyma-logo-color",
  "gicabeco-logo",
];

export default function ClientsLogos() {
  return (
    <Marquee gradient autoFill>
      {LOGOS.map((logo) => (
        <img
          key={logo}
          src={`logos/${logo}.webp`}
          alt={logo}
          title={logo}
          loading="lazy"
          className="h-14 ml-10 xl:h-20 xl:ml-20"
        />
      ))}
    </Marquee>
  );
}
