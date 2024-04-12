export function Layout({
  memoizedHeader,
  memoizedFooter,
  children,
}: {
  memoizedHeader: JSX.Element;
  memoizedFooter: JSX.Element;
  children: JSX.Element;
}) {
  return (
    <div className="flex flex-col justify-between h-screen space-y-2">
      <div className="flex flex-col w-full">
        {memoizedHeader}
        <div className="flex flex-col mt-20 items-center">{children}</div>
        {memoizedFooter}
      </div>
    </div>
  );
}
