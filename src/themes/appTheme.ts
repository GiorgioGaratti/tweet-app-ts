import { extendTheme } from "@chakra-ui/react";

const appTheme: Record<string,any>  = extendTheme({
    styles: {
        global: {
            body: {
                bg: "twitter.400",
                color: "#ffffff"
            }
        }
    },
    colors: {
        twitter: {
            50: '#dcf1ff',
            100: '#b1d8ff',
            200: '#83c2fa',
            300: '#55b0f5',
            400: '#28a0f1',
            500: '#0e79d7',
            600: '#0152a8',
            700: '#00337a',
            800: '#00194c',
            900: '#00061f',
        }
    }
});

export default appTheme;