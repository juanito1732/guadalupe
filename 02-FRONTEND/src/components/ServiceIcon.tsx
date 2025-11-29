import { FC } from 'react'
import {
  FaUsers,
  FaScaleBalanced,
  FaHeartPulse,
  FaFileContract,
  FaGavel,
  FaLightbulb,
} from 'react-icons/fa6'

interface ServiceIconProps {
  type: string
  size?: number
}

const ServiceIcon: FC<ServiceIconProps> = ({ type, size = 32 }) => {
  const iconSize = size

  switch (type) {
    case 'family':
      return <FaUsers size={iconSize} />

    case 'inheritance':
      return <FaScaleBalanced size={iconSize} />

    case 'health':
      return <FaHeartPulse size={iconSize} />

    case 'contract':
      return <FaFileContract size={iconSize} />

    case 'litigation':
      return <FaGavel size={iconSize} />

    case 'consulting':
      return <FaLightbulb size={iconSize} />

    default:
      return <FaGavel size={iconSize} />
  }
}

export default ServiceIcon
