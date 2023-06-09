import { Card, CardBody, Image, Heading, HStack } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import getCroppedImageUrl from '../services/image-url';
import CriticScore from './CriticScore';
import PlatformIconsList from './PlatformIconsList';
import Emoji from './Emoji';


interface Props {
    game: Game
}

const GameCard = ({ game }: Props) => {

  return (
    <Card>
        <Image src={game.background_image} />
        <CardBody>
             {/* {game.parent_platforms.map(({platform}) => <Text>{platform.name}</Text>)} */}
             <HStack justifyContent='space-between' marginBottom={3}>
              <PlatformIconsList platforms={game.parent_platforms.map(p => p.platform)} />
              <CriticScore score={game.metacritic} />
             </HStack>
            <Heading fontSize="2xl">
              {game.name}
            <Emoji rating={game.rating_top}/>
            </Heading>
        </CardBody>
    </Card>
  )
}

export default GameCard;