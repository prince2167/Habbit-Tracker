const Navbar = () => {
  return (
    <nav className=" flex justify-between items-center shadow shadow-white-500/40 py-1 px-8 sticky top-0 z-2 bg-white">
      <div className="flex items-center gap-4">
        <img
          src="https://is2-ssl.mzstatic.com/image/thumb/Purple115/v4/57/ef/25/57ef25ac-876f-3639-62e6-236ff3cc617a/source/256x256bb.jpg"
          alt="logo"
          className="w-12 h-12 border rounded-md"
        />

        <span className="font-bold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-logoBlue  to-logoPurple ">
          Habbit Tracker
        </span>
      </div>

      <div className="">
        {true ? (
          <img
            src="https://cdn-icons-png.flaticon.com/128/7645/7645197.png"
            alt="dark mode"
            className="w-10 h-10 rounded-full cursor-pointer"
          />
        ) : (
          <img
            src="https://media.istockphoto.com/id/1369151900/vector/sun-symbol-icon.jpg?s=612x612&w=0&k=20&c=gZpCjSejt-vAFIiNDx-8ixgVgNT8KX492LxyTxvoLf4="
            alt="light mode"
            className="w-10 h-10  rounded-full cursor-pointer"
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
