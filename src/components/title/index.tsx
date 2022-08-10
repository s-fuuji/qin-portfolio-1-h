import { FaFacebook, FaRss, FaTwitter } from "react-icons/fa";

export const Title = () => {
  return (
    <div className="mx-[calc(50%-50vw)] bg-pink-6 px-[calc(50vw-50%)] py-[85.5px] text-white">
      <div className="flex items-center  justify-between">
        <div>
          <p className="text-[36px]">Shimabu IT University</p>
          <p className="text-[24px]">
            しまぶーのポートフォリオのためのページです
          </p>
        </div>
        <ul className="flex gap-[10px]">
          <li>
            <FaTwitter />
          </li>
          <li>
            <FaFacebook />
          </li>
          <li>
            <FaRss />
          </li>
        </ul>
      </div>
    </div>
  );
};
