import { HStack, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { BsGlobe } from 'react-icons/bs';
import { FaAndroid, FaApple, FaLinux, FaPlaystation, FaWindows, FaXbox } from "react-icons/fa";
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { Platform } from '../hooks/useGames';

interface Props {
    platforms: Platform[]
}

const PlatformIconsList = ({ platforms }: Props) => {

  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid
}
  return (
    <HStack marginY={1}>
    {platforms.map((platform) => (
      <Icon as={iconMap[platform.slug]} color='gray.500'  />
    ))}
    </HStack>
  );
};

export default PlatformIconsList;