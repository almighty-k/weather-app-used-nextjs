export function EmptyForecastWeatherTable() {
  return (
    <table className="w-full border-collapse rounded-md border border-gray-300 bg-white">
      <thead>
        <tr>
          {[...new Array(3)].map((_, index) => {
            return <th key={index} className="h-10 border border-gray-300" />;
          })}
        </tr>
      </thead>
      <tbody>
        <tr>
          {[...new Array(3)].map((_, index) => {
            return <td key={index} className="h-20 border border-gray-300" />;
          })}
        </tr>
      </tbody>
    </table>
  );
}
