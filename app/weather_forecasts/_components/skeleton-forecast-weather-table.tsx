export function SkeletonForecastWeatherTable() {
  return (
    <table className="w-full border-collapse rounded-md border border-gray-300 bg-white">
      <thead>
        <tr>
          {[...new Array(3)].map((_, index) => {
            return (
              <th key={index} className="h-10 border border-gray-300">
                <div className="flex items-center justify-center">
                  <span className="inline-block h-5 w-14 animate-pulse bg-gray-200" />
                </div>
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        <tr>
          {[...new Array(3)].map((_, index) => {
            return (
              <td key={index} className="h-20 border border-gray-300">
                <div className="flex items-center justify-center">
                  <span className="inline-block h-14 w-14 animate-pulse bg-gray-200" />
                </div>
              </td>
            );
          })}
        </tr>
      </tbody>
    </table>
  );
}
