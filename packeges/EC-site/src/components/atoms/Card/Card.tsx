import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { MarginProps } from '../../utils/space'
import { theme } from '../../../theme'
import { Box } from '../Box'
import { Icon } from '../Icon'
import { Text } from '../Text'

export type CardProps = {
  children?: ReactNode
  /** leading card icon */
  leadingIcon?: string
  /** generic card title */
  title?: string
  /** generic card body */
  body?: string
  /** card image */
  visual?: string
  /** height of the image */
  visualHeight?: string
  /** card tag */
  tag?: ReactNode
  /** action to the right of the card, chevron, chip or link text */
  rightAction?: ReactNode
  /** primary button */
  buttonAction?: ReactNode
  /** fallback color scheme */
  fallback?: boolean
  className?: string
  /** margin */
  maxWidth?: string
  /** left-right margin */
  marginX?: string
  /** top-bottom margin */
  marginY?: string
  /** Narrow padding */
  narrow?: boolean
  /** Wide padding */
  wide?: boolean
} & MarginProps

export const Card: FC<CardProps> = ({
  children,
  leadingIcon,
  title,
  body,
  visual,
  tag,
  rightAction,
  buttonAction,
  fallback = false,
  visualHeight = '',
  className = '',
  maxWidth = '',
  marginX = '',
  marginY = '',
  narrow = false,
  wide = false,
  ...otherProps
}) => {
  const addChildMargin = (!!leadingIcon || !!title || !!body) && children
  return (
    <Container
      className={className}
      maxWidth={maxWidth}
      marginX={marginX}
      marginY={marginY}
      narrow={narrow}
      wide={wide}
      visual={visual}
      fallback={fallback}
      {...otherProps}
    >
      {tag && visual && <TagWrapper>{tag}</TagWrapper>}
      {visual && (
        <VisualWrapper visualHeight={visualHeight}>
          <Visual visualUrl={visual} visualHeight={visualHeight} />
        </VisualWrapper>
      )}
      <Box p={visual ? '16px' : { custom: '0px' }}>
        <Box flex alignItems="center" justifyContent="space-between">
          <Box flex alignItems="center">
            {leadingIcon && (
              <Icon
                mr="12px"
                render={leadingIcon}
                size={24}
                color="liquorice"
              />
            )}
            <Box>
              {title && (
                <Text typo="headline-regular" color="liquorice">
                  {title}
                </Text>
              )}
              {body && (
                <Text typo="body-regular" color="sesame">
                  {body}
                </Text>
              )}
            </Box>
          </Box>
          {rightAction && rightAction}
        </Box>
        <Box mt={addChildMargin ? '16px' : { custom: '0px' }}>{children}</Box>
        {buttonAction && <Box mt="16px">{buttonAction}</Box>}
      </Box>
    </Container>
  )
}

type ICard = Required<
  Pick<
    CardProps,
    'maxWidth' | 'marginX' | 'marginY' | 'narrow' | 'wide' | 'fallback'
  >
> &
  Partial<Pick<CardProps, 'visual'>>

const Container = styled(Box)<ICard>`
  background: ${({ fallback }) =>
    fallback ? theme.colors.cream : theme.colors.custard};
  box-sizing: border-box;
  border-radius: 16px;

  max-width: ${(p) => p.maxWidth};
  margin-top: ${(p) => p.marginY};
  margin-right: ${(p) => p.marginX};
  margin-bottom: ${(p) => p.marginY};
  margin-left: ${(p) => p.marginX};

  padding: ${({ visual }) => (visual ? '0px' : '16px')};
  position: relative;
  overflow: hidden;
`

const TagWrapper = styled(Box)`
  position: absolute;
  top: 12px;
  right: 12px;
`

const VisualWrapper = styled(Box)<{ visualHeight: string }>`
  width: 100%;
  margin-top: -16px;

  ${({ visualHeight }) => visualHeight && `height: ${visualHeight};`}
`

const Visual = styled(Box)<{ visualUrl: string; visualHeight: string }>`
  width: 100%;
  background-image: url('${(p) => p.visualUrl}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  ${({ visualHeight }) =>
    visualHeight ? `height: ${visualHeight};` : 'padding-top: 100%;'}
`