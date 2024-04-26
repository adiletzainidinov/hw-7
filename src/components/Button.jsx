import { styled } from 'styled-components';

function getSize({ size }) {
  return size === 'outlined'
    ? '14px'
    : size === 'contained'
    ? '18px'
    : size === 'danger'
    ? '16px'
    : size === 'warning'
    ? '12px'
    : '';
}

function getColor({ color }) {
  return color === 'outlined'
    ? 'rgba(31, 110, 212, 1)'
    : color === 'active'
    ? 'rgba(255, 255, 255, 1)'
    : color === 'disabled'
    ? 'rgba(201, 201, 201, 1)'
    : color === 'contained'
    ? 'rgba(255, 255, 255, 1)'
    : color === 'danger'
    ? 'rgba(255, 255, 255, 1)'
    : color === 'warning'
    ? 'rgba(255, 255, 255, 1)'
    : '';
}

function getWeight({ weight }) {
  return weight === 'outlined'
    ? '500'
    : weight === 'contained'
    ? '500'
    : weight === 'danger'
    ? '600'
    : weight === 'warning'
    ? '800'
    : '';
}

function getPadding({ padding }) {
  return padding === 'outlinedHover'
    ? '16px 71.5px'
    : padding === 'outlinedNormal'
    ? '16px 65.5px'
    : padding === 'outlinedActive'
    ? '16px 70.5px'
    : padding === 'outlinedDisabled'
    ? '16px 62.5px'
    : padding === 'containedHover'
    ? '16px 64px'
    : padding === 'containedNormal'
    ? '16px 56px'
    : padding === 'containedActive'
    ? '16px 62.5px'
    : padding === 'containedDisabled'
    ? '16px 52.5px'
    : padding === 'warningHover'
    ? '14px 69px'
    : padding === 'warningNormal'
    ? '14px 63.5px'
    : padding === 'warningActive'
    ? '14px 68px'
    : padding === 'warningDisabled'
    ? '14px 61.5px'
    : padding === 'dangerHover'
    ? '14px 61.5px'
    : padding === 'dangerNormal'
    ? '14px 54.5px'
    : padding === 'dangerActive'
    ? '14px 60.5px'
    : padding === 'dangerDisabled'
    ? '14px 51.5px'
    : '';
}
function getBackground({ backgroundColor }) {
  return backgroundColor === 'outlined'
    ? 'rgba(255, 255, 255, 1)'
    : backgroundColor === 'activeOutlined'
    ? 'rgba(0, 82, 188, 1)'
    : backgroundColor === 'containedHover'
    ? 'rgba(76, 148, 240, 1)'
    : backgroundColor === 'containedNormal'
    ? 'rgba(31, 110, 212, 1)'
    : backgroundColor === 'containedActive'
    ? 'rgba(0, 82, 188, 1)'
    : backgroundColor === 'containedDisabled'
    ? 'rgba(201, 201, 201, 1)'
    : backgroundColor === 'warningHover'
    ? 'rgba(255, 145, 43, 1)'
    : backgroundColor === 'warningNormal'
    ? 'rgba(243, 119, 5, 1)'
    : backgroundColor === 'warningActive'
    ? 'rgba(207, 99, 0, 1)'
    : backgroundColor === 'warningDisabled'
    ? 'rgba(201, 201, 201, 1)'
    : backgroundColor === 'dangerHover'
    ? 'rgba(229, 67, 67, 1)'
    : backgroundColor === 'dangerNormal'
    ? 'rgba(223, 45, 45, 1)'
    : backgroundColor === 'dangerActive'
    ? 'rgba(194, 11, 11, 1)'
    : backgroundColor === 'dangerDisabled'
    ? 'rgba(201, 201, 201, 1)'
    : '';
}

function getBorder({ border }) {
  return border === 'none'
    ? 'none'
    : border === 'outlinedHover'
    ? '3px solid rgba(76, 148, 240, 1)'
    : border === 'outlinedNormal'
    ? '1px solid rgba(31, 110, 212, 1)'
    : border === 'outlinedDisabled'
    ? '1px solid rgba(201, 201, 201, 1)'
    : '';
}

function getLeft({ marginLeft }) {
  return marginLeft === 'left' ? '30px' : '';
}

export const Button = styled.button`
  font-size: ${getSize};
  color: ${getColor};
  font-weight: ${getWeight};
  padding: ${getPadding};
  border-radius: 10px;
  background-color: ${getBackground};
  border: ${getBorder};
  margin-left: ${getLeft};
`;
