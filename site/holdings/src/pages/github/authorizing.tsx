import React from 'react'

import { TinaReset } from '@tinacms/styles'
import { useGithubAuthRedirect } from 'react-tinacms-github'
import { Modal, ModalPopup, ModalBody } from 'tinacms'

export const Authorizing = () => {
  useGithubAuthRedirect()

  return (
    <TinaReset>
      <Modal>
        <ModalPopup>
          <ModalBody padded>
            <p>Authorizing with Github, Please wait...</p>
          </ModalBody>
        </ModalPopup>
      </Modal>
    </TinaReset>
  )
}

export default Authorizing
