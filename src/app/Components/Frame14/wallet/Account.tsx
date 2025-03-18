import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from "wagmi";

export function Account() {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: ensName } = useEnsName({ address });
  const { data: ensAvatar } = useEnsAvatar({ name: ensName! });

  return (
    <div className="bg-[#FFFFFF] h-20 flex flex-col">
      {ensAvatar && <img alt="ENS Avatar" src={ensAvatar} />}
      {address && (
        <div className="text-center border border-red-950 h-6 w-full">
          {ensName ? `${ensName} (${address})` : address}
        </div>
      )}
      <div className="text-center border border-red-950 h-6 w-full">
        Account Connected
      </div>
      <button
        className="w-[300px] h-[40px] bg-[#263238]
       text-[#FFFFFF] rounded-[6px] py-[8px] px-[12px] mx-auto mt-2"
        onClick={() => disconnect()}
      >
        Disconnect
      </button>
    </div>
  );
}
