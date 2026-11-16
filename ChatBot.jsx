import {useState} from "react";
function ChatBot() {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

    const getAnswer = () => {
      if (question.toLowerCase().includes("menu")) {
        setAnswer("You can view our menu by clicking on the 'Menu' link in the navigation bar.");
      } else if (question.toLowerCase().includes("reservation")) {
        setAnswer("You can make a reservation by clicking on the 'Reservations' link in the navigation bar.");
      } else if (question.toLowerCase().includes("admin")) {
        setAnswer("The admin page is for restaurant management. You can manage reservations, menu items, and orders there.");
      } else if (question.toLowerCase().includes("order")) {
        setAnswer("You can place an order by selecting items from the menu and proceeding to checkout.");
      } else if (question.toLowerCase().includes("status")) {
        setAnswer("You can check the status of your order or reservation in the respective sections of the website.");
      } else if (question.toLowerCase().includes("hours")) {
        setAnswer("Our restaurant is open from 10:00 AM to 10:00 PM every day.");
      } else if (question.toLowerCase().includes("delivery")) {
        setAnswer("We offer delivery services for your convenience. You can place a delivery order through our website or mobile app.");
      } else{
        setAnswer("I'm sorry, I don't have an answer for that question. Please try asking about the menu, reservations, or admin.");
      } 
    };

    return (
        <div>
            <h2>Chat Bot</h2>
            <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Ask me anything..."
            />
            <button onClick={getAnswer}>Ask</button>
            <p>{answer}</p>
        </div>
    );
}
export default ChatBot;