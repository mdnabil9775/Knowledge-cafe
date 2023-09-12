
const Header = () => {
    return (
        <div>
            <div className="navbar bg-gray-300 my-9 rounded-xl ">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-4xl font-medium">Knowledge Cafe</a>
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </label>
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end mr-7">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-12 rounded-full ">
          <img  src="https://scontent.fdac8-1.fna.fbcdn.net/v/t39.30808-6/343443633_686851779876171_8668253599626113520_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=FnIvWLTQUGkAX8Qpyz0&_nc_ht=scontent.fdac8-1.fna&oh=00_AfAsH0c-vGZR6_y8470TjzNJm8733D1xxB-mwhJytoJ1Ew&oe=65057729" />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
        </div>
    );
};

export default Header;