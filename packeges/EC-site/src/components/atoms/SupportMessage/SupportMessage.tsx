import React, { FC, MouseEventHandler, ReactElement } from 'react'
import styled, { css } from 'styled-components'
import { darken } from 'polished'

import { Box } from '../Box'
import { Icon } from '../Icon'
import { Text } from '../Text'
import { theme, Color } from '../../../theme'
import { MarginProps } from '../../utils/space'

type StylesItem = {
  iconColor: Color
  backgroundColor: string
  hoverBackgroundColor: string
  icon: string
}

const styles: Record<SupportMessageType, StylesItem> = {
  info: {
    iconColor: 'liquorice',
    backgroundColor: theme.colors.custard,
    hoverBackgroundColor: darken(0.1, theme.colors.custard),
    icon: 'info',
  },
  fallback: {
    iconColor: 'liquorice',
    backgroundColor: theme.colors.coconut,
    hoverBackgroundColor: darken(0.1, theme.colors.coconut),
    icon: 'info',
  },
  alert: {
    iconColor: 'tangerine',
    backgroundColor: theme.colors.sherbert,
    hoverBackgroundColor: darken(0.1, theme.colors.sherbert),
    icon: 'alert',
  },
  warning: {
    iconColor: 'strawberry',
    backgroundColor: theme.colors.watermelon,
    hoverBackgroundColor: darken(0.1, theme.colors.watermelon),
    icon: 'warning',
  },
  success: {
    iconColor: 'apple',
    backgroundColor: theme.colors.mint,
    hoverBackgroundColor: darken(0.1, theme.colors.mint),
    icon: 'included',
  },
}

type SupportMessageType = 'info' | 'fallback' | 'alert' | 'warning' | 'success'

export type SupportMessageProps = {
  className?: string
  description: string | ReactElement
  onClick?: MouseEventHandler
  type: SupportMessageType
  title?: string
} & MarginProps

export const SupportMessage: FC<SupportMessageProps> = ({
  className,
  description,
  onClick,
  type = 'info',
  title,
  ...marginProps
}) => (
  <Wrapper className={className} type={type} onClick={onClick} {...marginProps}>
    <IconWrapper>
      <Icon
        size={20}
        render={styles[type].icon}
        color={styles[type].iconColor}
      />
    </IconWrapper>
    <Box flex direction="column" mx="8px">
      {title && <Title>{title}</Title>}
      <Description tag="p">{description}</Description>
    </Box>
    {onClick && (
      <Box ml={{ custom: 'auto' }}>
        <Icon size={16} render="caret" color="marzipan" rotate={270} />
      </Box>
    )}
  </Wrapper>
)

interface IWrapper {
  type: SupportMessageType
  onClick?: MouseEventHandler
}

const IconWrapper = styled(Box)`
  align-self: flex-start;
`

const Wrapper = styled(Box)<IWrapper>(
  ({ type, onClick }) => css`
    align-items: center;
    background-color: ${styles[type].backgroundColor};
    border-radius: 16px;
    ${onClick && `cursor: pointer`};
    padding: 12px;
    display: flex;
    width: 100%;

    &:hover,
    &:active {
      ${onClick && `background-color: ${styles[type].hoverBackgroundColor};`};
    }
  `,
)

const Title = styled.p`
  font-size: 16px;
  font-weight: ${theme.font.weight.medium};
  color: ${theme.colors.liquorice};
  line-height: 20.8px;
  margin-bottom: 4px;
`

const Description = styled(Text)`
  color: ${theme.colors.liquorice};
  font-size: 14px;
  line-height: 20px;
`