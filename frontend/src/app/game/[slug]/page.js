import GamePageClient from './gamePageClientSide'
import gameService from '../../../services/game.service'
import { redirect } from 'next/navigation'

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const gameResponse = await gameService.getGame(slug)
  const game = gameResponse?.game; 

  if (!game) {
    return {
      title: "Game Not Found | Eternal Games",
      description: "Game not found on Eternal Games.",
    };
  }
  
  const title = `${game?.gameName} Online Free | Eternal Games`;

  const description =
    `Play ${game?.gameName} online for free at Eternal Games.`;

  const canonicalUrl =
    `https://www.eternalgames.io/games/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Eternal Games",
      type: "website",
    },
  };
}

export default async function Page({ params }) {
  const { slug } = params

  try {
    const gameResponse = await gameService.getGame(slug)
    const sideGamesResponse = await gameService.getGameList()

    if (!gameResponse || !gameResponse.game) {
      return redirect('/')
    }

    const filteredSideGames = sideGamesResponse?.games?.filter(g => g?.slug !== slug) || []

    return (
          <GamePageClient
              game={gameResponse.game}
              description={gameResponse.data?.description || ''}
              sideGames={filteredSideGames}
              slug={slug}
          />
    )
  } catch (error) {
    redirect('/')
    console.error(error)
  }
}
