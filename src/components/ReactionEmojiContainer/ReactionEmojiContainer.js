import React, { useState } from "react"
import EmojiGrid from "../EmojiGrid/EmojiGrid"
import Searchbar from "../Searchbar/Searchbar"
import Emoji from "../Emoji/Emoji"
import { v4 as uuidv4 } from "uuid"
import "./reactionEmojiContainer.css"

function ReactionEmojiContainer({ type }) {
  const [scrollY, setScrollY] = useState(0)
  const [searchedEmojis, setSearchedEmojis] = useState([])

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

  function renderSearchedEmojis() {
    return searchedEmojis.map(i => {
      return <Emoji key={uuidv4()} emoji={i.emoji} />
    })
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

  if (type === "text") {
    return (
      <div className="reaction-emoji">
        <div className="reaction-icons-wrapper">
          <div
            onClick={handleReactionIconClick}
            className="recent-text reaction-icon-text"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="recent-icon-svg"
            >
              <path
                d="M20.538 11.975a8.563 8.563 0 1 0-17.126 0 8.563 8.563 0 0 0 17.126 0Zm1.412 0c0 5.509-4.466 9.975-9.975 9.975C6.465 21.95 2 17.484 2 11.975 2 6.465 6.466 2 11.975 2c5.509 0 9.975 4.466 9.975 9.975Zm-9.832-5.27v5.692l4.386 2.627a.706.706 0 1 1-.725 1.212l-5.073-3.04v-6.49a.706.706 0 1 1 1.412 0Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div
            onClick={handleReactionIconClick}
            className="smileys-people-text reaction-icon-text"
          >
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="smileys-people-icon-svg"
            >
              <path
                fill="currentColor"
                d="M12 22.1C6.4 22.1 1.9 17.6 1.9 12S6.4 1.9 12 1.9 22.1 6.4 22.1 12 17.6 22.1 12 22.1zm0-18.6c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5z"
              ></path>
              <path
                fill="currentColor"
                d="M8.9 11.6c.7 0 1.3-.7 1.3-1.5s-.6-1.5-1.3-1.5-1.3.7-1.3 1.5.6 1.5 1.3 1.5zM17.1 13.6c-1.1.1-3 .4-5 .4s-4-.3-5-.4c-.4 0-.6.3-.4.7 1.1 2 3.1 3.5 5.5 3.5 2.3 0 4.4-1.5 5.5-3.5.1-.3-.2-.7-.6-.7zM12.3 16c-2.6 0-4.1-1-4.2-1.6 0 0 4.4.9 8 0 0 0-.5 1.6-3.8 1.6zM15.1 11.6c.7 0 1.3-.7 1.3-1.5s-.6-1.5-1.3-1.5-1.3.7-1.3 1.5.6 1.5 1.3 1.5z"
              ></path>
            </svg>
          </div>
          <div
            onClick={handleReactionIconClick}
            className="animals-nature-text reaction-icon-text"
          >
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="animals-nature-icon-svg"
            >
              <path
                fill="currentColor"
                d="M7.2 12.2c.608 0 1.1.627 1.1 1.4S7.808 15 7.2 15s-1.1-.627-1.1-1.4.492-1.4 1.1-1.4zm9.7 0c.608 0 1.1.627 1.1 1.4s-.492 1.4-1.1 1.4-1.1-.627-1.1-1.4.492-1.4 1.1-1.4zm4.6-1.1-1.2-2.4c.9-.4 1.7-1.3 2-2.2.3-.7.4-2.1-1-3.5-1-.9-2-1.2-2.9-1-1.1.3-1.9 1.2-2.3 1.9-1.4-.7-2.9-.8-4.1-.8-1.5 0-2.8.3-4 .9-.5-.9-1.2-1.8-2.3-2.1-1-.2-2 .1-2.9 1-1 1-1.4 2.2-1 3.4.4 1.1 1.2 1.9 2 2.3-.2.5-.4 1-.6 1.6l-.2.2c-.3.7-.5 1.3-.8 1.9-.4 1-.9 1.9-.9 3.1 0 1.6.8 6.7 10.5 6.7 3.8 0 6.6-.7 8.5-2.2s2.2-3.4 2.2-4.3c.2-2.1-.2-2.9-1-4.5zm-2.7-7.6c.4-.1.9.1 1.5.6.6.6.8 1.2.6 1.8-.2.6-.7 1.1-1.2 1.3-.6-1.2-1.3-2-2.1-2.6.2-.4.6-1 1.2-1.1zM3.3 5.9c-.2-.6 0-1.2.6-1.8.5-.5 1.1-.7 1.5-.6.5.1 1.1.7 1.3 1.2-.9.7-1.6 1.5-2.2 2.6C4 7 3.4 6.5 3.3 5.9zm17.8 9.7c0 .7-.2 2-1.6 3.1-1.5 1.2-4.1 1.8-7.5 1.8-8.3 0-8.9-3.9-8.9-5.1 0-.8.3-1.5.7-2.4.3-.6.6-1.2.8-2.1l.1-.2c.5-1.5 2-6.2 7.3-6.2 1.2 0 2.5.2 3.7.9.1.1.5.3.5.3.9.7 1.7 1.7 2.4 3.2.6 1.3 1 2.2 1.4 2.9.8 1.6 1.1 2.1 1.1 3.8zM14.6 17c-.1.1-.6.4-1.2.3-.4-.1-.7-.3-.9-.8 0-.1-.1-.1-.1-.2.8-.1 1.3-.6 1.3-1.3s-.7 0-1.7 0c-.9 0-1.7-.7-1.7 0 0 .6.6 1.2 1.4 1.3l-.1.1c-.3.4-.5.7-.9.8-.5.1-1.1-.1-1.3-.3-.2-.2-.5-.1-.7.1s-.1.5.1.7c.1.1.8.5 1.6.5.2 0 .4 0 .5-.1.4-.1.8-.3 1.1-.7.4.4.9.6 1.2.7.8.2 1.7-.2 2-.5.2-.2.2-.5 0-.7-.1 0-.4-.1-.6.1z"
              ></path>
            </svg>
          </div>
          <div
            onClick={handleReactionIconClick}
            className="food-drink-text reaction-icon-text"
          >
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="food-drink-icon-svg"
            >
              <path
                fill="currentColor"
                d="M7.4 11.4c-.4 0-.8.4-.8.8V14c0 .4.4.8.8.8s.8-.4.6-.8v-1.8c0-.6-.2-.8-.6-.8zM4.6 10.4c-.4 0-.8.4-.8.8V15c0 .4.4.8.8.8s.8-.4.8-.8v-3.8c0-.6-.4-.8-.8-.8z"
              ></path>
              <path
                fill="currentColor"
                d="M23 7.2c-.6-.6-1.6-.8-2.8-.6-.2 0-.4.2-.6.2V4.2c0-.6-.6-1.2-1.2-1.2h-17C.8 3 .2 3.6.2 4.2v7.4c0 5.4 3.2 9.6 8.4 9.6h2.2c4.2 0 7-2.6 8-6h.4c2.2-.4 4-2.6 4.4-4.8.4-1.4.2-2.4-.6-3.2zm-4.8-2.8v3H1.6v-3h16.6zM11 19.8H8.8c-5.2 0-7-4.4-7-8.2V8.8h16.6v2.8c-.2 4-2.4 8.2-7.4 8.2zm8.4-6.2c.2-.6.2-1.4.2-2V8.4c.4-.2.6-.4 1-.4.6-.2 1.2 0 1.4.4.4.4.6 1 .4 1.8-.2 1.4-1.6 3-3 3.4z"
              ></path>
            </svg>
          </div>
          <div
            onClick={handleReactionIconClick}
            className="activity-text reaction-icon-text"
          >
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="activity-icon-svg"
            >
              <path
                fill="currentColor"
                d="m14.8 15.3 1.3-3.8c.1-.2 0-.5-.2-.6l-3.3-2.4c-.2-.1-.5-.1-.6 0l-3.3 2.4c-.2.1-.3.4-.2.6l1.3 3.8c.1.2.3.4.5.4h4c.2 0 .4-.2.5-.4z"
              ></path>
              <path
                fill="currentColor"
                d="M12 1.9C6.4 1.9 1.9 6.4 1.9 12S6.4 22.1 12 22.1 22.1 17.6 22.1 12 17.6 1.9 12 1.9zM9.8 20.3c.1-.2.1-.4 0-.6l-1.4-2.3c-.1-.1-.2-.2-.4-.3l-2.5-.6c-.2-.1-.5.1-.6.2-.9-1.3-1.4-2.9-1.5-4.5.2 0 .4 0 .5-.2l1.7-2c.1 0 .2-.2.2-.3l-.3-2.6c0-.2-.1-.3-.3-.4C6.2 5.4 7.5 4.5 9 4c0 .1.2.3.3.3l2.5 1.1c.1.1.3.1.4 0l2.5-1.1.3-.3c1.5.6 2.7 1.5 3.7 2.7-.1.1-.2.2-.2.4l-.2 2.6c0 .2 0 .3.1.4l1.7 2c.1.1.3.2.4.2 0 1.6-.5 3.1-1.3 4.4-.1-.1-.2-.1-.4-.1l-2.5.6c-.1 0-.3.1-.4.3l-1.4 2.3c-.1.2-.1.3 0 .5-.8.2-1.6.4-2.5.4-.7-.1-1.5-.2-2.2-.4z"
              ></path>
            </svg>
          </div>
          <div
            onClick={handleReactionIconClick}
            className="travel-places-text reaction-icon-text"
          >
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="travel-places-icon-svg"
            >
              <path
                fill="currentColor"
                d="M21.5 11.5c0-.7-.1-1.4-.3-2l-1.5-4.3C19.2 3.9 18 3 16.6 3H7.3c-1.4 0-2.6.9-3.1 2.2L2.6 9.9c-.1.4-.2.7-.2 1.1v8.6c0 .6.5 1.1 1.1 1.1h1.1c.6 0 1.1-.5 1.1-1.1v-1.1h12.7v1.1c0 .6.5 1.1 1.1 1.1h1.1c.6 0 1.1-.5 1.1-1.1v-7.4l-.2-.7zM4.1 10.4l1.6-4.7c.2-.7.9-1.2 1.7-1.2h9.2c.7 0 1.4.5 1.6 1.2l1.5 4.3c.1.3.2.6.2.8H4c-.1-.1 0-.3.1-.4zm1.4 5.7c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5c-.1.8-.7 1.5-1.5 1.5zm9.4-.6H9.3c-.5 0-1-.4-1-1 0-.5.4-1 1-1h5.6c.5 0 1 .4 1 1-.1.6-.5 1-1 1zm3.7.6c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z"
              ></path>
            </svg>
          </div>
          <div
            onClick={handleReactionIconClick}
            className="objects-text reaction-icon-text"
          >
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="objects-icon-svg"
            >
              <path
                fill="currentColor"
                d="M18.8 6.7c-.9-2.6-3.2-4.6-6-4.9h-1.6c-2.8.3-5.1 2.2-6 4.9-1 3 .1 6.2 2.7 8H8c.2.1.3.4.3.6v2c0 .8.6 1.4 1.4 1.4h4.6c.8 0 1.4-.6 1.4-1.4v-2c0-.2.1-.5.3-.6l.1-.1c2.5-1.8 3.6-5 2.7-7.9zm-3.5 6.9-.1.1c-.5.4-.9 1-.9 1.7v2s0 .1-.1.1H9.8s-.1 0-.1-.1v-2c0-.7-.3-1.3-.9-1.7l-.1-.1c-2-1.4-3-4-2.2-6.5.7-2.1 2.6-3.7 4.9-3.9H12.7c2.2.2 4.2 1.8 4.9 3.9.7 2.4-.2 5-2.3 6.5zM9.2 21.2c0 .6.5 1 1 1h3.7c.6 0 1-.5 1-1v-1H9.2v1z"
              ></path>
              <path
                fill="currentColor"
                d="M13.6 10.5c-.4 0-.8.3-.8.8 0 .1 0 .2.1.3-.2.3-.5.5-.8.5s-.6-.2-.8-.5c0-.1.1-.2.1-.3 0-.4-.3-.8-.8-.8-.4 0-.8.3-.8.8 0 .4.3.7.7.8.3.4.7.7 1.1.8V15c0 .2.2.4.4.4s.4-.2.4-.4v-2.1c.4-.1.8-.4 1.1-.8.4 0 .8-.3.8-.8s-.3-.8-.7-.8z"
              ></path>
            </svg>
          </div>
          <div
            onClick={handleReactionIconClick}
            className="symbols-text reaction-icon-text"
          >
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="symbols-icon-svg"
            >
              <path
                fill="currentColor"
                d="M14.5 12.9V11h2.2l-.2-1.3h-2V7.3H13v2.5h-2V7.4H9.5v2.4H7.2l.2 1.2h2.1v1.9H7.3l.2 1.3h2v2.4H11v-2.4h2v2.4h1.5v-2.4h2.3l-.2-1.3h-2.1zM11 11h2v1.9h-2V11z"
              ></path>
              <path
                fill="currentColor"
                d="M16.1 2.6H7.9C5 2.6 2.6 5 2.6 7.9V16c0 3 2.4 5.3 5.3 5.3H16c3 0 5.3-2.4 5.3-5.3V7.9c.1-2.9-2.3-5.3-5.2-5.3zm3.7 13.5c0 2.1-1.6 3.8-3.7 3.8H7.9c-2.1 0-3.8-1.7-3.8-3.8V7.9c0-2.1 1.7-3.8 3.8-3.8H16c2.1 0 3.8 1.7 3.8 3.8v8.2z"
              ></path>
            </svg>
          </div>
          <div
            onClick={handleReactionIconClick}
            className="flags-text reaction-icon-text"
          >
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="flags-icon-svg"
            >
              <path
                fill="currentColor"
                d="M5.5 3.8v-.2c0-.3-.2-.5-.5-.5h-.5c-.3 0-.5.2-.5.5V21c0 .3.2.5.5.5H5c.3 0 .5-.2.5-.5v-6.2c5 1.8 9.3-2.7 14.5.6V4.1C14.9 1 10.3 5.6 5.5 3.8zm10.3 8.8c-1.4 0-2.8.3-4.1.6-1.2.3-2.4.5-3.5.5-.9 0-1.8-.2-2.6-.5V5.4c.8.2 1.5.3 2.3.3 1.5 0 2.9-.4 4.3-.7 1.3-.3 2.5-.6 3.8-.6.9 0 1.7.2 2.5.5V13c-.9-.2-1.8-.4-2.7-.4z"
              ></path>
            </svg>
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
  }

  if (type === "reaction") {
    return (
      <div>
        <div className="reaction-emoji-chat">
          <div className="reaction-icons-wrapper-message-chat">
            <div
              onClick={handleReactionIconClick}
              className="recent-chat reaction-icon-chat"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="recent-icon-svg-chat"
              >
                <path
                  d="M20.538 11.975a8.563 8.563 0 1 0-17.126 0 8.563 8.563 0 0 0 17.126 0Zm1.412 0c0 5.509-4.466 9.975-9.975 9.975C6.465 21.95 2 17.484 2 11.975 2 6.465 6.466 2 11.975 2c5.509 0 9.975 4.466 9.975 9.975Zm-9.832-5.27v5.692l4.386 2.627a.706.706 0 1 1-.725 1.212l-5.073-3.04v-6.49a.706.706 0 1 1 1.412 0Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <div
              onClick={handleReactionIconClick}
              className="smileys-people-chat reaction-icon-chat"
            >
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="smileys-people-icon-svg-chat"
              >
                <path
                  fill="currentColor"
                  d="M12 22.1C6.4 22.1 1.9 17.6 1.9 12S6.4 1.9 12 1.9 22.1 6.4 22.1 12 17.6 22.1 12 22.1zm0-18.6c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5z"
                ></path>
                <path
                  fill="currentColor"
                  d="M8.9 11.6c.7 0 1.3-.7 1.3-1.5s-.6-1.5-1.3-1.5-1.3.7-1.3 1.5.6 1.5 1.3 1.5zM17.1 13.6c-1.1.1-3 .4-5 .4s-4-.3-5-.4c-.4 0-.6.3-.4.7 1.1 2 3.1 3.5 5.5 3.5 2.3 0 4.4-1.5 5.5-3.5.1-.3-.2-.7-.6-.7zM12.3 16c-2.6 0-4.1-1-4.2-1.6 0 0 4.4.9 8 0 0 0-.5 1.6-3.8 1.6zM15.1 11.6c.7 0 1.3-.7 1.3-1.5s-.6-1.5-1.3-1.5-1.3.7-1.3 1.5.6 1.5 1.3 1.5z"
                ></path>
              </svg>
            </div>
            <div
              onClick={handleReactionIconClick}
              className="animals-nature-chat reaction-icon-chat"
            >
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="animals-nature-icon-svg-chat"
              >
                <path
                  fill="currentColor"
                  d="M7.2 12.2c.608 0 1.1.627 1.1 1.4S7.808 15 7.2 15s-1.1-.627-1.1-1.4.492-1.4 1.1-1.4zm9.7 0c.608 0 1.1.627 1.1 1.4s-.492 1.4-1.1 1.4-1.1-.627-1.1-1.4.492-1.4 1.1-1.4zm4.6-1.1-1.2-2.4c.9-.4 1.7-1.3 2-2.2.3-.7.4-2.1-1-3.5-1-.9-2-1.2-2.9-1-1.1.3-1.9 1.2-2.3 1.9-1.4-.7-2.9-.8-4.1-.8-1.5 0-2.8.3-4 .9-.5-.9-1.2-1.8-2.3-2.1-1-.2-2 .1-2.9 1-1 1-1.4 2.2-1 3.4.4 1.1 1.2 1.9 2 2.3-.2.5-.4 1-.6 1.6l-.2.2c-.3.7-.5 1.3-.8 1.9-.4 1-.9 1.9-.9 3.1 0 1.6.8 6.7 10.5 6.7 3.8 0 6.6-.7 8.5-2.2s2.2-3.4 2.2-4.3c.2-2.1-.2-2.9-1-4.5zm-2.7-7.6c.4-.1.9.1 1.5.6.6.6.8 1.2.6 1.8-.2.6-.7 1.1-1.2 1.3-.6-1.2-1.3-2-2.1-2.6.2-.4.6-1 1.2-1.1zM3.3 5.9c-.2-.6 0-1.2.6-1.8.5-.5 1.1-.7 1.5-.6.5.1 1.1.7 1.3 1.2-.9.7-1.6 1.5-2.2 2.6C4 7 3.4 6.5 3.3 5.9zm17.8 9.7c0 .7-.2 2-1.6 3.1-1.5 1.2-4.1 1.8-7.5 1.8-8.3 0-8.9-3.9-8.9-5.1 0-.8.3-1.5.7-2.4.3-.6.6-1.2.8-2.1l.1-.2c.5-1.5 2-6.2 7.3-6.2 1.2 0 2.5.2 3.7.9.1.1.5.3.5.3.9.7 1.7 1.7 2.4 3.2.6 1.3 1 2.2 1.4 2.9.8 1.6 1.1 2.1 1.1 3.8zM14.6 17c-.1.1-.6.4-1.2.3-.4-.1-.7-.3-.9-.8 0-.1-.1-.1-.1-.2.8-.1 1.3-.6 1.3-1.3s-.7 0-1.7 0c-.9 0-1.7-.7-1.7 0 0 .6.6 1.2 1.4 1.3l-.1.1c-.3.4-.5.7-.9.8-.5.1-1.1-.1-1.3-.3-.2-.2-.5-.1-.7.1s-.1.5.1.7c.1.1.8.5 1.6.5.2 0 .4 0 .5-.1.4-.1.8-.3 1.1-.7.4.4.9.6 1.2.7.8.2 1.7-.2 2-.5.2-.2.2-.5 0-.7-.1 0-.4-.1-.6.1z"
                ></path>
              </svg>
            </div>
            <div
              onClick={handleReactionIconClick}
              className="food-drink-chat reaction-icon-chat"
            >
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="food-drink-icon-svg-chat"
              >
                <path
                  fill="currentColor"
                  d="M7.4 11.4c-.4 0-.8.4-.8.8V14c0 .4.4.8.8.8s.8-.4.6-.8v-1.8c0-.6-.2-.8-.6-.8zM4.6 10.4c-.4 0-.8.4-.8.8V15c0 .4.4.8.8.8s.8-.4.8-.8v-3.8c0-.6-.4-.8-.8-.8z"
                ></path>
                <path
                  fill="currentColor"
                  d="M23 7.2c-.6-.6-1.6-.8-2.8-.6-.2 0-.4.2-.6.2V4.2c0-.6-.6-1.2-1.2-1.2h-17C.8 3 .2 3.6.2 4.2v7.4c0 5.4 3.2 9.6 8.4 9.6h2.2c4.2 0 7-2.6 8-6h.4c2.2-.4 4-2.6 4.4-4.8.4-1.4.2-2.4-.6-3.2zm-4.8-2.8v3H1.6v-3h16.6zM11 19.8H8.8c-5.2 0-7-4.4-7-8.2V8.8h16.6v2.8c-.2 4-2.4 8.2-7.4 8.2zm8.4-6.2c.2-.6.2-1.4.2-2V8.4c.4-.2.6-.4 1-.4.6-.2 1.2 0 1.4.4.4.4.6 1 .4 1.8-.2 1.4-1.6 3-3 3.4z"
                ></path>
              </svg>
            </div>
            <div
              onClick={handleReactionIconClick}
              className="activity-chat reaction-icon-chat"
            >
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="activity-icon-svg-chat"
              >
                <path
                  fill="currentColor"
                  d="m14.8 15.3 1.3-3.8c.1-.2 0-.5-.2-.6l-3.3-2.4c-.2-.1-.5-.1-.6 0l-3.3 2.4c-.2.1-.3.4-.2.6l1.3 3.8c.1.2.3.4.5.4h4c.2 0 .4-.2.5-.4z"
                ></path>
                <path
                  fill="currentColor"
                  d="M12 1.9C6.4 1.9 1.9 6.4 1.9 12S6.4 22.1 12 22.1 22.1 17.6 22.1 12 17.6 1.9 12 1.9zM9.8 20.3c.1-.2.1-.4 0-.6l-1.4-2.3c-.1-.1-.2-.2-.4-.3l-2.5-.6c-.2-.1-.5.1-.6.2-.9-1.3-1.4-2.9-1.5-4.5.2 0 .4 0 .5-.2l1.7-2c.1 0 .2-.2.2-.3l-.3-2.6c0-.2-.1-.3-.3-.4C6.2 5.4 7.5 4.5 9 4c0 .1.2.3.3.3l2.5 1.1c.1.1.3.1.4 0l2.5-1.1.3-.3c1.5.6 2.7 1.5 3.7 2.7-.1.1-.2.2-.2.4l-.2 2.6c0 .2 0 .3.1.4l1.7 2c.1.1.3.2.4.2 0 1.6-.5 3.1-1.3 4.4-.1-.1-.2-.1-.4-.1l-2.5.6c-.1 0-.3.1-.4.3l-1.4 2.3c-.1.2-.1.3 0 .5-.8.2-1.6.4-2.5.4-.7-.1-1.5-.2-2.2-.4z"
                ></path>
              </svg>
            </div>
            <div
              onClick={handleReactionIconClick}
              className="travel-places-chat reaction-icon-chat"
            >
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="travel-places-icon-svg-chat"
              >
                <path
                  fill="currentColor"
                  d="M21.5 11.5c0-.7-.1-1.4-.3-2l-1.5-4.3C19.2 3.9 18 3 16.6 3H7.3c-1.4 0-2.6.9-3.1 2.2L2.6 9.9c-.1.4-.2.7-.2 1.1v8.6c0 .6.5 1.1 1.1 1.1h1.1c.6 0 1.1-.5 1.1-1.1v-1.1h12.7v1.1c0 .6.5 1.1 1.1 1.1h1.1c.6 0 1.1-.5 1.1-1.1v-7.4l-.2-.7zM4.1 10.4l1.6-4.7c.2-.7.9-1.2 1.7-1.2h9.2c.7 0 1.4.5 1.6 1.2l1.5 4.3c.1.3.2.6.2.8H4c-.1-.1 0-.3.1-.4zm1.4 5.7c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5c-.1.8-.7 1.5-1.5 1.5zm9.4-.6H9.3c-.5 0-1-.4-1-1 0-.5.4-1 1-1h5.6c.5 0 1 .4 1 1-.1.6-.5 1-1 1zm3.7.6c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z"
                ></path>
              </svg>
            </div>
            <div
              onClick={handleReactionIconClick}
              className="objects-chat reaction-icon-chat"
            >
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="objects-icon-svg-chat"
              >
                <path
                  fill="currentColor"
                  d="M18.8 6.7c-.9-2.6-3.2-4.6-6-4.9h-1.6c-2.8.3-5.1 2.2-6 4.9-1 3 .1 6.2 2.7 8H8c.2.1.3.4.3.6v2c0 .8.6 1.4 1.4 1.4h4.6c.8 0 1.4-.6 1.4-1.4v-2c0-.2.1-.5.3-.6l.1-.1c2.5-1.8 3.6-5 2.7-7.9zm-3.5 6.9-.1.1c-.5.4-.9 1-.9 1.7v2s0 .1-.1.1H9.8s-.1 0-.1-.1v-2c0-.7-.3-1.3-.9-1.7l-.1-.1c-2-1.4-3-4-2.2-6.5.7-2.1 2.6-3.7 4.9-3.9H12.7c2.2.2 4.2 1.8 4.9 3.9.7 2.4-.2 5-2.3 6.5zM9.2 21.2c0 .6.5 1 1 1h3.7c.6 0 1-.5 1-1v-1H9.2v1z"
                ></path>
                <path
                  fill="currentColor"
                  d="M13.6 10.5c-.4 0-.8.3-.8.8 0 .1 0 .2.1.3-.2.3-.5.5-.8.5s-.6-.2-.8-.5c0-.1.1-.2.1-.3 0-.4-.3-.8-.8-.8-.4 0-.8.3-.8.8 0 .4.3.7.7.8.3.4.7.7 1.1.8V15c0 .2.2.4.4.4s.4-.2.4-.4v-2.1c.4-.1.8-.4 1.1-.8.4 0 .8-.3.8-.8s-.3-.8-.7-.8z"
                ></path>
              </svg>
            </div>
            <div
              onClick={handleReactionIconClick}
              className="symbols-chat reaction-icon-chat"
            >
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="symbols-icon-svg-chat"
              >
                <path
                  fill="currentColor"
                  d="M14.5 12.9V11h2.2l-.2-1.3h-2V7.3H13v2.5h-2V7.4H9.5v2.4H7.2l.2 1.2h2.1v1.9H7.3l.2 1.3h2v2.4H11v-2.4h2v2.4h1.5v-2.4h2.3l-.2-1.3h-2.1zM11 11h2v1.9h-2V11z"
                ></path>
                <path
                  fill="currentColor"
                  d="M16.1 2.6H7.9C5 2.6 2.6 5 2.6 7.9V16c0 3 2.4 5.3 5.3 5.3H16c3 0 5.3-2.4 5.3-5.3V7.9c.1-2.9-2.3-5.3-5.2-5.3zm3.7 13.5c0 2.1-1.6 3.8-3.7 3.8H7.9c-2.1 0-3.8-1.7-3.8-3.8V7.9c0-2.1 1.7-3.8 3.8-3.8H16c2.1 0 3.8 1.7 3.8 3.8v8.2z"
                ></path>
              </svg>
            </div>
            <div
              onClick={handleReactionIconClick}
              className="flags-chat reaction-icon-chat"
            >
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="flags-icon-svg-chat"
              >
                <path
                  fill="currentColor"
                  d="M5.5 3.8v-.2c0-.3-.2-.5-.5-.5h-.5c-.3 0-.5.2-.5.5V21c0 .3.2.5.5.5H5c.3 0 .5-.2.5-.5v-6.2c5 1.8 9.3-2.7 14.5.6V4.1C14.9 1 10.3 5.6 5.5 3.8zm10.3 8.8c-1.4 0-2.8.3-4.1.6-1.2.3-2.4.5-3.5.5-.9 0-1.8-.2-2.6-.5V5.4c.8.2 1.5.3 2.3.3 1.5 0 2.9-.4 4.3-.7 1.3-.3 2.5-.6 3.8-.6.9 0 1.7.2 2.5.5V13c-.9-.2-1.8-.4-2.7-.4z"
                ></path>
              </svg>
            </div>
            <div className="reaction-icon-border-chat"></div>
          </div>
          <div className="reaction-search-chat">
            <Searchbar
              setSearchedEmojis={setSearchedEmojis}
              type={"emoji-search-reaction"}
            />
          </div>
          <div className="searched-emojis">{renderSearchedEmojis()}</div>
          <div
            onScroll={handleEmojiScroll}
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
    emojiName: "thumb-up",
    emoji: "👍"
  },
  {
    emojiName: "thumb-down",
    emoji: "👎"
  },
  {
    emojiName: "evil-smile",
    emoji: "😈"
  },
  {
    emojiName: "evil-upset",
    emoji: "👿"
  },
  {
    emojiName: "curse",
    emoji: "🤬"
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
    emojiName: "mind-blow",
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
    emojiName: "cookie",
    emoji: "🍪"
  },
  {
    emojiName: "ice cream",
    emoji: "🍦"
  },
  {
    emojiName: "birthday cake",
    emoji: "🎂"
  }
]

const activityEmojis = [
  {
    emojiName: "football",
    emoji: "⚽"
  },
  {
    emojiName: "basketball",
    emoji: "🏀"
  },
  {
    emojiName: "gaming",
    emoji: "🎮"
  }
]

const travelAndPlacesEmojis = [
  {
    emojiName: "formula 1 car",
    emoji: "🏎️"
  },
  {
    emojiName: "helicopter",
    emoji: "🚁"
  },
  {
    emojiName: "plane",
    emoji: "✈️"
  }
]

const objectEmojis = [
  {
    emojiName: "watch",
    emoji: "⌚"
  },
  {
    emojiName: "mouse",
    emoji: "🖱️"
  },
  {
    emojiName: "cellphone",
    emoji: "📱"
  },
  {
    emojiName: "bomb",
    emoji: "💣"
  },
  {
    emojiName: "knife",
    emoji: "🔪"
  },
  {
    emojiName: "sword",
    emoji: "🗡️"
  },
  {
    emojiName: "lock",
    emoji: "🔒"
  },
  {
    emojiName: "pencil",
    emoji: "🖊️"
  },
  {
    emojiName: "notebook",
    emoji: "📕"
  },
  {
    emojiName: "telescope",
    emoji: "🔭"
  },
  {
    emojiName: "microscope",
    emoji: "🔬"
  },
  {
    emojiName: "key",
    emoji: "🔑"
  },
  {
    emojiName: "scissor",
    emoji: "✂️"
  },
  {
    emojiName: "printer",
    emoji: "🖨️"
  },
  ,
  {
    emojiName: "candle",
    emoji: "🕯️"
  },
  ,
  {
    emojiName: "shield",
    emoji: "🛡️"
  },
  ,
  {
    emojiName: "door",
    emoji: "🚪"
  },
  ,
  {
    emojiName: "chair",
    emoji: "🪑"
  },
  ,
  {
    emojiName: "calendar",
    emoji: "📆"
  },
  ,
  {
    emojiName: "bed",
    emoji: "🛏️"
  },
  ,
  {
    emojiName: "mail",
    emoji: "✉️"
  },
  ,
  {
    emojiName: "newspaper",
    emoji: "📰"
  },
  ,
  {
    emojiName: "fire extinguisher",
    emoji: "🧯"
  },
  ,
  {
    emojiName: "water gun",
    emoji: "🔫"
  }
]

const symbolEmojis = [
  {
    emojiName: "red heart",
    emoji: "❤️"
  },
  {
    emojiName: "orange heart",
    emoji: "🧡"
  },
  {
    emojiName: "yellow heart",
    emoji: "💛"
  },
  {
    emojiName: "green heart",
    emoji: "💚"
  },
  {
    emojiName: "blue heart",
    emoji: "💙"
  },
  {
    emojiName: "purple heart",
    emoji: "💜"
  },
  {
    emojiName: "black heart",
    emoji: "🖤"
  },
  {
    emojiName: "white heart",
    emoji: "🤍"
  },
  {
    emojiName: "brown heart",
    emoji: "🤎"
  },
  {
    emojiName: "broken heart",
    emoji: "💔"
  },
  {
    emojiName: "stop sign",
    emoji: "⛔"
  },
  {
    emojiName: "confirm",
    emoji: "✅"
  },
  {
    emojiName: "decline",
    emoji: "❎"
  },
  {
    emojiName: "play button",
    emoji: "▶️"
  },
  {
    emojiName: "pause button",
    emoji: "⏸️"
  },
  {
    emojiName: "red ball",
    emoji: "🔴"
  },
  {
    emojiName: "yellow ball",
    emoji: "🟡"
  },
  {
    emojiName: "orange ball",
    emoji: "🟠"
  },
  {
    emojiName: "green ball",
    emoji: "🟢"
  },
  {
    emojiName: "blue ball",
    emoji: "🔵"
  },
  {
    emojiName: "purple ball",
    emoji: "🟣"
  },
  {
    emojiName: "black ball",
    emoji: "⚫"
  },
  {
    emojiName: "white ball",
    emoji: "⚪"
  },
  {
    emojiName: "brown ball",
    emoji: "🟤"
  },

  {
    emojiName: "trident",
    emoji: "🔱"
  },
  {
    emojiName: "red question mark",
    emoji: "❓"
  },
  {
    emojiName: "SOS",
    emoji: "🆘"
  }
]

const flagEmojis = [
  {
    emojiName: "white flag",
    emoji: "🏳️"
  },
  {
    emojiName: "black flag",
    emoji: "🏴"
  },
  {
    emojiName: "chequered flag",
    emoji: "🏁"
  }
]
