import styled from "styled-components/macro";

export const Container = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  display: block;
`;

export const Info = styled.article`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  color: #fff;
  margin-bottom: 10em;
  gap: 1em;
  padding: 0 25px;
  ${"" /* h3 {} */}
  img {
    width: clamp(300px, 45vw, 500px);
  }
  ${
    "" /* scroll-snap-type: y mandatory;
  scroll-snap-align: center;
  scroll-snap-stop: always; */
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    margin-bottom: 4em;
    gap: 0;
    .left {
      order: 1;
    }
    .right {
      order: 2;
    }
  }
  .right {
    flex-direction: column;
    align-items: flex-start;
    max-width: 60ch;
    line-height: 1.4;
    letter-spacing: 0.2px;
    padding: 20px;
    h3 {
      padding-bottom: 10px;
      font-size: 2rem;
    }
  }

  .left,
  .right {
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
      ${"" /* width: 80%; */}
      ${"" /* margin: 0 auto; */}
      img {
        ${"" /* width: 60%; */}
        ${"" /* max-width: 60vw */}
      }
    }
    @media (max-width: 600px) {
      ${"" /* height: 100%; */}
      ${"" /* width: 100%; */}
      img {
        ${"" /* width: 100%; */}
      }
    }
  }
`;
