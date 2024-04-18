import { useEffect, useState, useCallback } from "react";
import axios from "axios";

import { CopyIconButton } from "../CopyIconButton";

import CodeBlock from "@theme/CodeBlock";
import CopyButton from "@theme/CodeBlock/CopyButton";

const GameLinkRow = ({ game, option, onSelect, ...props }) => {
  const gameTile = (game) => {
    const tile = `<a href="!!M2.CasinoHome/launchng/${game.game}"> <img style="border: 5px solid #FFFFFF;" src="https://${option.imageDomain}/htmllobby/images/newlmticons/square/${game.game}.jpg" alt="${game.name}" width="100" height="100" /> </a>`;

    return tile;
  };

  return (
    <tr className={`${[game.selected ? 'selected-game-row' : null]}`} {...props}>
      <td><input onChange={onSelect} value={game.selected} type="checkbox" /></td>
      <td>{game.name}</td>
      <td>{game.provider}</td>
      <td>
        <CodeBlock className="max-w-[300px]">
          {game.game}
        </CodeBlock>
      </td>
      <td>
        <CopyIconButton
          text={`!!M2.CasinoHome/launchng/${game.game}`}
        />
      </td>
      <td>
        <CopyIconButton text={gameTile(game)} />
      </td>
    </tr>
  )
}

