import { Button, Container, MediaQuery } from "@mantine/core";
import { BasicButton } from "src/components/Layout/BasicButton";

export const GitTwitter = () => {
  return (
    <MediaQuery
      largerThan="sm"
      styles={{ display: "flex", marginTop: "101px" }}
    >
      <Container className="px-[16px]">
        <MediaQuery
          largerThan="lg"
          styles={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            width: "50%",
          }}
        >
          <ul className="mt-[61px]">
            <li className="pb-[20px] text-[26px]">GitHub</li>
            <li>test</li>
            <li className="text-center">
              <BasicButton buttonText={"View On GitHub"} />
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
          <ul className="mt-[61px]">
            <li className="pb-[20px] text-[26px]">Twitter</li>
            <li>test</li>
            <li className="text-center">
              <BasicButton buttonText={"View On Twitter"} />
            </li>
          </ul>
        </MediaQuery>
      </Container>
    </MediaQuery>
  );
};
