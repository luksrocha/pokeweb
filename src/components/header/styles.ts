import styled from 'styled-components';

export const Container = styled.div`
  height: 80px;
  width: 100%;
  background-color: #c9c9c9;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Nav = styled.nav``;

export const Menu = styled.ul`
  display: flex;
  flex-direction: row;
`;

export const MenuItem = styled.li`
  margin: 0 5px;
  list-style: none;

  &:hover {
    cursor: pointer;
  }
`;
