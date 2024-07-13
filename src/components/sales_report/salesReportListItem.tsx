import React from 'react';
import { SaleHistory } from '../../models/SaleHistory';

interface SalesReportListItemProps {
  sale: SaleHistory;
}

const SalesReportListItem: React.FC<SalesReportListItemProps> = ({ sale }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 hover:shadow-lg transition-shadow duration-300">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold text-gray-800">{sale.product}</h3>
        <span className="text-sm font-medium text-gray-600">
          {sale.date.toLocaleDateString()}
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <p className="text-sm text-gray-600">Category</p>
          <p className="font-medium text-gray-800">{sale.category}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Quantity</p>
          <p className="font-medium text-gray-800">{sale.quantity}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Revenue</p>
          <p className="font-medium text-green-600">
            ${sale.revenue.toFixed(2)}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-600">ID</p>
          <p className="font-medium text-gray-800">{sale.id}</p>
        </div>
      </div>
    </div>
  );
};

export default SalesReportListItem;