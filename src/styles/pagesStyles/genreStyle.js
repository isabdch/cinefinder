import styled from "styled-components";

export const IndexGenre = styled.main`
  background: ${(props) =>
    props.dark ? props.theme.colors.onyx : props.theme.colors.white};
  padding: 20px;
  width: 100%;

  .title {
    ${(props) => props.theme.utils.flexUtil("row", "", "center")};
    margin-top: 20px;
    margin-bottom: 40px;

    h1 {
      color: ${(props) =>
        props.dark
          ? props.theme.colors.blueJeans
          : props.theme.colors.redCrayola};
      font-size: ${(props) => props.theme.fontSizes.fs_largeXx};
      text-transform: capitalize;
    }

    hr {
      height: 1px;
      border: 1px solid
        ${(props) =>
          props.dark
            ? props.theme.colors.blueJeans
            : props.theme.colors.redCrayola};
      flex: 1;
      margin-left: 20px;
      margin-bottom: -5px;
    }
  }

  .cards {
    ${(props) => props.theme.utils.flexUtil("row wrap", "center")};

    a {
      margin: 10px;
    }
  }
`;
