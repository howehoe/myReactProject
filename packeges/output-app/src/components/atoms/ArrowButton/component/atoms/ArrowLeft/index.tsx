import React from "react"
import type { FC } from "react"
import styled from "styled-components"

export const ArrowLeft: FC = () => {
  return <Arrow />
}

const Arrow = styled.div`
  position: relative;
  width: 0;
  height: 0;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-right: 6px solid black;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: -6px;
    left: -6px;
    width: 0;
    height: 0;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-right: 6px solid black;
  }
`
