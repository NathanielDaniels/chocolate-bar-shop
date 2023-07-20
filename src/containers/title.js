import { Title } from "../components";

export function TitleContainer() {
  return (
    <Title>
      <div className="titleContent">
        <Title.Main>Crazy About Chocolate</Title.Main>
        <Title.Sub>
          <span className="serious">Serious</span> <span>About </span>
          <span className="people">People.</span>
        </Title.Sub>
        <Title.Quote>
          "100% slave free becomes the norm in chocolate"
        </Title.Quote>
      </div>
    </Title>
  );
}
