import { useEffect, useState } from "react";
import { UserItem } from "../../Components/User/UserItem";
import { fetchUsers, putUser } from "../../Services/fetchData";
import { Loader } from "../../Components/Loader/Loader";
import css from './Tweets.module.css'

export default function Tweets() {
  const [users, setUsers] = useState([]);
  const [visibleUsers, setVisibleUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showLoadMore, setShowLoadMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const usersPerPage = 3;

  useEffect(() => {
    const fetchAllUsers = async () => {
      setIsLoading(true);
      const allUsers = await fetchUsers();
      setIsLoading(false);
      setUsers(allUsers);
      setVisibleUsers(allUsers.slice(0, usersPerPage));
      setShowLoadMore(allUsers.length > usersPerPage);
    };

    fetchAllUsers();
  }, []);

  const loadMoreUsers = () => {
    const nextPage = currentPage + 1;
    const endIndex = nextPage * usersPerPage;
    const newVisibleUsers = users.slice(0, endIndex);
    setVisibleUsers(newVisibleUsers);
    setCurrentPage(nextPage);
    setShowLoadMore(newVisibleUsers.length < users.length);
  };

  const onFollow = async (id) => {
    const userIndex = users.findIndex((user) => user.id === id);
    if (userIndex !== -1) {
      const updatedUsers = [...users];
      const user = updatedUsers[userIndex];
      if (user.follow) {
        user.follow = false;
        user.followers -= 1;
      } else {
        user.follow = true;
        user.followers += 1;
      }
      await putUser(id, user);
      setUsers(updatedUsers);
    }
  };

  return (
    <div>
      <ul className={css.list}>
        {visibleUsers.map((user) => (
          <UserItem
            key={user.id}
            user={user}
            onFollow={onFollow}
            visibleUsers={visibleUsers}
            setVisibleUsers={setVisibleUsers}
          />
        ))}
      </ul>
      {isLoading ? (
        <Loader />
      ) : (
        showLoadMore && (
          <button type="button" onClick={loadMoreUsers}>
            Load More
          </button>
        )
      )}
    </div>
  );
}
