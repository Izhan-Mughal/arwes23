import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import { ZERO } from '@sushiswap/core-sdk'
import Button, { ButtonProps } from 'app/components/Button'
import Dots from 'app/components/Dots'
import ProgressSteps from 'app/components/ProgressSteps'
import { ApprovalState } from 'app/hooks/useApproveCallback'
import { BentoApprovalState } from 'app/hooks/useBentoMasterApproveCallback'
import { useActiveWeb3React } from 'app/services/web3'
import { useDerivedInariState, useSelectedInariStrategy } from 'app/state/inari/hooks'
import React, { FC, useCallback, useState } from 'react'
// @ts-ignore: Unreachable code error
// eslint-disable-next-line simple-import-sort/imports
import { Arwes, ThemeProvider, Heading, Paragraph, Frame, createTheme, SoundsProvider, createSounds, withSounds } from 'arwes';
// @ts-ignore
const Player = withSounds()(props => (
  <span

    onClick={() => props.sounds[props.id].play()}

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
interface InariButtonProps extends ButtonProps { }

const InariButton: FC<InariButtonProps> = ({ children, ...rest }) => {
  const { i18n } = useLingui()
  const { account } = useActiveWeb3React()
  const { inputValue } = useDerivedInariState()
  const { balances, execute, bentoApproveCallback, approveCallback } = useSelectedInariStrategy()
  const [pending, setPending] = useState(false)

  const onExecute = useCallback(async () => {
    setPending(true)
    const tx = await execute(inputValue)
    setPending(false)
    await tx?.wait()
  }, [execute, inputValue])

  // Get permit to send with execute
  const handleGetPermit = useCallback(async () => {
    // @ts-ignore TYPE NEEDS FIXING
    await bentoApproveCallback.getPermit()
  }, [bentoApproveCallback])

  // Add token approve to approve flow
  // Note that this is not required when unstaking from BentoBox strategies, hence approveCallback can be null
  const steps = []
  if (approveCallback) steps.push(approveCallback[0] === ApprovalState.APPROVED)
  if (bentoApproveCallback) steps.push(bentoApproveCallback.approvalState === BentoApprovalState.APPROVED)

  const approveFlow = (
    <div className="flex flex-col">
      <ProgressSteps steps={steps} />
    </div>
  )

  if (!account)
    return (
      <SoundsProvider sounds={createSounds(sounds)}>


        <Button {...rest} disabled>


          <Player id="ask" content={i18n._(t`Connect Wallet`)}>
            {i18n._(t`Connect Wallet`)}

          </Player>
        </Button>


      </SoundsProvider>

    )

  if (!inputValue || inputValue.equalTo(ZERO))
    return (

      <SoundsProvider sounds={createSounds(sounds)}>


        <Button {...rest} disabled>


          <Player id="ask" content={i18n._(t`Enter an amount`)}>
            {i18n._(t`Enter an amount`)}

          </Player>
        </Button>


      </SoundsProvider>
    )

  if (inputValue && balances && balances.inputTokenBalance && balances.inputTokenBalance.lessThan(inputValue))
    return (


      <SoundsProvider sounds={createSounds(sounds)}>


        <Button {...rest} disabled>


          <Player id="ask" content={i18n._(t`Insufficient Balance`)}>
            {i18n._(t`Insufficient Balance`)}

          </Player>
        </Button>


      </SoundsProvider>
    )

  if (approveCallback && approveCallback[0] === ApprovalState.PENDING)
    return (
      <>

        <SoundsProvider sounds={createSounds(sounds)}>


          <Button {...rest} disabled>
            {/*@ts-ignore TYPE NEEDS FIXING*/}

            <Player id="ask" content={<Dots>{i18n._(t`Approving Inari to spend`) + ` ${approveCallback[2].currency.symbol}`}</Dots>}>
              {/*@ts-ignore TYPE NEEDS FIXING*/}
              <Dots>{i18n._(t`Approving Inari to spend`) + ` ${approveCallback[2].currency.symbol}`}</Dots>

            </Player>
          </Button>

          {approveFlow}

        </SoundsProvider>
      </>
    )

  if (approveCallback && approveCallback[0] === ApprovalState.NOT_APPROVED)
    return (
      <>


        <SoundsProvider sounds={createSounds(sounds)}>


          <Button {...rest} color="pink" onClick={approveCallback[1]}>

            {/*@ts-ignore TYPE NEEDS FIXING*/}
            <Player id="ask" content={i18n._(t`Approve Inari to spend`) + ` ${approveCallback[2].currency.symbol}`}>

            {i18n._(t`Approve Inari to spend`) + ` ${approveCallback[2].currency.symbol}`}

            </Player>
          </Button>

          {approveFlow}

        </SoundsProvider>
      </>
    )

  if (bentoApproveCallback && bentoApproveCallback.approvalState === BentoApprovalState.PENDING)
    return (
      <>
        
        <SoundsProvider sounds={createSounds(sounds)}>

          <Button {...rest} disabled>
            
            <Player id="ask" content={<Dots>{i18n._(t`Approving Inari Master Contract`)}</Dots>}>
            <Dots>{i18n._(t`Approving Inari Master Contract`)}</Dots>

            </Player>
          </Button>

          {approveFlow}

        </SoundsProvider>
      </>
    )

  if (bentoApproveCallback && bentoApproveCallback.approvalState === BentoApprovalState.NOT_APPROVED)
    return (
      <>

                
        <SoundsProvider sounds={createSounds(sounds)}>

          <Button  {...rest} color="pink" onClick={handleGetPermit}>
            
            <Player id="ask" content={i18n._(t`Approve Inari Master Contract`)}>
            {i18n._(t`Approve Inari Master Contract`)}

            </Player>
          </Button>

          {approveFlow}

        </SoundsProvider>
      </>
    )

  return (

                  
                  <SoundsProvider sounds={createSounds(sounds)}>

                  <Button {...rest} disabled={pending} color={pending ? 'gray' : 'gradient'} onClick={onExecute}>
                    
                    <Player id="ask" content={children}>
                    {children}
        
                    </Player>
                  </Button>
        
                  {approveFlow}
        
                </SoundsProvider>
  )
}

export default InariButton
