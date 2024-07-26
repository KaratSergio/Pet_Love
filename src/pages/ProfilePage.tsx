import UserCard from '@components/Profile/UserCard/UserCard';
import MyNotices from '@components/Profile/MyNotices';

const ProfilePage: React.FC = () => {
  return (
    <section className="mx-auto flex w-full max-w-desktop p-8 bg-orange-50">
      <UserCard />
      <MyNotices />
    </section>
  );
};

export default ProfilePage;