export const GameLinks = () => {
  const baseUrl = (domain) =>
    `https://${domain}/en/games/api/content/GetGameMetaDataFromLMTAsync`;

  const [selectedOption, setSelectedOption] = useState({});
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [selectedGames, setSelectedGames] = useState([])

  const options = [
    {
      label: "BetMGM NJ",
      code: "MC NJ",
      domain: "casino.nj.betmgm.com",
      imageDomain: "casinogames.nj.betmgm.com",
    },
    {
      label: "BetMGM PA",
      code: "MC PA",
      domain: "casino.pa.betmgm.com",
      imageDomain: "casinogames.pa.betmgm.com",
    },
    {
      label: "BetMGM MI",
      code: "MC MI",
      domain: "casino.mi.betmgm.com",
      imageDomain: "casinogames.mi.betmgm.com",
    },
    {
      label: "BetMGM WV",
      code: "MC WV",
      domain: "casino.wv.betmgm.com",
      imageDomain: "casinogames.wv.betmgm.com",
    },
    {
      label: "BetMGM ON",
      code: "MC ON",
      domain: "casino.on.betmgm.ca",
      imageDomain: "casinogames.on.betmgm.ca",
    },
    {
      label: "Borgata NJ",
      code: "BC NJ",
      domain: "casino.borgataonline.com",
      imageDomain: "casinogames.borgataonline.com",
    },
    {
      label: "Borgata PA",
      code: "BC PA",
      domain: "casino.pa.borgataonline.com",
      imageDomain: "casinogames.pa.borgataonline.com",
    },
    {
      label: "PartyCasino NJ",
      code: "PC NJ",
      domain: "casino.nj.partycasino.com",
      imageDomain: "casinogames.nj.partycasino.com",
    },
    {
      label: "Wheel Of Fortune",
      code: "WOF",
      domain: "casino.wheeloffortunecasino.com",
      imageDomain: "casinogames.wheeloffortunecasino.com",
    },
  ];

  useEffect(() => {
    setGames([]);
    if (selectedOption.domain) {
      setIsLoading(true);
      setIsError(false);
      axios({
        method: "get",
        url: baseUrl(selectedOption.domain),
      })
        .then((res) => {
          setGames(res.data.map(game => ({
            ...game,
            selected: false
          })));
        })
        .catch((e) => {
          console.log(e);
          setIsError(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [selectedOption]);

  useEffect(() => {
    setSelectedGames(games.filter(game => game.selected))
  }, [games])

  const gameTile = (game) => {
    if (game.provider === "NETENT" || game.provider === "DGC") {
      return `
        <a href="!!M2.CasinoHome/launchmgc?gd=${game.game}&gm=${game.game}mobile"> 
          <img 
            style="border: 5px solid #FFFFFF;" 
            src="https://${selectedOption.imageDomain}/htmllobby/images/newlmticons/square/${game.game}.jpg" alt="${game.name}" 
            width="100" 
            height="100" 
          /> 
        </a>
      `;
    } else {
      return `
        <a href="!!M2.CasinoHome/launchng/${game.game}"> 
          <img 
            style="border: 5px solid #FFFFFF;" 
            src="https://${selectedOption.imageDomain}/htmllobby/images/newlmticons/square/${game.game}.jpg" alt="${game.name}" 
            width="100" 
            height="100" 
          /> 
        </a>
      `;
    }
  };

  const onSelectGame = (gameName) => {
    const gameIndex = games.indexOf(games.find(game => game.name === gameName))

    setGames(games => (
      games.map((game, index) => {
        if (index === gameIndex) {
          return { ...game, selected: !game.selected }
        } else {
          return game
        }
      })
    ))

    console.log(games[gameIndex])
  }

  const isSelected = (gameName) => {
    const gameIndex = games.indexOf(games.find(game => game.name === gameName))
    return games[gameIndex].selected
  }

  const clearSelected = () => {
    setGames(games => (
      games.map(game => ({
        ...game,
        selected: false
      }))
    ))
  }

  const generateTiles = () => {
    let tiles = ''
    selectedGames.map(game => {
      tiles += gameTile(game)
    })
    navigator.clipboard.writeText(`<p>${tiles}</p>`)
    alert('Game Tiles is now copied to your clipboard')
  }

  return (
    <>
      <select
        defaultValue="default"
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={(e) => {
          setSelectedOption(
            options.find((option) => option.code === e.target.value),
          );
        }}
      >
        <option value="default">Choose Brand State</option>
        {options.map((option, index) => {
          return (
            <option key={index} value={option.code}>
              {option.label}
            </option>
          );
        })}
      </select>

      <div className="flex gap-2 mt-4 flex-wrap">
        {
          selectedGames.map((game, index) => {
            return (
              <span key={index} className="bg-primary text-black text-xs font-medium px-2.5 py-0.5 rounded-full">{game.name}</span>
            )
          })
        }
      </div>

      {
        selectedGames.length ?
          <div className="flex gap-2 mt-4 flex-wrap">
            <button
              type="button"
              className="text-black bg-primary hover:bg-primary-darkest focus:ring-1 focus:ring-primary-dark font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
              onClick={clearSelected}
            >
              Clear Selection
        </button>
            <button
              type="button"
              className="text-black bg-primary hover:bg-primary-darkest focus:ring-1 focus:ring-primary-dark font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
              onClick={generateTiles}
            >
              Generate Game Tiles
            </button>
          </div>
          : null
      }

      <table className="mt-4 w-full max-h-[300px]">
        <thead>
          <tr>
            <th className="w-[10%]"></th>
            <th className="w-[30%]">Game</th>
            <th className="w-[20%]">Provider</th>
            <th className="w-[30%] whitespace-nowrap">Code</th>
            <th className="w-[10%] whitespace-nowrap">Smartlink</th>
            <th className="w-[10%] whitespace-nowrap">Game Tile</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td className="text-center" colSpan={6}>
                Fetching Games Data
              </td>
            </tr>
          ) : null}
          {isError ? (
            <tr>
              <td className="text-center" colSpan={6}>
                Error Fetching Games
              </td>
            </tr>
          ) : null}
          {games.length
            ? games.map((game, index) => {
              return <GameLinkRow
                key={index}
                game={game}
                option={selectedOption}
                onSelect={(e) => {
                  onSelectGame(game.name)
                }}
              />;
            })
            : null}
        </tbody>
      </table>
    </>
  );
};

/* onClick={(e) => {
  e.persist()
  onSelectGame(game.name)
}} */