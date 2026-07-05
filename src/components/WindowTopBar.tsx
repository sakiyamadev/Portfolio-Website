export function WindowTopBar() {
  return (
    <div className="flex h-11 shrink-0 items-center border-b border-[#2a2a2a] bg-[#171717] px-4">
      <div className="flex items-center gap-2" aria-hidden="true">
        <span className="h-3.5 w-3.5 rounded-full bg-[#c25b56]" />
        <span className="h-3.5 w-3.5 rounded-full bg-[#c6a85b]" />
        <span className="h-3.5 w-3.5 rounded-full bg-[#5ca66a]" />
      </div>
    </div>
  );
}
