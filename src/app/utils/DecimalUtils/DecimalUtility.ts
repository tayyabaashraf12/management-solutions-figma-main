// import contractInstance from "../VoteContractHelper";

// export const getDecimals = async (): Promise<unknown> => {
//   try {
//     const Decimals = await contractInstance.methods.decimals().call();
//     console.log(" Decimals Value are in console:", Decimals);
//     return Decimals;
//   } catch (error) {
//     console.error("Error fetching contract decimals:", error);
//     return null;
//   }
// };

/**Decimals represents the decimal places present in token*/

/**we have created getDecimals arrow function in which we have called decimals method
 * of VoteContract ,and that method is present in Contract ABI (Application Binary Interface),
 * and this method will return user decimals
 */
