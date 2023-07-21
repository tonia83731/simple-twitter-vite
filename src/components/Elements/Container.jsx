

export function LandingContainer({children}){
  return (
    <div className="px-[24px] tablet:grid tablet:grid-cols-12">
      <div className="col-start-5 col-span-4">{children}</div>
    </div>
  );
}