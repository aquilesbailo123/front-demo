import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuotation } from '../../hooks/useQuotation';
import tail_blue from '../../assets/tail_blue.svg'
import './Cotizator.css';

const Cotizator = () => {
      const navigate = useNavigate();

      const [inputType, setInputType] = useState('image');
      const [isLoading, setIsLoading] = useState(false);
      const [error, setError] = useState('');
      const imageRef = useRef<HTMLInputElement>(null);

      const { mutateAsync: quotation } = useQuotation();

      const toggleOption = () => {
            setInputType((prev) => (prev === "image" ? "text" : "image"));
      };

      const handleSubmitQuotation = async (e: any) => {
            e.preventDefault();
            setIsLoading(true);
            setError("");
            if (inputType === "image") {
                  const file = imageRef.current?.files?.[0];
                  if (!file) {setError("Por favor seleccione un archivo"); setIsLoading(false); return; }

                  const formData = new FormData();
                  formData.append("quotation", file);

                  try {
                        const response = await quotation(formData);
                        setIsLoading(false); 
        
                        if (response.status === 200) {
                              // TODO this is hardcoded
                              const id = 1;
                              navigate(`/quotation/${id}`);
                        } else {
                              setError("Error haciendo cotización");
                        }
                    } catch (error) {
                        setIsLoading(false); 
                        console.log(error);
                        setError("Error inesperado");
                    }
            } else {
                  const text = e.currentTarget.quotation.value;
                  if (text === '') {setError("Por favor ingrese un texto"); setIsLoading(false);  return; }
                  const formData = new FormData();
                  formData.append("quotation", text);
                  
                  try {
                        const response = await quotation(formData);
                        setIsLoading(false); 

                        if (response.status === 200) {
                              // TODO this is hardcoded
                              const id = 1;
                              navigate(`/quotation/${id}`);
                        } else {
                              setError("Error haciendo cotización");
                        }
                  } catch (error) {
                        setIsLoading(false); 
                        console.log(error);
                        setError("Error inesperado");
                  }
            }

      }

      return (
            <div className="cotizator-main-cont">
                  {/* Main form */}
                  <form onSubmit={(e) => handleSubmitQuotation(e)} className="cotizator-cont">
                        {/* Title */}
                        <div className="cotizator-title">Cotizar</div>
                        <div className="cotizator-text">
                              Suba una imagen o copie el texto de la cotización
                        </div>

                        {/* Select image or text */}
                        <div 
                              className="cotizator-switch-bar" 
                              onClick={() => toggleOption()}
                        >
                              <div className={`option option-a ${inputType === "image" ? "active" : ""}`}>Imagen</div>
                              <div className={`option option-b ${inputType === "text" ? "active" : ""}`}>Texto</div>
                        </div>

                        {/* Image or text input */}
                        {inputType == "image" ? (
                              <input 
                                    ref={imageRef} 
                                    name="quotation" 
                                    className="cotizator-input" 
                                    type="file"
                                    accept="image/*"
                              />
                        ) : (
                              <textarea 
                                    name="quotation" 
                                    placeholder='Ingrese la cotización' 
                                    className="cotizator-input"
                              />
                        )}

                        {/* Submit button */}
                        {!isLoading ? <button type="submit" className="cotizator-submit-button">
                              Hacer cotización
                        </button> : <img className='cotizator-loader' src={tail_blue}/>}

                        <div className="cotizator-error">{error}</div>
                  </form>
            </div>
      );
};

export default Cotizator;
