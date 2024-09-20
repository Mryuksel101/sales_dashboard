import React, { useEffect, useState } from 'react';
import '../styles/OrderDetail.css';
import { useNavigate, useParams } from 'react-router-dom';
import { GetOrderDetailsResponse } from '../models/OrderDetailModel';
import { getOrderDetails } from '../services/orderDetailService';
import { getCookie } from '../services/cookieService';
import OrderDetailsDataGrid from '../components/orderDetailsDataGrid';
import { CgClose } from "react-icons/cg";

interface OrderDetailProps {
    onClose: () => void;
}

const OrderDetailPage: React.FC<OrderDetailProps> = ({ onClose }) => {
    const [closing, setClosing] = useState(false);
    const [orderDetails, setOrderDetails] = useState<GetOrderDetailsResponse | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate();
    const { id } = useParams(); // URL'den id parametresini yakalıyoruz

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
                const token = getCookie("token");
                if (token == null) {
                    throw Error("token is null");
                }
                const response = await getOrderDetails({
                    OrficheRef: Number(id),
                    token: token,
                    paggingSetting: {
                        start: 0,
                        length: 10
                    }
                });
                setOrderDetails(response);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchOrderDetails();
    }, [id]);

    // Listen for "Escape" key to close the modal
    useEffect(() => {
        const handleEscKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                handleClose();
            }
        };

        // Add event listener for keydown
        document.addEventListener('keydown', handleEscKey);

        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener('keydown', handleEscKey);
        };
    }, []);

    return (
        <div className={`bottom-sheet ${closing ? 'closing' : ''}`}>
            <div className="sheet-content">
                <button onClick={handleClose} className="close-btn">
                    <CgClose size={24} />
                </button>
                <h1>Order Details</h1>

                {/* Add instructional text for pressing Esc */}
                <p className="esc-instruction">Press Esc to exit</p>

                <OrderDetailsDataGrid
                    orderDetailsResponse={orderDetails ?? { OrderDetails: [], TotalCount: 0 }}
                    loading={loading}
                />
            </div>
        </div>
    );
};

export default OrderDetailPage;
