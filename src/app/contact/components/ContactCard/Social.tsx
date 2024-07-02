import {
  FacebookLogo,
  LinkedinLogo,
  XLogo,
} from '@phosphor-icons/react/dist/ssr'
import { IconWrapper } from './IconWrapper'

export function Social() {
  return (
    <>
      <div className="flex gap-3">
        <IconWrapper icon={<FacebookLogo />} />
        <IconWrapper icon={<XLogo />} />
        <IconWrapper icon={<LinkedinLogo />} />
      </div>
      <p className="text-lg text-skillbridge-grey-30">Social Profiles</p>
    </>
  )
}
