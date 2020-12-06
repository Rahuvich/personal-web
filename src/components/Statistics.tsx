import React from "react";
import { Statistics } from "../state/types";
import LanguageItem from "./Language";
interface Props {
  stats: Statistics;
}

function StatisticsHeader(props: Props) {
  return (
    <div className="flex flex-col space-y-5 bg-dark-darker rounded-3xl mx-5 md:mx-20 px-5 md:px-10 py-5">
      <div>
        <span className="uppercase text-gray-400 font-normal">
          Lately using
        </span>
        {props.stats.lately.map((language) => (
          <div className="mx-2 inline-block">
            <LanguageItem key={language.name} lang={language} />
          </div>
        ))}
      </div>
      <div>
        <span className="uppercase text-gray-400 font-normal">Summary</span>
        {props.stats.ever
          .filter(
            (tuple) =>
              tuple[1].name !== "HTML" &&
              tuple[1].name !== "CSS" &&
              tuple[1].name !== "Objective-C" &&
              tuple[1].name !== "Swift" &&
              tuple[1].name !== "Kotlin" &&
              tuple[1].name !== "Makefile" &&
              tuple[1].name !== "CoffeeScript" &&
              tuple[1].name !== "Ruby"
          )
          .sort((tupleA, tupleB) => {
            return tupleA[0] > tupleB[0] ? -1 : 1;
          })
          .map((tuple) => (
            <div className="inline mx-2">
              <LanguageItem key={tuple[1].name} lang={tuple[1]} /> on{" "}
              {`${tuple[0]} ${tuple[0] > 1 ? "projects" : "project"}`}
            </div>
          ))}
      </div>
    </div>
  );
}

export default StatisticsHeader;
