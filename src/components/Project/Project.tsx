import { Avatar, Card } from 'antd';
import React, { FunctionComponent, useState } from 'react';
import generateIndexImage from '@/utils/generateIndexImage';
import palette from '@/style/palette';
import Title from './ProjectTitle';
import ProjectWrapper from './ProjectWrapper';

interface IProjectProps {
  id?: any;
  title: string;
  date: string;
  imageUrl?: string;
  author: string;
  authorImageUrl?: string;
}

const { primary } = palette;
const { Meta } = Card;

const Project: FunctionComponent<IProjectProps> = (props) => {
  const { id, title, date, imageUrl, author, authorImageUrl } = props;

  const [like, setLike] = useState(false);

  return (
    <ProjectWrapper>
      <Card
        bordered={false}
        style={{ borderRadius: 16, cursor: 'pointer' }}
        hoverable
        cover={
          <div
            style={{
              borderRadius: '16px 16px 0px 0px',
              width: '100%',
              height: '150px',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundImage: `url(${imageUrl || generateIndexImage(id)})`,
            }}
          />
        }
      >
        <Title>{title}</Title>
        <span>{date}</span>
        <Meta
          avatar={
            <div style={{ paddingTop: 5 }}>
              <Avatar src={authorImageUrl || generateIndexImage(id)} />
              <span style={{ marginLeft: 5, fontWeight: 'bold' }}>{author}</span>
            </div>
          }
        />
      </Card>
    </ProjectWrapper>
  );
};

export default Project;
