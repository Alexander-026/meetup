import { createEl } from "../utils.js";

export const card = (data) => {
    const card = createEl({ className: "card" });

    // card container

    const cardImgContainer = createEl({ className: "card__img--container" });
    const onlineEvent = createEl({ className: `online__event ${data.type === "online" ? "show" : ""}` });
    const onlineIcon = createEl({tag: "img", src: "./images/event-icons/online.svg", alt: "online" });
    const onlineText = createEl({tag: "span", text: "Online Event" });
    const cardImg = createEl({tag: "img",  className: "card__img", src: data.image, alt: data.image });
    



    // description card
    const cardDescription = createEl({className: "card__description" });
    const cardTitle = createEl({tag: "h4",  className: "card__title", text: data.title});
    const cardTypeDistance = createEl({tag: "h5",  className: "card__type-distance", text: data.category});
    const distance = createEl({tag: "span",  className: "distance", text: data.distance ? ` (${data.distance} km)` : ""});
    const cardDate = createEl({className: "card__date"});
    const cardDateIcon = createEl({tag:"img",  className:"card__date-icon", src: "./images/event-icons/date.svg", alt: "data"});
    const cardFullDate = createEl({tag:"time",  className:"card__fulldate", text: data.date, datetime: "2024-04-18"});
    
    const cardParticipants = createEl({className: "card__participants" });

    const cardParticipantsGoing = createEl({className: "card__participants--going" });
    const cardParticipantsGoingIcon = createEl({tag:"img", src:"./images/event-icons/check.svg", alt:"check"});
    const cardParticipantsGoingText = createEl({tag:"span", className:"card__participants--going--text", text: `${data.attendees} going`});

    const cardParticipantsType = createEl({className: "card__participants--type" });
    const cardParticipantsTypeIcon = createEl({tag:"img", src:"./images/event-icons/free.svg", alt:"free"});
    const cardParticipantsTypeText = createEl({tag:"span", className:"card__participants--type--text", text: "Free"});

    const onlineEventMob = createEl({className: "online__event--mob" });
    const onlineEventMobIcon = createEl({tag:"img", className:"online__event--mob--icon", src:"./images/event-icons/online.svg", alt:"online"});
    const onlineEventMobText = createEl({tag: "span", text: "Online Event" });

    const cardAttendeesMob = createEl({className: "card__attendees--mob" });
    const cardAttendeesMobText = createEl({tag: "span", className: "card__attendees--mob--text", text: `attendees ${data.attendees}` });
    const cardAttendeesMobIcon = createEl({tag:"img", className:"card__attendees--mob--icon", src:"./images/event-icons/up-icon.svg", alt:"up"});




    // appending childs

    onlineEvent.appendChild(onlineIcon)
    onlineEvent.appendChild(onlineText)
    cardImgContainer.appendChild(onlineEvent)
    cardImgContainer.appendChild(cardImg)
    card.appendChild(cardImgContainer)


    cardDescription.appendChild(cardTitle)
    cardTypeDistance.appendChild(distance)
    cardDescription.appendChild(cardTypeDistance)
    cardDate.appendChild(cardDateIcon)
    cardDate.appendChild(cardFullDate)
    cardDescription.appendChild(cardDate)

    cardParticipantsGoing.appendChild(cardParticipantsGoingIcon)
    cardParticipantsGoing.appendChild(cardParticipantsGoingText)
    cardParticipants.appendChild(cardParticipantsGoing)

    cardParticipantsType.appendChild(cardParticipantsTypeIcon)
    cardParticipantsType.appendChild(cardParticipantsTypeText)
    cardParticipants.appendChild(cardParticipantsType)

    cardDescription.appendChild(cardParticipants)

    if(data.type === "online") {
        onlineEventMob.appendChild(onlineEventMobIcon)
        onlineEventMob.appendChild(onlineEventMobText)
    
        cardDescription.appendChild(onlineEventMob)
    }

  


    cardAttendeesMob.appendChild(cardAttendeesMobText)
    cardAttendeesMob.appendChild(cardAttendeesMobIcon)

    cardDescription.appendChild(cardAttendeesMob)

    card.appendChild(cardDescription)

    return card

}