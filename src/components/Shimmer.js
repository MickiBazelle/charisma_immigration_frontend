import React from "react";

export const Shimmer = ({ cols = 4 }) => {
  return (
    <tbody>
      {Array.from({ length: 4 }, (_, index) => (
        <tr>
          {Array.from({ length: cols }, (_, index) => (
            <td className="gridjs-td px-6 py-4">
              <div className="h-4 animate-shimmer bg-gradient-to-r from-gray-600 via-gray-700 to-gray-600 rounded w-3/4"></div>
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};
