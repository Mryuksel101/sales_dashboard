import React from 'react';
import { SaleHistory } from '../../models/SaleHistory';

interface SalesReportListItemProps {
  sale: SaleHistory;
}

const SalesReportListItem: React.FC<SalesReportListItemProps> = ({ sale }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6 hover:border-gray-400 transition-all duration-300 ease-in-out">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-gray-900">{sale.product}</h3>
        <span className="text-sm font-medium text-gray-500">
          {sale.date.toLocaleDateString()}
        </span>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-500">Category</p>
          <p className="font-medium text-gray-900">{sale.category}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Quantity</p>
          <p className="font-medium text-gray-900">{sale.quantity}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Revenue</p>
          <p className="font-medium text-green-600">
            ${sale.revenue.toFixed(2)}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500">ID</p>
          <p className="font-medium text-gray-900">{sale.id}</p>
        </div>
      </div>
    </div>
  );
};

export default SalesReportListItem;
