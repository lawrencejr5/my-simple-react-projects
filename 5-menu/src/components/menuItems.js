const MenuItems = ({ mapItems }) => {
  return (
    <div className="menu-items">
      {mapItems.map((item) => {
        const {
          id,
          wallpaperName: name,
          wallpaperImg: img,
          category,
          wallpaperDesc: desc,
        } = item;
        return (
          <div className="menu-item" key={id}>
            <img
              src={img}
              width="250px"
              height="auto"
              alt=""
              className="wallpaper-img"
            />
            <h4 className="wallpaper-name">
              {name} <button className="category">{category}</button>
            </h4>
            <span className="wallpaper-description">{desc} </span>
          </div>
        );
      })}
    </div>
  );
};
export default MenuItems;
