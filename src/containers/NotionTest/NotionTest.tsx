import React, { FunctionComponent, CSSProperties, useEffect, useState } from "react";
import DefaultLayout from "@/components/DefaultLayout";
import axios from "axios";
import { NotionRenderer } from "react-notion";
import 'react-notion/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css'; 
import FlexCenter from "@/components/FlexCenter";

interface ICardViewProps {}

interface Props {
  style?: CSSProperties
}

const NotionTest: FunctionComponent<ICardViewProps> = (props) => {
  const [response, setResponse] = useState<any>(undefined);
  useEffect(() => {
    const NOTION_PAGE_ID = '65f9c48b5a624405b14e7711570e1ab0';
    axios
      .get(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
      .then(({ data }) => {
        console.log('data', data)
        setResponse(data);
      });
  }, [])
  
  return (
    <DefaultLayout>
      {response && <div style={{ maxWidth: 768 }}>
        <NotionRenderer hideHeader={true} blockMap={response} fullPage={true} />
      </div>}
    </DefaultLayout>
  );
};


export default NotionTest;
