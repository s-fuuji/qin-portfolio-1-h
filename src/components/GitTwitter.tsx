import { Button, MediaQuery } from "@mantine/core";

export const GitTwitter = () => {
  return (
    <MediaQuery
      largerThan="sm"
      styles={{ display: "flex", marginTop: "101px" }}
    >
      <div>
        <MediaQuery
          largerThan="lg"
          styles={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            width: "50%",
          }}
        >
          <ul>
            <li className="pb-[20px] text-[26px]">GitHub</li>
            <li>test</li>
            <li className="text-center">
              <Button color="dark" radius="xl">
                View On GitHub
              </Button>
            </li>
          </ul>
        </MediaQuery>
        <MediaQuery
          largerThan="lg"
          styles={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            width: "50%",
          }}
        >
          <ul className="flex flex-col gap-[24px]">
            <li className="pb-[20px] text-[26px]">Twitter</li>
            <li>test</li>
            <li className="text-center">
              <Button color="dark" radius="xl">
                View On Twitter
              </Button>
            </li>
          </ul>
        </MediaQuery>
      </div>
    </MediaQuery>
  );
};
