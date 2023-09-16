import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./style.css";
import Manual from "../components/delivery/manual";
import Map from "../components/delivery/map";
import { DeliveryInfo } from "../components/styles/payment.style";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CircularProgress from "@mui/material/CircularProgress";
import { DeliveryForm } from "../components/styles/deliveryStyle";
import { motion } from "framer-motion";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function DeliveryAddressPage() {
  const [open, setOpen] = useState(false);
  const [processing, setProcessing] = useState(false);

  const handleModalOpen = () => {
    setOpen(true);
  };
  const handleModalClose = () => {
    setOpen(false);
  };
  const handleDelivery = async () => {
    setOpen(true);
    setProcessing(true);

    // make the delivery
    // if successful
    // toast thanks for the buying
    setProcessing(false);
  };

  return (
    <DeliveryForm>
      <motion.div
        initial={{ x: 400 }}
        animate={{ x: 0 }}
        transition={{
          duration: 3,
          type: "spring",
          stiffness: 300,
        }}
        className="deliveryOption">
        <DeliveryInfo>
          <div className="delivery_address">
            <p>Delivery Address</p>
            <Tabs
              defaultActiveKey="manual"
              id="uncontrolled-tab-example"
              className="mb-3">
              <Tab
                eventKey="manual"
                title="manually"
                style={{ color: "white", fontWeight: "bold" }}>
                <Manual />
              </Tab>
              <Tab
                eventKey="map"
                title="map"
                style={{ color: "white", fontWeight: "bold" }}>
                <Map />
              </Tab>
            </Tabs>
            <button className="submitbutton" onClick={handleDelivery}>
              submit
            </button>
          </div>

          {open ? (
            <Modal
              open={open}
              // onClose={handleModalClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description">
              <Box sx={style}>
                {processing ? (
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}>
                    <CircularProgress
                      size={70}
                      thickness={3}
                      color="secondary"
                    />
                  </div>
                ) : (
                  <>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2">
                      Payment is made successfully
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      The verification code is sent to the phone Number, keep it
                      up and provide it when you receive the product.
                    </Typography>
                  </>
                )}
              </Box>
            </Modal>
          ) : (
            <></>
          )}
        </DeliveryInfo>
      </motion.div>
    </DeliveryForm>
  );
}

export default DeliveryAddressPage;
