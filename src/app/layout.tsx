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
    <div className="flex flex-col justify-between h-screen">
      <div className="flex flex-col w-full">
        {memoizedHeader}
        {children}
      </div>
      {memoizedFooter}
    </div>
  );
}
