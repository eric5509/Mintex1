export default function TokenCreated() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center text-center">
      <img src="/check.svg" alt="" />
      <p className="text-base text-primary font-semibold">Token Creation Successful</p>
      <div className="w-[250px]">
        <p className="text-secondary">
          Your token has been successfully created and is now available in your
          profile
        </p>
      </div>
    </div>
  );
}
