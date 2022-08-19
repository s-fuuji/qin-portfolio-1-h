import { Container, Input, Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { BasicButton } from "src/components/Layout/BasicButton";

const contact = () => {
  const form = useForm({
    initialValues: {
      email: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <div>
      <Container className="mt-[40px] px-[16px]">
        <form className="flex flex-col gap-[24px]">
          <p className="pb-[20px] text-[26px]">About</p>
          <TextInput
            withAsterisk
            label="Email"
            placeholder="your@email.com"
            {...form.getInputProps("Email")}
          />
          <TextInput
            withAsterisk
            label="Name"
            placeholder="Taro Yamada"
            {...form.getInputProps("Name")}
          />
          <Textarea
            withAsterisk
            label="Your Message"
            placeholder="I want to order your goods"
            {...form.getInputProps("Yout Message")}
          />
          <div className="text-center">
            <BasicButton buttonText={"Send message"} />
          </div>
        </form>
      </Container>
    </div>
  );
};

export default contact;
