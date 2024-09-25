import Button from "./Button";

export default function TonCharge() {
  return (
    <div>
      <div className="flex text-center text-secondary flex-col gap-4 w-[250px]">
        <img src="/mainLogo.svg" className="h-[34px]" alt="" />
        <p>
          <span className="font-semibold text-primary">Mintx</span> wants to
          perform on wallet UGnxfddd847..Uv-ld
        </p>{" "}
        <p>2 TON(without fees) will be deducted from your TON wallet balance</p>
        <Button title="Allow transaction" />
        <p className="font-bold">0.1 TON is charged as trading fee</p>
      </div>
    </div>
  );
}
