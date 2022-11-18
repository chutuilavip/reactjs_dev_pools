import { Button, Form, Image, Input, Modal } from 'antd';
import React from 'react';
import { DepositWrapper } from './styled';
import paypalImage from '../../../assets/Account/paypal_logo.png';
import { addMoney } from '../../../redux/slice/account.slice';
import { useDispatch } from 'react-redux';
const Deposit = () => {
  const dispatch = useDispatch();
  const formRef = React.useRef();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isLoadingAddMoney, setIsLoadingAddMoney] = React.useState(false);
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleSubmit = (value) => {
    setIsLoadingAddMoney(true);
    dispatch(addMoney(value.deposit))
      .unwrap()
      .then((res) => {
        if (res.status === 200) {
          setIsLoadingAddMoney(false);
          formRef.current.resetFields();
        } else {
          setIsLoadingAddMoney(false);
        }
      });
  };
  return (
    <DepositWrapper>
      <Button type="primary" onClick={showModal}>
        Deposit
      </Button>
      <Modal
        title="Deposit Money"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form onFinish={handleSubmit} ref={formRef}>
          <Image src={paypalImage} preview={false} style={{ borderRadius: '10px' }} />
          <h3
            style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '2rem', margin: '2rem 0' }}
          >
            Amount you need to deposit {'($)'}
          </h3>
          <Form.Item name="deposit" rules={[{ required: true, message: 'Please input deposit' }]}>
            <Input placeholder="Enter money" type="number" />
          </Form.Item>
          <Form.Item>
            <Button
              loading={isLoadingAddMoney}
              htmlType="submit"
              type="primary"
              style={{ width: '100%' }}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </DepositWrapper>
  );
};

export default Deposit;
