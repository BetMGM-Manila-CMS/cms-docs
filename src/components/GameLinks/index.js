import { useEffect, useState, useCallback } from "react";
import axios from "axios";

import CodeBlock from "@theme/CodeBlock";

export const GameLinks = () => {
  const baseUrl = (domain) =>
    `https://${domain}/en/games/api/content/GetGameMetaDataFromLMTAsync`;

  const [selectedOption, setSelectedOption] = useState({});
  const [games, setGames] = useState([]);

  const options = [
    {
      label: "BetMGM NJ",
      code: "BC NJ",
      domain: "casino.nj.betmgm.com",
      imageDomain: "casinogames.nj.betmgm.com",
    },
    {
      label: "BetMGM PA",
      code: "BC PA",
      domain: "casino.pa.betmgm.com",
      imageDomain: "casinogames.pa.betmgm.com",
    },
    {
      label: "BetMGM MI",
      code: "BC MI",
      domain: "casino.mi.betmgm.com",
      imageDomain: "casinogames.mi.betmgm.com",
    },
    {
      label: "BetMGM WV",
      code: "BC WV",
      domain: "casino.wv.betmgm.com",
      imageDomain: "casinogames.wv.betmgm.com",
    },
  ];

  useEffect(() => {
    setSelectedOption(options[0]);
  }, []);

  useEffect(() => {
    console.log(baseUrl(selectedOption.domain));
    setGames([]);
    if (selectedOption.domain) {
      axios({
        method: "get",
        url: baseUrl(selectedOption.domain),
      }).then((res) => {
        console.log(res.data);
        setGames(res.data);
      });
    }
  }, [selectedOption]);

  const copyTile = (game) => {
    const tile = `
        <a href="!!M2.CasinoHome/launchng/${game.game}">
            <img 
                style="border: 5px solid #FFFFFF;" 
                src="https://${selectedOption.imageDomain}/htmllobby/images/newlmticons/square/${game.game}.jpg" 
                alt="${game.name}" 
                width="100" 
                height="100" 
            />
        </a>`;

    navigator.clipboard.writeText(tile);
  };

  return (
    <>
      <label
        htmlFor="countries"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Select the Brand and State
      </label>
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

      <table className="mt-10 h-[300px]">
        <thead>
          <tr>
            <th>Game</th>
            <th>Smartlink</th>
            <th>Copy Tile</th>
          </tr>
        </thead>
        <tbody>
          {games.length
            ? games.map((game, index) => {
                return (
                  <tr key={index}>
                    <td>{game.name}</td>
                    <td>
                      <CodeBlock>
                        !!M2.CasinoHome/launchng/{game.game}
                      </CodeBlock>
                    </td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => copyTile(game)}
                      >
                        Copy Tile
                      </button>
                    </td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    </>
  );
};
