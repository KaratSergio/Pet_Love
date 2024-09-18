import Title from '@components/Custom/Title';
import FriendsList from '@components/Friends/FriendsList';

const FriendsPage: React.FC = () => {
  return (
    <section className="m-auto max-w-desktop p-8 bg-orange-50">
      <Title mainTitleClassName="sm:text-[54px]" />
      <FriendsList />
    </section>
  );
};

export default FriendsPage;
