"use client";

import { useState } from "react";

import Header from "@/components/Header/Header";
import StatistickCard from "@/components/StatistickCard/StatistickCard";
import MarketCapCard from "@/components/MarketCapCard/MarketCapCard";

import Vector from "@/assets/icons/vector.svg";
import MarketCapGreen from "@/assets/icons/marketCapGreen.svg";
import MarketCapPeople from "@/assets/icons/marketCapPeople.svg";
import MarketCapPurple from "@/assets/icons/marketCapPurple.svg";

import LearnMoreBlog from "@/assets/icons/learnMoreBlog.svg";
import LearnMoreAbout from "@/assets/icons/learnMoreAbout.svg";
import LearnMoreSE from "@/assets/icons/learnMoreSE.svg";
import LearnMoreTBD from "@/assets/icons/learnMoreTBD.svg";

import Users from "@/assets/icons/users.svg";

import styles from "./page.module.scss";
import LearnMoreCard from "@/components/LearnMoreCard/LearnMoreCard";

export default function Home() {
  const [burgerToggle, setBurgerToggle] = useState("");

  // this is for header menu toggle

  const handleBurgerToggle = (identity) => {
    setBurgerToggle("");
    if (identity === "burger") {
      setBurgerToggle("burger");
    }
  };

  return (
    <>
      <Header
        burgerToggleValue={burgerToggle}
        handleBurgerToggle={handleBurgerToggle}
      />
      <div
        onClick={() => {
          handleBurgerToggle("none");
        }}
      >
        <div className={styles.mainContentcontainer}>
          <div className={styles.mainContent}>
            <div className={styles.mainContentStatistick}>
              <div className={styles.buyMemes}>
                <div className={styles.memeText}>
                  <h1>Buy Memes.</h1>
                  <h1>In Two Clicks.</h1>
                </div>
                <div className={styles.memeSubText}>
                  <span>The fastest way to buy memes in just two clicks.</span>
                  <span>Under 1 minute to sign up and no wallet needed. </span>
                </div>
              </div>
              <div className={styles.statistick}>
                <StatistickCard
                  header={"total users"}
                  quantity={"52,630"}
                  icon={Users}
                />
                <StatistickCard
                  header={"trade volume"}
                  quantity={"1,288,314,266"}
                />
              </div>
            </div>

            <MarketCapCard
              isBig={true}
              backgroundColor={"brown"}
              tickIcon={Vector}
              name={"virtual"}
              capShifts={"0.59%"}
              price={"$2.74"}
              volume={"$1.7B"}
              marketDynamics={"up"}
            />
          </div>
        </div>
        <div className={styles.hotMarketContainer}>
          <div className={styles.hotMarketContent}>
            <div className={styles.hotMarketHeader}>
              <h1>hottest</h1>
            </div>
            <div className={styles.hotMarketCardsContainer}>
              <ul>
                <li>
                  <MarketCapCard
                    icon={MarketCapGreen}
                    isBig={false}
                    name={"virtual"}
                    capShifts={"0.59%"}
                    price={"$2.74"}
                    volume={"$1.7B"}
                    marketDynamics={"up"}
                  />
                </li>
                <li>
                  <MarketCapCard
                    icon={MarketCapPeople}
                    isBig={false}
                    name={"ai16z"}
                    capShifts={"11.59%"}
                    price={"$0.0873"}
                    volume={"$962k"}
                    marketDynamics={"down"}
                    tickIcon={Vector}
                  />
                </li>
                <li>
                  <MarketCapCard
                    isBig={false}
                    name={"ticker3"}
                    price={"$0.1232"}
                    volume={"$701M"}
                    tickIcon={Vector}
                    backgroundColor={"black"}
                  />
                </li>
                <li>
                  <MarketCapCard
                    icon={MarketCapPurple}
                    isBig={false}
                    name={"ticker4"}
                    price={"$25.51"}
                    volume={"$988"}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.LearMoreContainer}>
          <div className={styles.LearMoreContent}>
            <div className={styles.LearMoreHeader}>
              <h1>Learn more</h1>
            </div>

            <div className={styles.learnMoreCards}>
              <ul>
                <li>
                  <LearnMoreCard icon={LearnMoreAbout} />
                </li>
                <li>
                  <LearnMoreCard icon={LearnMoreBlog} />
                </li>
                <li>
                  <LearnMoreCard icon={LearnMoreSE} />
                </li>
                <li>
                  <LearnMoreCard icon={LearnMoreTBD} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
