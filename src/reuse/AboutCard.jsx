export default function AboutCard({ img, title, text }) {
  return (
    <div className="flex items-start justify-between max-w-[376px]">
      <img className="mr-3" src={img} alt="image" />
      <div>
        <h3 className="text-[#244D4D] desktop:text-[16px]">{title}</h3>
        <p className="text-[#383738] desktop:text-[12px] leading-tight">{text}</p>
      </div>
    </div>
  );
}

