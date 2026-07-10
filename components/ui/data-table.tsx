export type Column<T> = {
  key: keyof T | string;
  label: string;
  render?: (row: T) => React.ReactNode;
};

export function DataTable<T extends Record<string, unknown>>({ columns, rows }: { columns: Column<T>[]; rows: T[] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-white/10">
      <table className="min-w-full divide-y divide-white/10 text-left text-sm">
        <thead className="bg-white/[0.045] text-xs uppercase tracking-[0.16em] text-nexa-muted">
          <tr>
            {columns.map((column) => (
              <th key={String(column.key)} className="px-4 py-3 font-black">
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10">
          {rows.map((row, index) => (
            <tr key={String(row.id ?? index)} className="text-nexa-silver">
              {columns.map((column) => (
                <td key={String(column.key)} className="px-4 py-3 align-top">
                  {column.render ? column.render(row) : String(row[column.key] ?? "")}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
