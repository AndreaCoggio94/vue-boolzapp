const { createApp } = Vue;

createApp({
  data() {
    return {
      contacts: [
        {
          name: "Michele",
          avatar: "./img/avatar_1.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Hai portato a spasso il cane?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Ricordati di stendere i panni",
              status: "sent",
            },
            {
              date: "10/01/2020 16:15:22",
              message: "Tutto fatto!",
              status: "received",
            },
          ],
        },
        {
          name: "Fabio",
          avatar: "./img/avatar_2.jpg",
          visible: true,
          messages: [
            {
              date: "20/03/2020 16:30:00",
              message: "Ciao come stai?",
              status: "sent",
            },
            {
              date: "20/03/2020 16:30:55",
              message: "Bene grazie! Stasera ci vediamo?",
              status: "received",
            },
            {
              date: "20/03/2020 16:35:00",
              message: "Mi piacerebbe ma devo andare a fare la spesa.",
              status: "sent",
            },
          ],
        },
        {
          name: "Samuele",
          avatar: "./img/avatar_3.jpg",
          visible: true,
          messages: [
            {
              date: "28/03/2020 10:10:40",
              message: "La Marianna va in campagna",
              status: "received",
            },
            {
              date: "28/03/2020 10:20:10",
              message: "Sicuro di non aver sbagliato chat?",
              status: "sent",
            },
            {
              date: "28/03/2020 16:15:22",
              message: "Ah scusa!",
              status: "received",
            },
          ],
        },
        {
          name: "Alessandro B.",
          avatar: "./img/avatar_4.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Lo sai che ha aperto una nuova pizzeria?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Si, ma preferirei andare al cinema",
              status: "received",
            },
          ],
        },
        {
          name: "Alessandro L.",
          avatar: "./img/avatar_5.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ricordati di chiamare la nonna",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Va bene, stasera la sento",
              status: "received",
            },
          ],
        },
        {
          name: "Claudia",
          avatar: "./img/avatar_6.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ciao Claudia, hai novità?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Non ancora",
              status: "received",
            },
            {
              date: "10/01/2020 15:51:00",
              message: "Nessuna nuova, buona nuova",
              status: "sent",
            },
          ],
        },
        {
          name: "Federico",
          avatar: "./img/avatar_7.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Fai gli auguri a Martina che è il suo compleanno!",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Grazie per avermelo ricordato, le scrivo subito!",
              status: "received",
            },
          ],
        },
        {
          name: "Davide",
          avatar: "./img/avatar_8.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ciao, andiamo a mangiare la pizza stasera?",
              status: "received",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
              status: "sent",
            },
            {
              date: "10/01/2020 15:51:00",
              message: "OK!!",
              status: "received",
            },
          ],
        },
      ],
      activeContact: 0,
      placeHolderMessage: "Scrivi un messaggio",
      inputMessage: "",
      contactSearch: "",
      popup: {
        visible: false,
        index: -1,
      },
    };
  },
  methods: {
    active(index) {
      this.activeContact = index;
    },
    sendMessage() {
      const newMessage = {
        date: this.getNow(),
        message: this.inputMessage,
        status: "sent",
      };
      this.filteredContacts[this.activeContact].messages.push(newMessage);
      this.inputMessage = "";
      const userResponse = setTimeout(this.sendResponse, 1000);
    },
    sendResponse() {
      const newMessage = {
        date: this.getNow(),
        message: "Ok",
        status: "received",
      };
      this.filteredContacts[this.activeContact].messages.push(newMessage);
    },
    removeMessage(index) {
      this.filteredContacts[this.activeContact].messages.splice(index, 1);
    },
    openPopup(index) {
      this.popup.index = index;
      this.popup.visible = !this.popup.visible;
    },
    lastMessage(index) {
      if (this.filteredContacts[index].messages.length == 0) {
        return "Nessun messaggio";
      } else {
        return (
          this.filteredContacts[index].messages[
            this.filteredContacts[index].messages.length - 1
          ].message.substr(0, 20) + " ..."
        );
      }
    },
    getTime() {
      const today = new Date();
      const time = today.getHours() + ":" + today.getMinutes();
      const dateTime = time;
      return dateTime;
    },
    getNow() {
      const today = new Date();
      const date =
        this.checkDate +
        "/" +
        (today.getMonth() + 1) +
        "/" +
        today.getFullYear();

      const time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = date + " " + time;

      return dateTime;
    },
  },
  computed: {
    filteredContacts() {
      this.activeContact = 0;
      return this.contacts.filter((contact) => {
        return contact.name
          .toLowerCase()
          .includes(this.contactSearch.toLowerCase());
      });
    },
    checkDate() {
      if (today.getDate() < 10) {
        console.log(today.getDate());
        return "0" + today.getDate();
      }
    },
  },
}).mount("#app");
