
import './App.css';
import { Profile } from "./components/Profile/Profile";
import { Statistics } from './components/Statistics/Statistics';
import { Section } from "./components/Section/Section";
import { FriendList } from "./components/FriendList/FriendList";
import { TransactionHistory } from "./components/TransactionHistory/TransactionHistory";
import friends from "./friends.json";
import  transactions  from "./transactions.json";
import user from "./user.json";
import data from "./data.json";

function App() {
  return (
    <>
      <Profile user={user} />

      <Section title="Upload stats">
        <Statistics data={data} />
      </Section>

      <FriendList friend={friends} />

      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
