import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core'
import { classNames } from 'app/functions'
import { useWalletModalToggle } from 'app/state/application/hooks'
import React, { FC, Fragment, useCallback, useRef } from 'react'
import { Activity } from 'react-feather'

import Button, { ButtonProps } from '../Button'
// @ts-ignore: Unreachable code error
// eslint-disable-next-line simple-import-sort/imports
import { Arwes, ThemeProvider, Heading, Paragraph, Frame, createTheme, SoundsProvider, createSounds, withSounds } from 'arwes';
import Typography from 'app/components/Typography'
export default function Web3Connect({ color = 'gray', size = 'sm', className = '', ...rest }: ButtonProps) {
  const { i18n } = useLingui()
  const toggleWalletModal = useWalletModalToggle()
  const { error } = useWeb3React()
  // @ts-ignore
  const Player = withSounds()(props => (
    <span
      className='py-2 px-2'
      onClick={() => props.sounds[props.id].play()}
      onMouseOver={() => props.sounds[props.id].play()}
    >
      {props.content}
    </span>
  ));
  const sounds = {
    shared: { volume: 1 },
    players: {
      information: { sound: { src: ['/sounds/information.mp3'] } },
      ask: { sound: { src: ['/sounds/ask.mp3'] } },
      warning: { sound: { src: ['/sounds/warning.mp3'] } },
      error: { sound: { src: ['/sounds/error.mp3'] } },
    },
  };

  return error ? (
    <div
      className="flex items-center justify-center px-4 py-2 font-semibold text-white border rounded bg-opacity-80 border-red bg-red hover:bg-opacity-100"
      onClick={toggleWalletModal}
    >
      <div className="mr-1">
        <Activity className="w-4 h-4" />
      </div>
      {error instanceof UnsupportedChainIdError ? i18n._(t`You are on the wrong network`) : i18n._(t`Error`)}
    </div>
  ) : (
    // <Frame
    //   animate={true}
    //   level={3}
    //   corners={4}
    //   layer='primary'
    //   id="connect-wallet"
    //   onClick={toggleWalletModal}
    //   variant="outlined"
    //   color={color}
    //   className="py-2 mx-auto text-center bg-transparent w-max"
    //   size={size}
    //   {...rest}
    // >
    //   <div className="px-3 py-2">
    //   {i18n._(t`Connect`)}

    //   </div>
    // </Frame>
    <SoundsProvider sounds={createSounds(sounds)}>
      <Frame 
  animate={true}
    level={3}
    corners={4}
    layer='primary'
    id="connect-wallet"
    onClick={toggleWalletModal}
    variant="outlined"
    color={color}
    className="py-2 mx-auto text-center bg-transparent w-max"
    size={size}
    {...rest}
      >

        <Player id="ask" content={i18n._(t`Connect`)}>
          {i18n._(t`Connect`)}

        </Player>

      </Frame>
    </SoundsProvider>
  )
}
