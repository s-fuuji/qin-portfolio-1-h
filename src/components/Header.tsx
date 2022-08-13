import { TbMoon } from "react-icons/tb";

export const Header = () => {
  return (
    <div className="flex h-[65px] items-center justify-between text-[18px]">
      <p>Shimabu IT University</p>
      <ul className="flex items-center gap-[16px]">
        <li>About</li>
        <li>Blog</li>
        <li>Portfolio</li>
        <li>Contact</li>
        <li className="-mb-[3px]">
          <TbMoon />
        </li>
      </ul>
    </div>
  );
};
