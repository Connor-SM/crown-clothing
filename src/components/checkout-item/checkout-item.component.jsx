import React from 'react';

import './checkout-item.styles.scss';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { clearItemModalOpen, addItem, removeItem } from '../../redux/cart/cart.actions';
import { selectClearItemModal } from '../../redux/cart/cart.selectors';

import ClearItemModal from '../clear-item-modal/clear-item-modal.component';

const CheckoutItem = ({ cartItem, removeItem, addItem, clearItemModal, clearItemModalOpen }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <div className='checkout-item'>
            { clearItemModal ? <ClearItemModal /> : null }
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>

            <span className='name'>{name}</span>
            
            <span className='quantity'>
                <div 
                    className='arrow'
                    onClick={() => removeItem(cartItem)}
                >&#10094;</div>
                <span className='value'>{quantity}</span>
                <div 
                    className='arrow'
                    onClick={() => addItem(cartItem)}
                >&#10095;</div>
            </span>
            
            <span className='price'>${price}</span>
            <div 
                className='remove-button'
                onClick={() => clearItemModalOpen(cartItem)}
            >
                &#10005;
            </div>
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    clearItemModal: selectClearItemModal
});

const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeItem(item)),
    addItem: item => dispatch(addItem(item)),
    clearItemModalOpen: item => dispatch(clearItemModalOpen(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutItem);