import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react';
import { ShopppingCartContext } from "../../Context";
import './styles.css';

const ProductDetails = () => {
    const context = useContext(ShopppingCartContext);
    console.log('Product to show: ', context.productToShow);

    return (
        <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden' } Product-details flex-col gap-2 fixed right-0 border border-black rounded bg-white p-5`}>
            <div className='flex justify-between items-center'>
                <h2 className='font-medium text-xl'>Details</h2>
                <div 
                    className='cursor-pointer'
                    onClick={context.closeProductDetail}
                >
                    <XMarkIcon className='h-5 w-5' />
                </div>
            </div>
            <figure className='px-2'>
                <img src={context.productToShow.images[0]} alt={context.productToShow.title} className='w-full h-full rounded-lg' />
            </figure>
            <p className='flex flex-col p-2 gap-2'>
                <span className='font-medium text-2xl'>${context.productToShow.price}</span>
                <span className='font-medium text-md'>${context.productToShow.title}</span>
                <span className='font-light text-sm'>${context.productToShow.description}</span>
                <span className='font-medium text-md text-center'>{context.productToShow.category.name}</span>
            </p>
        </aside>
    );
};

export default ProductDetails;