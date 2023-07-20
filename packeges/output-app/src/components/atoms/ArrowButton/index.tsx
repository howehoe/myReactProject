import React from "react"
import { FC, MouseEventHandler } from "react"
import styled, { css } from "styled-components"
import { Color } from "../../../shared/styles/const/color"
import { ArrowLeft } from "./component/atoms/ArrowLeft"
import { ArrowRight } from "./component/atoms/ArrowRight"

type Props = {
  direction: "left" | "right"
  onClick: MouseEventHandler<HTMLButtonElement>
}

export const ArrowButton: FC<Props> = (props) => {
  const { direction, onClick } = props
  const Wrapper = direction === "left" ? LeftWrapper : RightWrapper
  const Arrow = direction === "left" ? LeftIcon : RightIcon

  return (
    <Root onClick={onClick}>
      <Wrapper>
        <Arrow />
      </Wrapper>
    </Root>
  )
}

const ArrowSize = css`
  height: 22px;
  width: 12px;
`
const Root = styled.button.attrs({
  type: "button",
})`
  background-color: ${Color.COLOR_1F1F1F};
  border-radius: 50%;
  fill: ${Color.COLOR_FFFFFF};
  height: 48px;
  transition: transform 0.1s linear;
  width: 48px;
  &:hover {
    transform: scale(1.05);
  }
`
const LeftWrapper = styled.span`
  margin-right: 3px;
`
const RightWrapper = styled.span`
  margin-left: 3px;
`
const LeftIcon = styled(ArrowLeft)`
  ${ArrowSize}
`
const RightIcon = styled(ArrowRight)`
  ${ArrowSize}
`
