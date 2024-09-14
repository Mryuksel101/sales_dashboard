import React, { useEffect, useState } from 'react';
import '../styles/OrderDetail.css';
import { useNavigate } from 'react-router-dom';
import { OrderDetail } from '../models/OrderDetailModel';
import { getOrderDetails } from '../services/orderDetailService';


interface OrderDetailProps {
    onClose: () => void;
}

const OrderDetailPage: React.FC<OrderDetailProps> = ({ onClose }) => {
    const [closing, setClosing] = useState(false);
    const [orderDetails, setOrderDetails] = useState<OrderDetail[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate();

    const handleClose = () => {
        // Kapatma animasyonunu başlat
        setClosing(true);

        // Animasyonun tamamlanmasını bekleyip onClose çağır
        setTimeout(() => {
            navigate("/home");
        }, 300); // 300ms animasyon süresi ile aynı olmalı
    };

    useEffect(() => {
        const fetchOrderDetails = async () => {
            try {
                const response = await getOrderDetails({
                    OrficheRef: 1, //
                    paggingSetting: {
                        start: 0,
                        length: 10
                    }
                });
                setOrderDetails(response.OrderDetails);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchOrderDetails();
    }, []);

    return (
        <div className={`bottom-sheet ${closing ? 'closing' : ''}`}>
            <div className="sheet-content">
                <button onClick={handleClose} className="close-btn">×</button>
                <h1>Order Details</h1>
                {/* Order detaylarını burada göster */}
            </div>
        </div>
    );
};

export default OrderDetailPage;
