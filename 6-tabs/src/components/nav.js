import { useEffect } from "react";

const Nav = ({ changeUser, user, value }) => {
  return (
    <section className="nav">
      <div className="btn_container">
        {user.map((users) => {
          const { user, id } = users;
          return (
            <button
              className={value == id - 1 ? "active" : ""}
              key={id}
              onClick={() => changeUser(id - 1)}
            >
              {user}
            </button>
          );
        })}
      </div>
    </section>
  );
};
export default Nav;
