import styled from "styled-components";

export const Button = styled.button`
    min-width: 160px;
    min-height: 50px;
    padding: 10px 26px;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1px;
    color: #fff;
    background: linear-gradient(135deg, #7d2ae8, #9c4eff);
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(125, 42, 232, 0.4);

    &:hover {
        transform: translateY(-2px) scale(1.02);
        box-shadow: 0 6px 18px rgba(125, 42, 232, 0.5);
    }

    &:active {
        transform: translateY(1px) scale(0.98);
        background: linear-gradient(135deg, #5a1bbc, #7d2ae8);
        box-shadow: 0 2px 8px rgba(125, 42, 232, 0.3);
        color: #e0d4ff;
    }

`

export default Button