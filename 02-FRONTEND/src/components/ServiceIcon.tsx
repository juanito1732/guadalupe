import { FC } from 'react'
import {
  FaUsers,
  FaScaleBalanced,
  FaHeartPulse,
  FaFileContract,
  FaGavel,
  FaLightbulb,
  FaVenusMars,
  FaHandHoldingHeart,
  FaBaby,
  FaHeartCrack,
  FaSackDollar,
  FaCoins,
  FaHandshake,
  FaLandmark,
  FaFileSignature,
  FaFileMedical,
  FaShieldHeart,
  FaKitMedical,
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

    case 'gender':
      return <FaVenusMars size={iconSize} />

    case 'support':
      return <FaHandHoldingHeart size={iconSize} />

    case 'childcare':
      return <FaBaby size={iconSize} />

    case 'divorce':
      return <FaHeartCrack size={iconSize} />

    case 'money':
      return <FaSackDollar size={iconSize} />

    case 'compensation':
      return <FaCoins size={iconSize} />

    case 'agreement':
      return <FaHandshake size={iconSize} />

    case 'estate':
      return <FaLandmark size={iconSize} />

    case 'testament':
      return <FaFileSignature size={iconSize} />

    case 'medical':
      return <FaFileMedical size={iconSize} />

    case 'protection':
      return <FaShieldHeart size={iconSize} />

    case 'healthkit':
      return <FaKitMedical size={iconSize} />

    default:
      return <FaGavel size={iconSize} />
  }
}

export default ServiceIcon
