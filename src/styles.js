import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Helvetica Neue";
    src: url(/fonts/HelveticaNeueMedium.woff) format("woff");      
  }

  @font-face {
    font-family: "Averta";
    src: local('Averta');
    src: url(/fonts/Averta/Averta.eot);
    src: url(/fonts/Averta/Averta.eot?#iefix) format("embedded-opentype"),
      url(/fonts/Averta/Averta.woff2) format("woff2"),
      url(/fonts/Averta/Averta.woff) format("woff"),
      url(/fonts/Averta/Averta.ttf) format("truetype"),
      url(/fonts/Averta/Averta.svg#Averta) format("svg"); 
    }

  @font-face {
    font-family: "Formnest";
    src: local('Formnest');
    src: url(/fonts/Formnest/Formnest.eot?#iefix) format("embedded-opentype"), 
      url(/fonts/Formnest/Formnest.svg#Formnest) format("svg"),
      url(/fonts/Formnest/Formnest.ttf) format("truetype"),
      url(/fonts/Formnest/Formnest.woff) format("woff");
  }

  body {
    font-family: "Helvetica Neue", sans-serif;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Averta", sans-serif;
    font-weight: bold;
    margin: 0;
  }
`;
