/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        100: "100% 100%"
      },
      colors: {
        orange: "#FF6600",
        blue: "#5d5ad8",
        red: "#780a24",
        gray: "#707070",
        dark: "#0E0E0E"
      },
      fontSize: {
        96: "96px",
        82: "82px",
        73: "73px",
        64: "64px",
        56: "56px",
        55: "55px",
        53: "53px",
        52: "52px",
        51: "51px",
        47: "47px",
        46: "46px",
        43: "43px",
        42: "42px",
        39: "39px",
        38: "38px",
        37: "37px",
        36: "36px",
        34: "34px",
        33: "33px",
        32: "32px",
        31: "31px",
        30: "30px",
        28: "28px",
        27: "27px",
        26: "26px",
        25: "25px",
        24: "24px",
        23: "23px",
        22: "22px",
        21: "21px",
        20: "20px",
        19: "19px",
        18: "18px",
        16: "16px",
        14: "14px",
        12: "12px",
        10: "10px"
      },
      letterSpacing: {
        wide: "10px",
        standard: "4px"
      }
    }
  },
  plugins: []
};
