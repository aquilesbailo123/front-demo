import './AdminBack.css';
import { FaArrowLeft } from 'react-icons/fa';

export default function AdminBack() {
      return (
            <div className="back-to-panel-container">
                        <a href="/admin" className="back-to-panel-button">
                              <FaArrowLeft className="arrow-icon" />
                              <span>Panel</span>
                        </a>
                  </div>
      );
}
