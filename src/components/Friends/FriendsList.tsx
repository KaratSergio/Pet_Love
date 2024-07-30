import { useEffect } from 'react';
import { fetchFriends } from '@redux/friends/friends-thunk';
import { selectFriends } from '@redux/friends/friends-selectors';
import { useAppDispatch, useAppSelector } from '@hooks/redux-hooks';
import FriendsItem from './FriendsItem';

const FriendsList: React.FC = () => {
  const dispatch = useAppDispatch();
  const friends = useAppSelector(selectFriends);

  useEffect(() => {
    dispatch(fetchFriends());
  }, [dispatch]);

  return (
    <div className="friends-list grid gap-4">
      {friends.map((friend) => (
        <FriendsItem key={friend._id} friend={friend} />
      ))}
    </div>
  );
};

export default FriendsList;
