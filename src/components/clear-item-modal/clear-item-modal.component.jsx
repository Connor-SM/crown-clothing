import React from 'react';

import './clear-item-modal.styles.scss';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { clearItemFromCart, clearItemModalOpen } from '../../redux/cart/cart.actions';
import { selectCurrentItem } from '../../redux/cart/cart.selectors';

import CustomButton from '../custom-button/custom-button.component';

const ClearItemModal = ({ clearItemModalOpen, currentItem, clearItemFromCart }) => {
    return (
        <div className="modal-bg">
            <div className="modal">
                <h5>Are you sure you want to remove {currentItem.name}?</h5>
                <CustomButton 
                    // eslint-disable-next-line
                    onClick={() => ( clearItemFromCart(currentItem), clearItemModalOpen() )}
                    modalButton
                    inverted
                    >
                    Yes
                </CustomButton>
                <CustomButton 
                    onClick={() => clearItemModalOpen()}
                    modalButton
                    >
                    No
                </CustomButton>
            </div>
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    currentItem: selectCurrentItem
})

const mapDispatchToProps = dispatch => ({
    clearItemModalOpen: () => dispatch(clearItemModalOpen()),
    clearItemFromCart: item => dispatch(clearItemFromCart(item)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ClearItemModal);