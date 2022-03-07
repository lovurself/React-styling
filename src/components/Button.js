import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

// StyledButton 밖에서 변수 생성하고 안에 넣어주는 방법
// const colorStyles = css`
//     ${({ theme, color }) => {
//         const selected = theme.palette[color];
//         return css`
//             background: ${selected};
//             &:hover {
//                 background: ${lighten(0.1, selected)};
//             }
//             &:active {
//                 background: ${darken(0.1, selected)}
//             }
//         `
//     }}
// `

const StyledButton = styled.button`
    /* 공통 스타일 */
    display: inline-flex;
    outline: none;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;
    align-items: center;

    /* 크기 */
    height: 2.25rem;
    font-size: 1rem;

    /* colorStyles 적용하는 방법
    ${colorStyles}; */

    /* 색상 */
    /* ${props => {
        const color = props.theme.palette[props.color];
        return css`
            background: ${color};
            &:hover {
                background: ${lighten(0.1, color)};
            }
            &:active {
                background: ${darken(0.1, color)}
            }
        `
    }} */
    // 비구조화 할당
    ${({ theme, color }) => {
        const selected = theme.palette[color];
        return css`
            background: ${selected};
            &:hover {
                background: ${lighten(0.1, selected)};
            }
            &:active {
                background: ${darken(0.1, selected)}
            }
        `
    }}

    // ThemeProvider 사용
    /* background: ${props => props.theme.palette.blue};
    &:hover {
        background: ${props => lighten(0.1, props.theme.palette.blue)};
    }
    &:active {
        background: ${props => darken(0.1, props.theme.palette.blue)};
    } */

    /* 기타 */
    & + & {
        margin-left: 1rem;
    }
`;

function Button({ children, color, ...rest }) {
  return <StyledButton color={color} {...rest}>{children}</StyledButton>
};

Button.defaultProps = {
    color: 'blue'
}

export default Button;