import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react';
import { ShopppingCartContext } from "../../Context";
import './styles.css';

const ProductDetails = () => {
    const context = useContext(ShopppingCartContext);

    return (
        <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden' } Product-details flex-col fixed right-0 border border-black rounded bg-white p-5`}>
            <div className='flex justify-between items-center'>
                <h2 className='font-medium text-xl'>Details</h2>
                <div 
                    className='cursor-pointer'
                    onClick={context.closeProductDetail}
                >
                    <XMarkIcon className='h-5 w-5' />
                </div>
            </div>
        </aside>
    );
};

export default ProductDetails;