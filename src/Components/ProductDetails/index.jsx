import { XMarkIcon } from '@heroicons/react/24/solid'
import './styles.css';

const ProductDetails = () => {
    return (
        <aside className='Product-details flex flex-col fixed right-0 border border-black rounded bg-white p-5'>
            <div className='flex justify-between items-center'>
                <h2 className='font-medium text-xl'>Details</h2>
                <div>
                    <XMarkIcon className='h-5 w-5' />
                </div>
            </div>
        </aside>
    );
};

export default ProductDetails;