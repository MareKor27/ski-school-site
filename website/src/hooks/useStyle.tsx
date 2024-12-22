type SFunction = (
  local: string | null | undefined,
  global?: string | null | undefined
) => string | undefined;

export default function useStyles(module: Record<string, string>): SFunction {
  return (local, global) => {
    const hashed = local
      ?.split(/\s+/)
      .map((str) => module[str])
      .reduce((list, c) => (!list ? c : c ? `${list} ${c}` : list));
    const className = `${global ?? ""} ${hashed ?? ""}`.trim();
    return className ? className : undefined;
  };
}
