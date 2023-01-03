import React, { useState } from "react"
import EmojiGrid from "../EmojiGrid/EmojiGrid"
import Searchbar from "../Searchbar/Searchbar"
import Emoji from "../Emoji/Emoji"
import { v4 as uuidv4 } from "uuid"
import { ReactComponent as RecentIcon } from "../../icons/recent-icon-text.svg"
import { ReactComponent as RecentIconChat } from "../../icons/recent-icon-chat.svg"
import { ReactComponent as SmileysAndPeopleIcon } from "../../icons/smileys-and-people-icon-text.svg"
import { ReactComponent as SmileysAndPeopleIconChat } from "../../icons/smileys-and-people-icon-chat.svg"
import { ReactComponent as AnimalsAndNatureIcon } from "../../icons/animals-and-nature-icon-text.svg"
import { ReactComponent as AnimalsAndNatureIconChat } from "../../icons/animals-and-nature-icon-chat.svg"
import { ReactComponent as FoodAndDrinkIcon } from "../../icons/food-and-drink-icon-text.svg"
import { ReactComponent as FoodAndDrinkIconChat } from "../../icons/food-and-drink-icon-chat.svg"
import { ReactComponent as ActivityIcon } from "../../icons/activity-icon-text.svg"
import { ReactComponent as ActivityIconChat } from "../../icons/activity-icon-chat.svg"
import { ReactComponent as TravelAndPlacesIcon } from "../../icons/travel-and-places-icon-text.svg"
import { ReactComponent as TravelAndPlacesIconChat } from "../../icons/travel-and-places-icon-chat.svg"
import { ReactComponent as ObjectsIcon } from "../../icons/objects-icon-text.svg"
import { ReactComponent as ObjectsIconChat } from "../../icons/objects-icon-chat.svg"
import { ReactComponent as SymbolsIcon } from "../../icons/symbols-icon-text.svg"
import { ReactComponent as SymbolsIconChat } from "../../icons/symbols-icon-chat.svg"
import { ReactComponent as FlagsIcon } from "../../icons/flags-icon-text.svg"
import { ReactComponent as FlagsIconChat } from "../../icons/flags-icon-chat.svg"
import "./reactionEmojiContainer.css"

