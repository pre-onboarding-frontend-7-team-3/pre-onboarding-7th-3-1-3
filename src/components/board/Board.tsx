import React from 'react';
import S from './styles';

interface BoardProps {
  children: React.ReactNode;
  title?: string;
}

const Board = ({ children, title }: BoardProps) => {
  return (
    <S.Wrapper>
      {title && <S.Title>{title}</S.Title>}
      <S.Box> {children}</S.Box>
    </S.Wrapper>
  );
};

export default Board;
