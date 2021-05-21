import SideMenuLinkSeasons from "./side-menu-links/SideMenuLinkSeasons";
import SideMenuLinkEpisodes from "./side-menu-links/SideMenuLinkEpisodes";

function SideMenu() {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="/"
      >
        <div className="sidebar-brand-icon">
          <i className="fas fa-chart-line"></i>
        </div>
        <div className="sidebar-brand-text mx-3">Título de la Serie</div>
      </a>

      <hr className="sidebar-divider my-0" />

      <SideMenuLinkSeasons />

      <hr className="sidebar-divider" />

      <div className="sidebar-heading">
        <li className="nav-item active">
          <a className="nav-link" href="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Lista de Episodios</span>
          </a>
        </li>
      </div>

      <SideMenuLinkEpisodes />

      <SideMenuLinkEpisodes />

      <SideMenuLinkEpisodes />

      <hr className="sidebar-divider d-none d-md-block" />
    </ul>
  );
}

export default SideMenu;