function ReactionEmojiContainer({ type }) {
  const [scrollY, setScrollY] = useState(0)
  const [scrollReactionY, setScrollReactionY] = useState(0)
  const [searchedEmojis, setSearchedEmojis] = useState([])
  const [searchedChatEmojis, setSearchedChatEmojis] = useState([])

  function handleEmojiScroll(e) {
    const container = e.target.closest(".type-message-container")
    const emojisContainer = document.querySelector(".emojis-container")
    const searchbar = container.querySelector(".searchbar-wrapper")
    const searchbarInput = searchbar.querySelector("input")
    setScrollY(prevScrollY => (prevScrollY = emojisContainer.scrollTop))
    if (scrollY > emojisContainer.scrollTop) {
      searchbar.classList.remove("searchbar-hide")
      searchbar.classList.add("searchbar-show")
      searchbarInput.style.backgroundColor = "var(--teal)"
    } else if (scrollY < emojisContainer.scrollTop) {
      searchbar.classList.remove("searchbar-show")
      searchbar.classList.add("searchbar-hide")
    }
    setTimeout(handleInputColor, 500)
    function handleInputColor() {
      searchbarInput.style.backgroundColor = "var(--panel-background)"
    }
    handleReactionIconBorder(emojisContainer)
  }

  function handleEmojiScrollReaction(e) {
    const container = e.target.closest(".reaction-emoji-chat")
    const emojisContainer = container.querySelector(
      ".emojis-container-message-chat"
    )
    const searchbar = container.querySelector(".searchbar-wrapper")
    const searchbarInput = searchbar.querySelector("input")

    setScrollReactionY(
      prevScrollReactionY => (prevScrollReactionY = emojisContainer.scrollTop)
    )
    if (scrollReactionY > emojisContainer.scrollTop) {
      searchbar.classList.remove("searchbar-hide")
      searchbar.classList.add("searchbar-show")
      searchbarInput.style.backgroundColor = "var(--teal)"
    } else if (scrollReactionY < emojisContainer.scrollTop) {
      searchbar.classList.remove("searchbar-show")
      searchbar.classList.add("searchbar-hide")
    }

    setTimeout(handleInputColor, 500)
    function handleInputColor() {
      searchbarInput.style.backgroundColor = "var(--panel-background)"
    }

    handleChatReactionIconBorder(emojisContainer, container)
  }

  function handleChatReactionIconBorder(emojisContainer, container) {
    const reactionIconBorder = container.querySelector(
      ".reaction-icon-border-chat"
    )
    const scrollValue = emojisContainer.scrollTop
    const recentEmojisLogo = container.querySelector(".recent-chat")
    const smileysPeopleEmojisLogo = container.querySelector(
      ".smileys-people-chat"
    )
    const animalsNatureEmojisLogo = container.querySelector(
      ".animals-nature-chat"
    )
    const foodDrinksEmojisLogo = container.querySelector(".food-drink-chat")
    const activityEmojisLogo = container.querySelector(".activity-chat")
    const travelPlacesEmojisLogo = container.querySelector(
      ".travel-places-chat"
    )
    const objectsEmojisLogo = container.querySelector(".objects-chat")
    const symbolsEmojisLogo = container.querySelector(".symbols-chat")
    const flagsEmojisLogo = container.querySelector(".flags-chat")

    if (scrollValue === 0) {
      highlightChatEmojiSection(recentEmojisLogo, container)
      reactionIconBorder.style.transform = `translateX(0px)`
      reactionIconBorder.style.transition = "transform 0.1s"
    }
    if (scrollValue >= 102) {
      highlightChatEmojiSection(smileysPeopleEmojisLogo, container)
      reactionIconBorder.style.transform = `translateX(41px)`
      reactionIconBorder.style.transition = "transform 0.1s"
    }
    if (scrollValue >= 333) {
      highlightChatEmojiSection(animalsNatureEmojisLogo, container)
      reactionIconBorder.style.transform = `translateX(83px)`
      reactionIconBorder.style.transition = "transform 0.1s"
    }
    if (scrollValue >= 446) {
      highlightChatEmojiSection(foodDrinksEmojisLogo, container)
      reactionIconBorder.style.transform = `translateX(123px)`
      reactionIconBorder.style.transition = "transform 0.1s"
    }
    if (scrollValue >= 590) {
      highlightChatEmojiSection(activityEmojisLogo, container)
      reactionIconBorder.style.transform = `translateX(166px)`
      reactionIconBorder.style.transition = "transform 0.1s"
    }
    if (scrollValue >= 682) {
      highlightChatEmojiSection(travelPlacesEmojisLogo, container)
      reactionIconBorder.style.transform = `translateX(208px)`
      reactionIconBorder.style.transition = "transform 0.1s"
    }
    if (scrollValue >= 790) {
      highlightChatEmojiSection(objectsEmojisLogo, container)
      reactionIconBorder.style.transform = `translateX(250px)`
      reactionIconBorder.style.transition = "transform 0.1s"
    }
    if (scrollValue >= 974) {
      highlightChatEmojiSection(symbolsEmojisLogo, container)
      reactionIconBorder.style.transform = `translateX(292px)`
      reactionIconBorder.style.transition = "transform 0.1s"
    }
    if (scrollValue >= 1082) {
      highlightChatEmojiSection(flagsEmojisLogo, container)
      reactionIconBorder.style.transform = `translateX(334px)`
      reactionIconBorder.style.transition = "transform 0.1s"
    }
  }

  function renderSearchedEmojis() {
    if (searchedEmojis.length > 0) {
      return searchedEmojis.map(i => {
        return <Emoji key={uuidv4()} emoji={i.emoji} />
      })
    } else if (searchedChatEmojis.length > 0) {
      return searchedChatEmojis.map(i => {
        return <Emoji key={uuidv4()} emoji={i.emoji} />
      })
    }
  }

  function handleReactionIconClick(e) {
    const emojisContainer = document.querySelector(".emojis-container")

    if (e.target.classList.contains("recent-icon-svg")) {
      return (emojisContainer.scrollTop = 0)
    } else if (e.target.classList.contains("smileys-people-icon-svg")) {
      return (emojisContainer.scrollTop = 101)
    } else if (e.target.classList.contains("animals-nature-icon-svg")) {
      return (emojisContainer.scrollTop = 258)
    } else if (e.target.classList.contains("food-drink-icon-svg")) {
      return (emojisContainer.scrollTop = 365)
    } else if (e.target.classList.contains("activity-icon-svg")) {
      return (emojisContainer.scrollTop = 445)
    } else if (e.target.classList.contains("travel-places-icon-svg")) {
      return (emojisContainer.scrollTop = 546)
    } else if (e.target.classList.contains("objects-icon-svg")) {
      return (emojisContainer.scrollTop = 663)
    } else if (e.target.classList.contains("symbols-icon-svg")) {
      return (emojisContainer.scrollTop = 753)
    } else if (e.target.classList.contains("flags-icon-svg")) {
      return (emojisContainer.scrollTop = 796)
    }
  }

  function handleReactionIconBorder(emojisContainer) {
    const reactionIconBorder = document.querySelector(
      ".reaction-icon-border-text"
    )
    const scrollValue = emojisContainer.scrollTop
    const recentEmojisLogo = document.querySelector(".recent-text")
    const smileysPeopleEmojisLogo = document.querySelector(
      ".smileys-people-text"
    )
    const animalsNatureEmojisLogo = document.querySelector(
      ".animals-nature-text"
    )
    const foodDrinksEmojisLogo = document.querySelector(".food-drink-text")
    const activityEmojisLogo = document.querySelector(".activity-text")
    const travelPlacesEmojisLogo = document.querySelector(".travel-places-text")
    const objectsEmojisLogo = document.querySelector(".objects-text")
    const symbolsEmojisLogo = document.querySelector(".symbols-text")
    const flagsEmojisLogo = document.querySelector(".flags-text")

    if (scrollValue === 0) {
      highlightEmojiSection(recentEmojisLogo)
      reactionIconBorder.style.transform = `translateX(0px)`
      reactionIconBorder.style.transition = "transform 0.1s"
    }
    if (scrollValue >= 100) {
      highlightEmojiSection(smileysPeopleEmojisLogo)
      reactionIconBorder.style.transform = `translateX(120px)`
      reactionIconBorder.style.transition = "transform 0.1s"
    }
    if (scrollValue >= 257) {
      highlightEmojiSection(animalsNatureEmojisLogo)
      reactionIconBorder.style.transform = `translateX(240px)`
      reactionIconBorder.style.transition = "transform 0.1s"
    }
    if (scrollValue >= 364) {
      highlightEmojiSection(foodDrinksEmojisLogo)
      reactionIconBorder.style.transform = `translateX(360px)`
      reactionIconBorder.style.transition = "transform 0.1s"
    }
    if (scrollValue >= 444) {
      highlightEmojiSection(activityEmojisLogo)
      reactionIconBorder.style.transform = `translateX(485px)`
      reactionIconBorder.style.transition = "transform 0.1s"
    }
    if (scrollValue >= 545) {
      highlightEmojiSection(travelPlacesEmojisLogo)
      reactionIconBorder.style.transform = `translateX(605px)`
      reactionIconBorder.style.transition = "transform 0.1s"
    }
    if (scrollValue >= 662) {
      highlightEmojiSection(objectsEmojisLogo)
      reactionIconBorder.style.transform = `translateX(725px)`
      reactionIconBorder.style.transition = "transform 0.1s"
    }
    if (scrollValue >= 752) {
      highlightEmojiSection(symbolsEmojisLogo)
      reactionIconBorder.style.transform = `translateX(850px)`
      reactionIconBorder.style.transition = "transform 0.1s"
    }
    if (scrollValue >= 796) {
      highlightEmojiSection(flagsEmojisLogo)
      reactionIconBorder.style.transform = `translateX(970px)`
      reactionIconBorder.style.transition = "transform 0.1s"
    }
  }

  function highlightChatEmojiSection(element, container) {
    const recentEmojisLogo = container.querySelector(".recent-chat")
    const reactionIcons = [...container.querySelectorAll(".reaction-icon-chat")]
    recentEmojisLogo.style.color = "var(--emoji-icon-highlighted)"
    const nonSelected = reactionIcons.filter(icon => {
      return icon !== element
    })

    nonSelected.forEach(item => {
      item.style.color = "var(--emoji-icon-default)"
    })

    element.style.color = "var(--emoji-icon-highlighted)"
  }

  function highlightEmojiSection(element) {
    const recentEmojisLogo = document.querySelector(".recent")
    const reactionIcons = [...document.querySelectorAll(".reaction-icon-text")]

    recentEmojisLogo.style.color = "var(--emoji-icon-highlighted)"
    const nonSelected = reactionIcons.filter(icon => {
      return icon !== element
    })

    nonSelected.forEach(item => {
      item.style.color = "var(--emoji-icon-default)"
    })

    element.style.color = "var(--emoji-icon-highlighted)"
  }

  function handleReactionIconChatClick(e) {
    const container = e.target.closest(".reaction-emoji-chat")
    const emojisContainer = container.querySelector(
      ".emojis-container-message-chat"
    )

    if (e.target.classList.contains("recent-icon-svg-chat")) {
      return (emojisContainer.scrollTop = 0)
    } else if (e.target.classList.contains("smileys-people-icon-svg-chat")) {
      return (emojisContainer.scrollTop = 103)
    } else if (e.target.classList.contains("animals-nature-icon-svg-chat")) {
      return (emojisContainer.scrollTop = 334)
    } else if (e.target.classList.contains("food-drink-icon-svg-chat")) {
      return (emojisContainer.scrollTop = 447)
    } else if (e.target.classList.contains("activity-icon-svg-chat")) {
      return (emojisContainer.scrollTop = 591)
    } else if (e.target.classList.contains("travel-places-icon-svg-chat")) {
      return (emojisContainer.scrollTop = 683)
    } else if (e.target.classList.contains("objects-icon-svg-chat")) {
      return (emojisContainer.scrollTop = 791)
    } else if (e.target.classList.contains("symbols-icon-svg-chat")) {
      return (emojisContainer.scrollTop = 975)
    } else if (e.target.classList.contains("flags-icon-svg-chat")) {
      return (emojisContainer.scrollTop = 1083)
    }
  }

  if (type === "text") {
    return (
      <div className="reaction-emoji">
        <div className="reaction-icons-wrapper">
          <div
            onClick={handleReactionIconClick}
            className="recent-text reaction-icon-text"
          >
            <RecentIcon />
          </div>
          <div
            onClick={handleReactionIconClick}
            className="smileys-people-text reaction-icon-text"
          >
            <SmileysAndPeopleIcon />
          </div>
          <div
            onClick={handleReactionIconClick}
            className="animals-nature-text reaction-icon-text"
          >
            <AnimalsAndNatureIcon />
          </div>
          <div
            onClick={handleReactionIconClick}
            className="food-drink-text reaction-icon-text"
          >
            <FoodAndDrinkIcon />
          </div>
          <div
            onClick={handleReactionIconClick}
            className="activity-text reaction-icon-text"
          >
            <ActivityIcon />
          </div>
          <div
            onClick={handleReactionIconClick}
            className="travel-places-text reaction-icon-text"
          >
            <TravelAndPlacesIcon />
          </div>
          <div
            onClick={handleReactionIconClick}
            className="objects-text reaction-icon-text"
          >
            <ObjectsIcon />
          </div>
          <div
            onClick={handleReactionIconClick}
            className="symbols-text reaction-icon-text"
          >
            <SymbolsIcon />
          </div>
          <div
            onClick={handleReactionIconClick}
            className="flags-text reaction-icon-text"
          >
            <FlagsIcon />
          </div>
          <div className="reaction-icon-border-text"></div>
        </div>
        <div className="reaction-search">
          <Searchbar
            setSearchedEmojis={setSearchedEmojis}
            type={"emoji-search"}
          />
        </div>
        <div className="searched-emojis">{renderSearchedEmojis()}</div>
        <div onScroll={handleEmojiScroll} className="emojis-container">
          <EmojiGrid
            type={"text"}
            emojiSectionName={"recent-emojis"}
            emojiHeader={"Recent"}
            emojiArray={recentEmojis}
          />
          <EmojiGrid
            type={"text"}
            emojiSectionName={"smiley-and-people-emojis"}
            emojiHeader={"Smileys & People"}
            emojiArray={smileyAndPeopleEmojis}
          />
          <EmojiGrid
            type={"text"}
            emojiSectionName={"animal-and-nature-emojis"}
            emojiHeader={"Animals & Nature"}
            emojiArray={animalsAndNatureEmojis}
          />
          <EmojiGrid
            type={"text"}
            emojiSectionName={"food-and-drink-emojis"}
            emojiHeader={"Food & Drink"}
            emojiArray={foodAndDrinkEmojis}
          />
          <EmojiGrid
            type={"text"}
            emojiSectionName={"activity-emojis"}
            emojiHeader={"Activity"}
            emojiArray={activityEmojis}
          />
          <EmojiGrid
            type={"text"}
            emojiSectionName={"travel-and-places-emojis"}
            emojiHeader={"Travel & Places"}
            emojiArray={travelAndPlacesEmojis}
          />
          <EmojiGrid
            type={"text"}
            emojiSectionName={"object-emojis"}
            emojiHeader={"Objects"}
            emojiArray={objectEmojis}
          />
          <EmojiGrid
            type={"text"}
            emojiSectionName={"symbol-emojis"}
            emojiHeader={"Symbols"}
            emojiArray={symbolEmojis}
          />
          <EmojiGrid
            type={"text"}
            emojiSectionName={"flag-emojis"}
            emojiHeader={"Flags"}
            emojiArray={flagEmojis}
          />
        </div>
      </div>
    )
  } else if (type === "reaction") {
    return (
      <div>
        <div className="reaction-emoji-chat">
          <div className="reaction-icons-wrapper-message-chat">
            <div
              onClick={handleReactionIconChatClick}
              className="recent-chat reaction-icon-chat"
            >
              <RecentIconChat />
            </div>
            <div
              onClick={handleReactionIconChatClick}
              className="smileys-people-chat reaction-icon-chat"
            >
              <SmileysAndPeopleIconChat />
            </div>
            <div
              onClick={handleReactionIconChatClick}
              className="animals-nature-chat reaction-icon-chat"
            >
              <AnimalsAndNatureIconChat />
            </div>
            <div
              onClick={handleReactionIconChatClick}
              className="food-drink-chat reaction-icon-chat"
            >
              <FoodAndDrinkIconChat />
            </div>
            <div
              onClick={handleReactionIconChatClick}
              className="activity-chat reaction-icon-chat"
            >
              <ActivityIconChat />
            </div>
            <div
              onClick={handleReactionIconChatClick}
              className="travel-places-chat reaction-icon-chat"
            >
              <TravelAndPlacesIconChat />
            </div>
            <div
              onClick={handleReactionIconChatClick}
              className="objects-chat reaction-icon-chat"
            >
              <ObjectsIconChat />
            </div>
            <div
              onClick={handleReactionIconChatClick}
              className="symbols-chat reaction-icon-chat"
            >
              <SymbolsIconChat />
            </div>
            <div
              onClick={handleReactionIconChatClick}
              className="flags-chat reaction-icon-chat"
            >
              <FlagsIconChat />
            </div>
            <div className="reaction-icon-border-chat"></div>
          </div>
          <div className="reaction-search-chat">
            <Searchbar
              setSearchedEmojis={setSearchedEmojis}
              setSearchedChatEmojis={setSearchedChatEmojis}
              type={"emoji-search-reaction"}
            />
          </div>
          <div className="searched-emojis-chat">{renderSearchedEmojis()}</div>
          <div
            onScroll={handleEmojiScrollReaction}
            className="emojis-container-message-chat"
          >
            <EmojiGrid
              type={"message"}
              emojiSectionName={"recent-emojis"}
              emojiHeader={"Recent"}
              emojiArray={recentEmojis}
            />
            <EmojiGrid
              type={"message"}
              emojiSectionName={"smiley-and-people-emojis"}
              emojiHeader={"Smileys & People"}
              emojiArray={smileyAndPeopleEmojis}
            />
            <EmojiGrid
              type={"message"}
              emojiSectionName={"animal-and-nature-emojis"}
              emojiHeader={"Animals & Nature"}
              emojiArray={animalsAndNatureEmojis}
            />
            <EmojiGrid
              type={"message"}
              emojiSectionName={"food-and-drink-emojis"}
              emojiHeader={"Food & Drink"}
              emojiArray={foodAndDrinkEmojis}
            />
            <EmojiGrid
              type={"message"}
              emojiSectionName={"activity-emojis"}
              emojiHeader={"Activity"}
              emojiArray={activityEmojis}
            />
            <EmojiGrid
              type={"message"}
              emojiSectionName={"travel-and-places-emojis"}
              emojiHeader={"Travel & Places"}
              emojiArray={travelAndPlacesEmojis}
            />
            <EmojiGrid
              type={"message"}
              emojiSectionName={"object-emojis"}
              emojiHeader={"Objects"}
              emojiArray={objectEmojis}
            />
            <EmojiGrid
              type={"message"}
              emojiSectionName={"symbol-emojis"}
              emojiHeader={"Symbols"}
              emojiArray={symbolEmojis}
            />
            <EmojiGrid
              type={"message"}
              emojiSectionName={"flag-emojis"}
              emojiHeader={"Flags"}
              emojiArray={flagEmojis}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default ReactionEmojiContainer

const recentEmojis = [
  {
    emojiName: "laugh",
    emoji: "😀"
  },
  {
    emojiName: "sickened",
    emoji: "🤢"
  }
]

const smileyAndPeopleEmojis = [
  {
    emojiName: "angry",
    emoji: "😡"
  },
  {
    emojiName: "cry",
    emoji: "😭"
  },
  {
    emojiName: "cool",
    emoji: "😎"
  },
  {
    emojiName: "thumb up",
    emoji: "👍"
  },
  {
    emojiName: "thumb down",
    emoji: "👎"
  },
  {
    emojiName: "high five",
    emoji: "🙏"
  },
  {
    emojiName: "evil smile",
    emoji: "😈"
  },
  {
    emojiName: "evil upset",
    emoji: "👿"
  },
  {
    emojiName: "curse",
    emoji: "🤬"
  },
  {
    emojiName: "cry from laughing",
    emoji: "😂"
  },
  {
    emojiName: "surprised",
    emoji: "😮"
  },
  {
    emojiName: "sad",
    emoji: "😢"
  },
  {
    emojiName: "inspector",
    emoji: "🧐"
  },
  {
    emojiName: "nerd",
    emoji: "🤓"
  },
  {
    emojiName: "sorrowful",
    emoji: "🥺"
  },
  {
    emojiName: "dead",
    emoji: "😵"
  },
  {
    emojiName: "vomit",
    emoji: "🤮"
  },
  {
    emojiName: "sickened",
    emoji: "🤢"
  },
  {
    emojiName: "laugh",
    emoji: "😀"
  },
  {
    emojiName: "sick",
    emoji: "🤧"
  },
  {
    emojiName: "cautious",
    emoji: "😷"
  },
  {
    emojiName: "party",
    emoji: "🥳"
  },
  {
    emojiName: "mind blow",
    emoji: "🤯"
  },
  {
    emojiName: "frostbite",
    emoji: "🥶"
  },
  {
    emojiName: "ghost",
    emoji: "👻"
  },
  {
    emojiName: "skull",
    emoji: "💀"
  },
  {
    emojiName: "crossbones",
    emoji: "☠️"
  },
  {
    emojiName: "alien",
    emoji: "👽"
  }
]

const animalsAndNatureEmojis = [
  {
    emojiName: "horse",
    emoji: "🐎"
  },
  {
    emojiName: "cat",
    emoji: "🐱"
  },
  {
    emojiName: "dog",
    emoji: "🐶"
  },
  {
    emojiName: "panda",
    emoji: "🐼"
  },
  {
    emojiName: "tiger",
    emoji: "🐯"
  },
  {
    emojiName: "cow",
    emoji: "🐄"
  }
]

const foodAndDrinkEmojis = [
  {
    emojiName: "red apple",
    emoji: "🍎"
  },
  {
    emojiName: "green apple",
    emoji: "🍏"
  },
  {
    emojiName: "orange",
    emoji: "🍊"
  },
  {
    emojiName: "pizza slice",
    emoji: "🍕"
  },
  {
    emojiName: "hamburger",
    emoji: "🍔"
  },
  {
    emojiName: "popcorn",
    emoji: "🍿"
  },
  {
    emojiName: "hotdog",
    emoji: "🌭"
  },
  {
    emojiName: "donut",
    emoji: "🍩"
  },
  {
    id: uuidv4(),
    emojiName: "cookie",
    emoji: "🍪"
  },
  {
    id: uuidv4(),
    emojiName: "ice cream",
    emoji: "🍦"
  },
  {
    id: uuidv4(),
    emojiName: "birthday cake",
    emoji: "🎂"
  }
]

const activityEmojis = [
  {
    id: uuidv4(),
    emojiName: "football",
    emoji: "⚽"
  },
  {
    id: uuidv4(),
    emojiName: "basketball",
    emoji: "🏀"
  },
  {
    id: uuidv4(),
    emojiName: "gaming",
    emoji: "🎮"
  }
]

const travelAndPlacesEmojis = [
  {
    id: uuidv4(),
    emojiName: "formula 1 car",
    emoji: "🏎️"
  },
  {
    id: uuidv4(),
    emojiName: "helicopter",
    emoji: "🚁"
  },
  {
    id: uuidv4(),
    emojiName: "plane",
    emoji: "✈️"
  }
]

const objectEmojis = [
  {
    id: uuidv4(),
    emojiName: "watch",
    emoji: "⌚"
  },
  {
    id: uuidv4(),
    emojiName: "mouse",
    emoji: "🖱️"
  },
  {
    id: uuidv4(),
    emojiName: "cellphone",
    emoji: "📱"
  },
  {
    id: uuidv4(),
    emojiName: "bomb",
    emoji: "💣"
  },
  {
    id: uuidv4(),
    emojiName: "knife",
    emoji: "🔪"
  },
  {
    id: uuidv4(),
    emojiName: "sword",
    emoji: "🗡️"
  },
  {
    id: uuidv4(),
    emojiName: "lock",
    emoji: "🔒"
  },
  {
    id: uuidv4(),
    emojiName: "pencil",
    emoji: "🖊️"
  },
  {
    id: uuidv4(),
    emojiName: "notebook",
    emoji: "📕"
  },
  {
    id: uuidv4(),
    emojiName: "telescope",
    emoji: "🔭"
  },
  {
    id: uuidv4(),
    emojiName: "microscope",
    emoji: "🔬"
  },
  {
    id: uuidv4(),
    emojiName: "key",
    emoji: "🔑"
  },
  {
    id: uuidv4(),
    emojiName: "scissor",
    emoji: "✂️"
  },
  {
    id: uuidv4(),
    emojiName: "printer",
    emoji: "🖨️"
  },
  ,
  {
    id: uuidv4(),
    emojiName: "candle",
    emoji: "🕯️"
  },
  ,
  {
    id: uuidv4(),
    emojiName: "shield",
    emoji: "🛡️"
  },
  ,
  {
    id: uuidv4(),
    emojiName: "door",
    emoji: "🚪"
  },
  ,
  {
    id: uuidv4(),
    emojiName: "chair",
    emoji: "🪑"
  },
  ,
  {
    id: uuidv4(),
    emojiName: "calendar",
    emoji: "📆"
  },
  ,
  {
    id: uuidv4(),
    emojiName: "bed",
    emoji: "🛏️"
  },
  ,
  {
    id: uuidv4(),
    emojiName: "mail",
    emoji: "✉️"
  },
  ,
  {
    id: uuidv4(),
    emojiName: "newspaper",
    emoji: "📰"
  },
  ,
  {
    id: uuidv4(),
    emojiName: "fire extinguisher",
    emoji: "🧯"
  },
  ,
  {
    id: uuidv4(),
    emojiName: "water gun",
    emoji: "🔫"
  }
]

const symbolEmojis = [
  {
    id: uuidv4(),
    emojiName: "red heart",
    emoji: "❤️"
  },
  {
    id: uuidv4(),
    emojiName: "orange heart",
    emoji: "🧡"
  },
  {
    id: uuidv4(),
    emojiName: "yellow heart",
    emoji: "💛"
  },
  {
    id: uuidv4(),
    emojiName: "green heart",
    emoji: "💚"
  },
  {
    id: uuidv4(),
    emojiName: "blue heart",
    emoji: "💙"
  },
  {
    id: uuidv4(),
    emojiName: "purple heart",
    emoji: "💜"
  },
  {
    id: uuidv4(),
    emojiName: "black heart",
    emoji: "🖤"
  },
  {
    id: uuidv4(),
    emojiName: "white heart",
    emoji: "🤍"
  },
  {
    id: uuidv4(),
    emojiName: "brown heart",
    emoji: "🤎"
  },
  {
    id: uuidv4(),
    emojiName: "broken heart",
    emoji: "💔"
  },
  {
    id: uuidv4(),
    emojiName: "stop sign",
    emoji: "⛔"
  },
  {
    id: uuidv4(),
    emojiName: "confirm",
    emoji: "✅"
  },
  {
    id: uuidv4(),
    emojiName: "decline",
    emoji: "❎"
  },
  {
    id: uuidv4(),
    emojiName: "play button",
    emoji: "▶️"
  },
  {
    id: uuidv4(),
    emojiName: "pause button",
    emoji: "⏸️"
  },
  {
    id: uuidv4(),
    emojiName: "red ball",
    emoji: "🔴"
  },
  {
    id: uuidv4(),
    emojiName: "yellow ball",
    emoji: "🟡"
  },
  {
    id: uuidv4(),
    emojiName: "orange ball",
    emoji: "🟠"
  },
  {
    id: uuidv4(),
    emojiName: "green ball",
    emoji: "🟢"
  },
  {
    id: uuidv4(),
    emojiName: "blue ball",
    emoji: "🔵"
  },
  {
    id: uuidv4(),
    emojiName: "purple ball",
    emoji: "🟣"
  },
  {
    id: uuidv4(),
    emojiName: "black ball",
    emoji: "⚫"
  },
  {
    id: uuidv4(),
    emojiName: "white ball",
    emoji: "⚪"
  },
  {
    id: uuidv4(),
    emojiName: "brown ball",
    emoji: "🟤"
  },

  {
    id: uuidv4(),
    emojiName: "trident",
    emoji: "🔱"
  },
  {
    id: uuidv4(),
    emojiName: "red question mark",
    emoji: "❓"
  },
  {
    id: uuidv4(),
    emojiName: "SOS",
    emoji: "🆘"
  }
]

const flagEmojis = [
  {
    id: uuidv4(),
    emojiName: "white flag",
    emoji: "🏳️"
  },
  {
    id: uuidv4(),
    emojiName: "black flag",
    emoji: "🏴"
  },
  {
    id: uuidv4(),
    emojiName: "chequered flag",
    emoji: "🏁"
  }
]
