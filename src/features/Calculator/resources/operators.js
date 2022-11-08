export const initialCalc = {
  res: 0,
  sign: "",
  num: 0,
  showNum: true,
};

// export const numClickHandler = (e, calc, set) => {
//   const { num } = calc;
//   e.preventDefault();
//   const value = e.target.innerHTML;
//   if (num.toString().length < 16)
//     set({
//       ...calc,
//       num: num === 0 && value === "0" ? "0" : parseFloat(num + value),
//       showNum: true,
//     });
// };

const ops = ({ num, res, sign }, set = () => null) => ({
  C: (object) => set(initialCalc),
  "+-": () => null,
  // "%": () => {
  //   let num = num ? parseFloat(num) : 0;
  //   let res = res ? parseFloat(res) : 0;
  //   set({
  //     ...calc,
  //     num: (num /= Math.pow(100, 1)),
  //     res: (res /= Math.pow(100, 1)),
  //     sign: "",
  //   });
  // },
  "/": () => null,
  x: () => null,
  "-": () => null,
  "+": () => null,
  ".": () => null,
});
export default ops;
