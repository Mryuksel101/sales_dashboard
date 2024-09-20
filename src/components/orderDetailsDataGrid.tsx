// components/OrderDetailsDataGrid.tsx
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { orderDetailsColumns } from '../models/OrderDetailsColumns';
import { GetOrderDetailsResponse, OrderDetail } from '../models/OrderDetailModel';

interface OrderDetailsDataGridProps {
    orderDetailsResponse: GetOrderDetailsResponse;
    loading: boolean;
}

const OrderDetailsDataGrid: React.FC<OrderDetailsDataGridProps> = ({ orderDetailsResponse, loading }) => {
    //const data: GetOrderDetailsResponse = (useLoaderData() as GetOrderDetailsResponse);
    return (
        <div style={{ height: 'calc(-90px + 100vh)', width: '100%', paddingTop: '16px' }}>
            <DataGrid
                loading={loading}
                rows={orderDetailsResponse.OrderDetails}
                columns={orderDetailsColumns}
                getRowId={(row: OrderDetail) => row.Indirim} // Unique ID


            />
        </div>
    );
};

export default OrderDetailsDataGrid;
