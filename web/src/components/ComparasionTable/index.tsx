import { useTranslation } from "react-i18next";

export function ComparisonTable() {
  const { t } = useTranslation(); // quita esto si no usas i18n aquí

  const columns = [
    t("comparationTable.columns.0"),
     t("comparationTable.columns.1"),
     t("comparationTable.columns.2"),
     t("comparationTable.columns.3"),
     t("comparationTable.columns.4"),
  ];

  const features: { label: string; cols: boolean[] }[] = [
    { label:  t("comparationTable.services.0"),       cols: [true,  true,  true,  true,  true ] },
    { label: t("comparationTable.services.1"),               cols: [true,  true,  true,  true, true ] },
    { label: t("comparationTable.services.2"),                  cols: [true,  true,  true, true, true ] },
    { label: t("comparationTable.services.3"),            cols: [false, true,  false, false, true ] },
    { label: t("comparationTable.services.4"),         cols: [false, true,  false, false, true ] },
    { label: t("comparationTable.services.5"),            cols: [false, false, true,  true,  true ] },
    { label: t("comparationTable.services.6"),        cols: [true,  true,  true,  true,  true ] },
    { label: t("comparationTable.services.7"),         cols: [false, false, true,  true, true ] },
    { label: t("comparationTable.services.8"),                     cols: [false, false, true,  false, true ] },
    { label: t("comparationTable.services.9"),              cols: [true,  true,  true,  true,  true ] },
    { label: t("comparationTable.services.10"), cols: [true,  true,  true,  true,  true ] },
    { label: t("comparationTable.services.11"),                     cols: [false, false, false, true,  true ] },
  ];

  return (
    <section id="comparison" className="bg-gray-50 py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}

        <h4 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight mb-12">
		{t("comparationTable.title")}
        </h4>

        {/* Table */}
        <div className="w-full overflow-x-auto">
          <table className="w-full min-w-[700px] border-collapse">
            {/* Column headers */}
            <thead>
              <tr>
                <th className="w-1/3 pb-4 border-b-2 border-gray-900" />
                {columns.map((col) => (
                  <th
                    key={col}
                    className="pb-4 border-b-2 border-gray-900 text-center"
                  >
                    <span className="text-[10px] font-black tracking-[0.2em] uppercase text-gray-500">
                      {col}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>

            {/* Rows */}
            <tbody>
              {features.map((feature, i) => (
                <tr key={i} className="border-b border-gray-200">
                  {/* Feature label */}
                  <td className="py-5 pr-6">
                    <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-gray-600">
                      {feature.label}
                    </span>
                  </td>

                  {/* Check cells */}
                  {feature.cols.map((has, j) => (
                    <td key={j} className="py-5 text-center">
                      {has ? (
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-emerald-500/50 border-2 border-gray-900">
                          <svg
                            viewBox="0 0 12 12"
                            className="w-3.5 h-3.5"
                            fill="none"
                            stroke="#1a1a1a"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="2,6 5,9 10,3" />
                          </svg>
                        </span>
                      ) : (
                        <span className="block w-2 h-px bg-gray-300 mx-auto" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
