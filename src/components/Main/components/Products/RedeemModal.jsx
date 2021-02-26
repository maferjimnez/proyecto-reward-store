import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import variables from '../../../../styles/variables';

export default function RedeemModal(props) {
  const {
    redeemProduct,
    productId,
    productCost,
    userPoints,
    successRedeem,
    productName,
  } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <HoverButton
        onClick={() => {
          handleOpen();
          redeemProduct(productId, productCost, userPoints);
        }}
      >
        Redeem now.
      </HoverButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">
              {successRedeem ? 'Woo hoo!' : 'Uh oh...'}
            </h2>
            <p id="transition-modal-description">
              {successRedeem
                ? `You've purchased ${productName} succesfully!`
                : `Something went wrong while purchasing ${productName}, please try again in a few minutes.`}
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    padding: '3rem 4rem',
    outline: 'none',
    borderRadius: '10px',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    color: '#5edfff',
    fontWeight: 300,
    textAlign: 'center',
  },
}));

const HoverButton = styled.button`
  width: 100%;
  padding: 1rem;
  outline: none;
  border: none;
  background-color: ${variables.gray};
  font-size: 1rem;
  border-radius: 30px;
  cursor: pointer;
  :hover {
    box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.54);
  }
`;
