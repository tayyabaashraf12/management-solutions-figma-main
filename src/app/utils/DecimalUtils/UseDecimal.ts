// import { useEffect, useState } from "react";
// import { getDecimals } from "../DecimalUtils/DecimalUtility";

// const UseDecimals = () => {
//   const [decimals, setDecimals] = useState<number | null>(null);

//   const fetchDecimals = async () => {
//     const result = await getDecimals();

//     setDecimals(
//       typeof result === "bigint"
//         ? Number(result)
//         : typeof result === "number"
//         ? result
//         : (console.warn("Unexpected decimals type:", result), null)
//     );
//   };

//   useEffect(() => {
//     fetchDecimals();
//   }, []);

//   return decimals;
// };

// export default UseDecimals;

// /** UseDecimals is a custom hook that I created to fetch Decimals separately to keep my tsx component codeclean*/
