import React, { FunctionComponent } from 'react';
import { Button, Result } from 'antd';
import DefaultLayout from '@/components/DefaultLayout';
import LayoutWrapper from '@/components/LayoutWrappwer';
import { useNavigate } from 'react-router-dom';

interface INotFoundProps {}

const NotFound: FunctionComponent<INotFoundProps> = (props) => {
  const navigate = useNavigate();

  return (
    <DefaultLayout>
      <LayoutWrapper>
        <Result
          status="403"
          title="403"
          subTitle="아직 준비중인 페이지 입니다."
          extra={
            <Button type="primary" onClick={() => navigate('/')}>
              Back Home
            </Button>
          }
        />
      </LayoutWrapper>
    </DefaultLayout>
  );
};

export default NotFound;
