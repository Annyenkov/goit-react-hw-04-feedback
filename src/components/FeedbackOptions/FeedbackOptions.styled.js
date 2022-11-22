import styled from 'styled-components';

export const Button = styled.button`
margin-right: ${p => p.theme.space[3]}px;
width: 100px;
height: 30px;
color: ${p => p.theme.colors.text};
border: 1px solid #000;
background-color: ${p => p.theme.colors.bg};
box-shadow: ${p => p.theme.shadows.default};

:last-of-type {
  margin-right: 0;
}
:hover {
  background-color: ${p => p.theme.colors.accent};
  color: ${p => p.theme.colors.secondaryText};
}
`