


export const helpdata  = [
  {
    id: 1,
    title: "About This App",
    contents: [
      "• This is a chat-like app where you can type a question or message in the input box.",
      "• The app will display your messages in the chat area.",
      "• On the left sidebar, you can see a list of your recent questions/inputs."
    ]
  },
  {
    id: 2,
    title: "Features",
    contents: [
      " ✔ Send Messages – Type your question in the input field and press Enter or click the Send button.",
      " ✔ Sidebar History – Your recent inputs/questions are saved on the sidebar for quick access.",
      " ✔ Clear Chat – Start fresh anytime by using the New Chat button."
    ]
  },
  {
    id: 3,
    title: "Limitations",
    contents: [
      " ✖ The app does not store the full conversation (only your recent inputs are saved).",
      " ✖ Refreshing the page will reset your history ."
    ]
  },
  {
    id: 4,
    title: "Future Improvements",
    contents: [
      "• Save full conversations.",
      "• Connect to a backend (e.g.,MongoDb).",
      "• Dark mode toggle for better UI experience."
    ]
  }
];





export const fData = [
  {
    id: 1,
    question: "Bakit nawawala ang history ko pag refresh ng page?",
    answer: "Currently, the sidebar only stores data in memory. Once you refresh, it resets."
  },
  {
    id: 2,
    question: "Pwede ba itong sumagot tulad ng ChatGPT?",
    answer: "For now, this project is frontend only. But you can integrate an API later."
  },
  {
    id: 3,
    question: "Ano ang purpose ng sidebar?",
    answer: "To let you quickly revisit your recent questions/inputs."
  }
];
