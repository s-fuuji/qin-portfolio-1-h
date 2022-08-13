import { Button, MediaQuery } from "@mantine/core";

export const Blog = () => {
  return (
    <MediaQuery
      largerThan="sm"
      styles={{ marginTop: "80px", padding: "0 10px" }}
    >
      <div>
        <ul className="flex flex-col gap-[24px]">
          <li className="pb-[20px] text-[26px]">Blog</li>
          {[...Array(5)].map(() => {
            return (
              <li>
                <ul className="flex flex-col gap-[8px]">
                  <li className="text-[22px]">This is a header</li>
                  <li className="text-[16px]">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit mollit
                  </li>
                  <li className="text-[12px]">2022.7.11</li>
                </ul>
              </li>
            );
          })}
          <li className="text-center">
            <Button color="dark" radius="xl">
              View All
            </Button>
          </li>
        </ul>
      </div>
    </MediaQuery>
  );
};
