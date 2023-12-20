import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

const baseUrl = process.env.NEXT_PUBLIC_SHORT_URL
  ? process.env.NEXT_PUBLIC_SHORT_URL
  : "";

export const EmailTemplate = ({ response }) => {
  const previewText = `Join ${process.env.NEXT_PUBLIC_SHORT_URL} to Easy upload and share a file with you FNF`;
  console.log(response, "i am from email template");
  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
            <Section className="mt-[32px]">
              {
                <Img
                  src="https://www.gravatar.com/avatar/6bfb2791b7786bbf9c62d527ef5563cc?s=192&d=identicon&r=PG"
                  width="40"
                  height="40"
                  alt="Shaheb Ali"
                  className="my-0 mx-auto"
                />
              }
              <br /> <br />
              Hi <strong>{response.receiverEmail.split("@")[0]}</strong>,
              <br />
              <br />
              <strong>{response?.userEmail.split("@")[0]}</strong>, shared a
              file with you, <br />
              <br />
              file size: <strong>{(response.size / 1080).toFixed(2)}KB</strong>
              <br /> <br />
              with additional note:
              <br />
              <strong style={{ color: "blue" }}> ({response?.note})</strong>
              <br />
              <br />
              {response?.password && (
                <p style={{ color: "red" }}>File is password protected</p>
              )}
              <br />
              <br />
              <Button href={response?.sortUrl} style={{ color: "blue" }}>
                Click to Download
              </Button>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default EmailTemplate;
