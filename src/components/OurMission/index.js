import { Container, Info } from "./styles/ourMission";

export default function OurMission({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

OurMission.Info = function OurMissionInfo({ children, ...restProps }) {
  return <Info {...restProps}>{children}</Info>;
};
