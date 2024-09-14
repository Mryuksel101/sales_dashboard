import React, { useState } from 'react';
import '../styles/OrderDetail.css';
import { useNavigate } from 'react-router-dom';

interface OrderDetailProps {
    onClose: () => void;
}

const OrderDetail: React.FC<OrderDetailProps> = ({ onClose }) => {
    const [closing, setClosing] = useState(false);
    const navigate = useNavigate();

    const handleClose = () => {
        // Kapatma animasyonunu başlat
        setClosing(true);

        // Animasyonun tamamlanmasını bekleyip onClose çağır
        setTimeout(() => {
            navigate("/home");
        }, 300); // 300ms animasyon süresi ile aynı olmalı
    };

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

export default OrderDetail;
