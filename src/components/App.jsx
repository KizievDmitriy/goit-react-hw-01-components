import user from './Profile/user.json';
import { Profile } from './Profile/profile';
import data from './Statistics/data.json';
import { Statistics } from './Statistics/statistics';
import friends from './FriendList/friends.json';
import { FriendList } from './FriendList/FriendList';


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101'
        
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
    </div>
  );
};
