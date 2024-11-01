import { extendTheme } from "@chakra-ui/react";

export const brandColors = {
  orange: `#EC2E07`,
  darkOrange: `rgba(228, 108, 30, 0.3)`,
  black: `#0E1418`,
  red: `#F5253D`,
  green: `#419361`,
  white: `#ffffff`,
  gray: `#1f1f1f`,
  blue: "#9EB4C7",
  darkBrown: "#2B1912",
  lightBrown: "#D7D3D1",
  yellow: "#FFF4B6"
};

const theme = extendTheme({
  components: {
    Heading: {
      baseStyle: {
        fontFamily: "Rae",
        fontWeight: "normal",
        color: brandColors.yellow,
        textTransform: 'uppercase',
      },
      sizes: {},
      variants: {},
    },
    Text: {
      baseStyle: {
        fontFamily: "Raleway",
        fontSize: "1rem",
        lineHeight: "26px",
        color: brandColors.darkBrown,
      },
      sizes: {},
      variants: {},
    },
    ListItem: {
      baseStyle: {
        fontFamily: "Raleway",
        fontSize: "1rem",
        lineHeight: "26px",
        color: brandColors.darkBrown,
      },
      sizes: {},
      variants: {},
    },
    Link: {
      baseStyle: {
        fontFamily: "Raleway",
        fontSize: "1rem",
        lineHeight: "26px",
        color: brandColors.yellow,
      },
      sizes: {},
      variants: {},
    },
    Button: {
      baseStyle: {
        fontFamily: "Raleway",
        fontSize: "1rem",
        lineHeight: "1.25rem",
        fontWeight: "extrabold",
        textTransform: 'uppercase',
        py: '1.125rem',
        minHeight: '54px',
        borderRadius: '27px',
      },
      sizes: {},
      variants: {
        'outline': {
          color: brandColors.orange,
          borderColor: brandColors.darkBrown,
          px: '3.5rem',
        },
      },
    },
  },
  fonts: {
    body: `'Raleway', sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: brandColors.white,
        color: brandColors.yellow,
      },
    },
  },
  colors: {
    brand: {
      black: brandColors.black,
      white: brandColors.white,
      orange: brandColors.orange,
      red: brandColors.red,
      green: brandColors.green,
      darkOrange: brandColors.darkOrange,
      gray: brandColors.gray,
      blue: brandColors.blue,
      darkBrown: brandColors.darkBrown,
      yellow: brandColors.yellow,
      lightBrown: brandColors.lightBrown,
    },
  },
});

export default theme;
