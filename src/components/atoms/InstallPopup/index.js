import {popup, share} from './InstallPopup.module.scss'

const InstallPopup = () => {

  return (
    <p className={popup}>
      If you'd like to stay up to date, install Digest by clicking on <img className={share} src="./images/share.svg"></img> followed by 'Add to homescreen'
    </p>
  )
}

export default InstallPopup