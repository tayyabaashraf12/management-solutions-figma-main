// import { useEffect, useState } from "react";
// import { getOwner } from "../OwnerUtils/OwnerUtility";

// const useOwner = () => {
//   const [owner, setOwner] = useState<string | null>(null);

//   const fetchOwner = async () => {
//     const fetchedOwner = await getOwner();
//     setOwner(fetchedOwner ?? null); // Safeguard against void types
//   };

//   useEffect(() => {
//     fetchOwner();
//   }, []);

//   return { owner };
// };

// export default useOwner;
