const Header = () => {
  return (
    <header
    className="fixed top-0 left-0 right-0 bg-gray-100 mx-auto flex items-center justify-between z-10 rounded-none h-[65px] px-[15px] w-[100%] max-w-[375px]"
    >
      {/* Avatar */}
      <a href="/profile">
        <img
          src="/image/homescreen/avata.svg"
          alt="Avatar"
          className=" rounded-full"
        />
      </a>

      {/* Nhóm icon tìm kiếm & chuông */}
      <div className="flex items-center">
        {/* Icon tìm kiếm */}
        <div>
          <a href="/search">
            <img
              src="/image/homescreen/search.svg"
              alt="Search"
              className=""
            />
          </a>
        </div>

        {/* Khoảng cách 8px */}
        <div className="w-[8px]"></div>

        {/* Icon chuông */}
        <div >
          <a href="/notifications">
            <img
              src="/image/homescreen/bell.svg"
              alt="Notifications"
              className=""
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
