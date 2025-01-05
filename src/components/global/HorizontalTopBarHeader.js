import { Link } from "react-router-dom";
import profilePic from "./../../assets/imgs/trans_badge.png";

function HorizontalTopBarHeader() {
  const simpleBarHeight = {
    maxHeight: 250,
  };

  return (
    <div>
      <header class="ishorizontal-topbar">
        <div class="navbar-header">
          <div class="d-flex">
            <div class="navbar-brand-box"></div>

            <button
              type="button"
              class="btn btn-sm px-3 font-size-16 d-lg-none header-item"
              data-bs-toggle="collapse"
              data-bs-target="#topnav-menu-content"
            >
              <i class="fa fa-fw fa-bars"></i>
            </button>

            <div class="d-none d-sm-block ms-2 align-self-center">
              <h4 class="page-title">Starter Page</h4>
            </div>
          </div>

          <div class="d-flex">
            <div class="dropdown">
              <button
                type="button"
                class="btn header-item"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="icon-sm" data-eva="search-outline"></i>
              </button>
              <div class="dropdown-menu dropdown-menu-end dropdown-menu-md p-0">
                <form class="p-2">
                  <div class="search-box">
                    <div class="position-relative">
                      <input
                        type="text"
                        class="form-control bg-light border-0"
                        placeholder="Search..."
                      />
                      <i
                        class="search-icon"
                        data-eva="search-outline"
                        data-eva-height="26"
                        data-eva-width="26"
                      ></i>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div class="dropdown d-none d-lg-inline-block">
              <button
                type="button"
                class="btn header-item noti-icon"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="icon-sm" data-eva="grid-outline"></i>
              </button>
              <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0">
                <div class="p-3">
                  <div class="row align-items-center">
                    <div class="col">
                      <h5 class="m-0 font-size-15"> Web Apps </h5>
                    </div>
                    <div class="col-auto">
                      <Link
                        href="#!"
                        class="small fw-semibold text-decoration-underline"
                      >
                        {" "}
                        View All
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="dropdown d-inline-block">
              <button
                type="button"
                class="btn header-item noti-icon"
                id="page-header-notifications-dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="icon-sm" data-eva="bell-outline"></i>
                <span class="noti-dot bg-danger rounded-pill">4</span>
              </button>
              <div
                class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                aria-labelledby="page-header-notifications-dropdown"
              >
                <div class="p-3">
                  <div class="row align-items-center">
                    <div class="col">
                      <h5 class="m-0 font-size-15"> Notifications </h5>
                    </div>
                    <div class="col-auto">
                      <Link
                        href="#!"
                        class="small fw-semibold text-decoration-underline"
                      >
                        {" "}
                        Mark all as read
                      </Link>
                    </div>
                  </div>
                </div>
                <div data-simplebar style={simpleBarHeight}>
                  <Link href="#!" class="text-reset notification-item">
                    <div class="d-flex">
                      <div class="flex-shrink-0 avatar-sm me-3">
                        <span class="avatar-title bg-primary rounded-circle font-size-16">
                          <i class="bx bx-cart"></i>
                        </span>
                      </div>
                      <div class="flex-grow-1">
                        <h6 class="mb-1">Your order is placed</h6>
                        <div class="font-size-13 text-muted">
                          <p class="mb-1">
                            If several languages coalesce the grammar
                          </p>
                          <p class="mb-0">
                            <i class="mdi mdi-clock-outline"></i>{" "}
                            <span>3 min ago</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link href="#!" class="text-reset notification-item">
                    <div class="d-flex">
                      <div class="flex-shrink-0 avatar-sm me-3">
                        <span class="avatar-title bg-success rounded-circle font-size-16">
                          <i class="bx bx-badge-check"></i>
                        </span>
                      </div>
                      <div class="flex-grow-1">
                        <h6 class="mb-1">Your item is shipped</h6>
                        <div class="font-size-13 text-muted">
                          <p class="mb-1">
                            If several languages coalesce the grammar
                          </p>
                          <p class="mb-0">
                            <i class="mdi mdi-clock-outline"></i>{" "}
                            <span>3 min ago</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div class="p-2 border-top d-grid">
                  <Link
                    class="btn btn-sm btn-link font-size-14 btn-block text-center"
                    href=""
                  >
                    <i class="uil-arrow-circle-right me-1"></i>{" "}
                    <span>View More..</span>
                  </Link>
                </div>
              </div>
            </div>

            <div class="dropdown d-inline-block">
              <button
                type="button"
                class="btn header-item noti-icon right-bar-toggle"
                id="right-bar-toggle"
              >
                <i class="icon-sm" data-eva="settings-outline"></i>
              </button>
            </div>

            <div class="dropdown d-inline-block">
              <button
                type="button"
                class="btn header-item user text-start d-flex align-items-center"
                id="page-header-user-dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  class="rounded-circle header-profile-user"
                  src={profilePic}
                  alt="Header Avatar"
                />
              </button>
              <div class="dropdown-menu dropdown-menu-end pt-0">
                <div class="p-3 border-bottom">
                  <h6 class="mb-0">Jennifer Bennett</h6>
                  <p class="mb-0 font-size-11 text-muted">
                    jennifer.bennett@email.com
                  </p>
                </div>
                <Link class="dropdown-item" href="contacts-profile.html">
                  <i class="mdi mdi-account-circle text-muted font-size-16 align-middle me-1"></i>{" "}
                  <span class="align-middle">Profile</span>
                </Link>
                <Link class="dropdown-item" href="apps-chat.html">
                  <i class="mdi mdi-message-text-outline text-muted font-size-16 align-middle me-1"></i>{" "}
                  <span class="align-middle">Messages</span>
                </Link>
                <Link class="dropdown-item" href="pages-faqs.html">
                  <i class="mdi mdi-lifebuoy text-muted font-size-16 align-middle me-1"></i>{" "}
                  <span class="align-middle">Help</span>
                </Link>
                <div class="dropdown-divider"></div>
                <Link class="dropdown-item" href="#">
                  <i class="mdi mdi-wallet text-muted font-size-16 align-middle me-1"></i>{" "}
                  <span class="align-middle">
                    Balance : <b>$6951.02</b>
                  </span>
                </Link>
                <Link class="dropdown-item d-flex align-items-center" href="#">
                  <i class="mdi mdi-cog-outline text-muted font-size-16 align-middle me-1"></i>{" "}
                  <span class="align-middle">Settings</span>
                  <span class="badge badge-soft-success ms-auto">New</span>
                </Link>
                <Link class="dropdown-item" href="auth-lock-screen.html">
                  <i class="mdi mdi-lock text-muted font-size-16 align-middle me-1"></i>{" "}
                  <span class="align-middle">Lock screen</span>
                </Link>
                <Link class="dropdown-item" href="auth-logout.html">
                  <i class="mdi mdi-logout text-muted font-size-16 align-middle me-1"></i>{" "}
                  <span class="align-middle">Logout</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="topnav">
          <div class="container-fluid">
            <nav class="navbar navbar-light navbar-expand-lg topnav-menu">
              <div class="collapse navbar-collapse" id="topnav-menu-content">
                <ul class="navbar-nav">
                  <li class="nav-item dropdown">
                    <Link
                      class="nav-link dropdown-toggle arrow-none"
                      href="#"
                      id="topnav-dashboard"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="icon nav-icon" data-eva="grid-outline"></i>
                      <span data-key="t-dashboards">Dashboards</span>
                      <div class="arrow-down"></div>
                    </Link>
                    <div
                      class="dropdown-menu"
                      aria-labelledby="topnav-dashboard"
                    >
                      <Link
                        href="index.html"
                        class="dropdown-item"
                        data-key="t-ecommerce"
                      >
                        Ecommerce
                      </Link>
                      <Link
                        href="dashboard-saas.html"
                        class="dropdown-item"
                        data-key="t-saas"
                      >
                        Saas
                      </Link>
                      <Link
                        href="dashboard-crypto.html"
                        class="dropdown-item"
                        data-key="t-crypto"
                      >
                        Crypto
                      </Link>
                    </div>
                  </li>

                  <li class="nav-item dropdown">
                    <Link
                      class="nav-link dropdown-toggle arrow-none"
                      href="#"
                      id="topnav-uielement"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="icon nav-icon" data-eva="cube-outline"></i>
                      <span data-key="t-elements">Elements</span>
                      <div class="arrow-down"></div>
                    </Link>

                    <div
                      class="dropdown-menu mega-dropdown-menu px-2 dropdown-mega-menu-xl"
                      aria-labelledby="topnav-uielement"
                    >
                      <div class="ps-2 p-lg-0">
                        <div class="row">
                          <div class="col-lg-12">
                            <div>
                              <div class="menu-title">Elements</div>
                              <div class="row g-0">
                                <div class="col-lg-4">
                                  <div>
                                    <Link
                                      href="ui-alerts.html"
                                      class="dropdown-item"
                                      data-key="t-alerts"
                                    >
                                      Alerts
                                    </Link>
                                    <Link
                                      href="ui-buttons.html"
                                      class="dropdown-item"
                                      data-key="t-buttons"
                                    >
                                      Buttons
                                    </Link>
                                    <Link
                                      href="ui-cards.html"
                                      class="dropdown-item"
                                      data-key="t-cards"
                                    >
                                      Cards
                                    </Link>
                                    <Link
                                      href="ui-carousel.html"
                                      class="dropdown-item"
                                      data-key="t-carousel"
                                    >
                                      Carousel
                                    </Link>
                                    <Link
                                      href="ui-dropdowns.html"
                                      class="dropdown-item"
                                      data-key="t-dropdowns"
                                    >
                                      Dropdowns
                                    </Link>
                                    <Link
                                      href="ui-grid.html"
                                      class="dropdown-item"
                                      data-key="t-grid"
                                    >
                                      Grid
                                    </Link>
                                    <Link
                                      href="ui-images.html"
                                      class="dropdown-item"
                                      data-key="t-images"
                                    >
                                      Images
                                    </Link>
                                  </div>
                                </div>
                                <div class="col-lg-4">
                                  <div>
                                    <Link
                                      href="ui-lightbox.html"
                                      class="dropdown-item"
                                      data-key="t-lightbox"
                                    >
                                      Lightbox
                                    </Link>
                                    <Link
                                      href="ui-modals.html"
                                      class="dropdown-item"
                                      data-key="t-modals"
                                    >
                                      Modals
                                    </Link>
                                    <Link
                                      href="ui-offcanvas.html"
                                      class="dropdown-item"
                                      data-key="t-offcanvas"
                                    >
                                      Offcanvas
                                    </Link>
                                    <Link
                                      href="ui-rangeslider.html"
                                      class="dropdown-item"
                                      data-key="t-range-slider"
                                    >
                                      Range Slider
                                    </Link>
                                    <Link
                                      href="ui-progressbars.html"
                                      class="dropdown-item"
                                      data-key="t-progress-bars"
                                    >
                                      Progress Bars
                                    </Link>
                                    <Link
                                      href="ui-sweet-alert.html"
                                      class="dropdown-item"
                                      data-key="t-sweet-alert"
                                    >
                                      Sweet-Alert
                                    </Link>
                                    <Link
                                      href="ui-tabs-accordions.html"
                                      class="dropdown-item"
                                      data-key="t-tabs-accordions"
                                    >
                                      Tabs & Accordions
                                    </Link>
                                  </div>
                                </div>
                                <div class="col-lg-4">
                                  <div>
                                    <Link
                                      href="ui-typography.html"
                                      class="dropdown-item"
                                      data-key="t-typography"
                                    >
                                      Typography
                                    </Link>
                                    <Link
                                      href="ui-video.html"
                                      class="dropdown-item"
                                      data-key="t-video"
                                    >
                                      Video
                                    </Link>
                                    <Link
                                      href="ui-general.html"
                                      class="dropdown-item"
                                      data-key="t-general"
                                    >
                                      General
                                    </Link>
                                    <Link
                                      href="ui-colors.html"
                                      class="dropdown-item"
                                      data-key="t-colors"
                                    >
                                      Colors
                                    </Link>
                                    <Link
                                      href="ui-rating.html"
                                      class="dropdown-item"
                                      data-key="t-rating"
                                    >
                                      Rating
                                    </Link>
                                    <Link
                                      href="ui-notifications.html"
                                      class="dropdown-item"
                                      data-key="t-notifications"
                                    >
                                      Notifications
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li class="nav-item dropdown">
                    <Link
                      class="nav-link dropdown-toggle arrow-none"
                      href="#"
                      id="topnav-pages"
                      role="button"
                    >
                      <i class="icon nav-icon" data-eva="archive-outline"></i>
                      <span data-key="t-apps">Apps</span>
                      <div class="arrow-down"></div>
                    </Link>
                    <div class="dropdown-menu" aria-labelledby="topnav-pages">
                      <Link
                        href="apps-calendar.html"
                        class="dropdown-item"
                        data-key="t-calendar"
                      >
                        Calendar
                      </Link>
                      <Link
                        href="apps-chat.html"
                        class="dropdown-item"
                        data-key="t-chat"
                      >
                        Chat
                      </Link>
                      <Link
                        href="apps-file-manager.html"
                        class="dropdown-item"
                        data-key="t-filemanager"
                      >
                        File Manager
                      </Link>

                      <div class="dropdown">
                        <Link
                          class="dropdown-item dropdown-toggle arrow-none"
                          href="#"
                          id="topnav-ecommerce"
                          role="button"
                        >
                          <span data-key="t-ecommerce">Ecommerce</span>
                          <div class="arrow-down"></div>
                        </Link>
                        <div
                          class="dropdown-menu"
                          aria-labelledby="topnav-ecommerce"
                        >
                          <Link
                            href="ecommerce-products.html"
                            class="dropdown-item"
                            data-key="t-products"
                          >
                            Products
                          </Link>
                          <Link
                            href="ecommerce-product-detail.html"
                            class="dropdown-item"
                            data-key="t-product-detail"
                          >
                            Product Detail
                          </Link>
                          <Link
                            href="ecommerce-orders.html"
                            class="dropdown-item"
                            data-key="t-orders"
                          >
                            Orders
                          </Link>
                          <Link
                            href="ecommerce-customers.html"
                            class="dropdown-item"
                            data-key="t-customers"
                          >
                            Customers
                          </Link>
                          <Link
                            href="ecommerce-cart.html"
                            class="dropdown-item"
                            data-key="t-cart"
                          >
                            Cart
                          </Link>
                          <Link
                            href="ecommerce-checkout.html"
                            class="dropdown-item"
                            data-key="t-checkout"
                          >
                            Checkout
                          </Link>
                          <Link
                            href="ecommerce-shops.html"
                            class="dropdown-item"
                            data-key="t-shops"
                          >
                            Shops
                          </Link>
                          <Link
                            href="ecommerce-add-product.html"
                            class="dropdown-item"
                            data-key="t-add-product"
                          >
                            Add Product
                          </Link>
                        </div>
                      </div>

                      <div class="dropdown">
                        <Link
                          class="dropdown-item dropdown-toggle arrow-none"
                          href="#"
                          id="topnav-email"
                          role="button"
                        >
                          <span data-key="t-email">Email</span>
                          <div class="arrow-down"></div>
                        </Link>
                        <div
                          class="dropdown-menu"
                          aria-labelledby="topnav-email"
                        >
                          <Link
                            href="email-inbox.html"
                            class="dropdown-item"
                            data-key="t-inbox"
                          >
                            Inbox
                          </Link>
                          <Link
                            href="email-read.html"
                            class="dropdown-item"
                            data-key="t-read-email"
                          >
                            Read Email
                          </Link>
                          <div class="dropdown">
                            <Link
                              class="dropdown-item dropdown-toggle arrow-none"
                              href="#"
                              id="topnav-email-templates"
                              role="button"
                            >
                              <span data-key="t-email-templates">
                                Templates
                              </span>
                              <div class="arrow-down"></div>
                            </Link>
                            <div
                              class="dropdown-menu"
                              aria-labelledby="topnav-email-templates"
                            >
                              <Link
                                href="email-template-basic.html"
                                class="dropdown-item"
                                data-key="t-basic-action"
                              >
                                Basic Action
                              </Link>
                              <Link
                                href="email-template-alert.html"
                                class="dropdown-item"
                                data-key="t-alert-email"
                              >
                                Alert Email
                              </Link>
                              <Link
                                href="email-template-billing.html"
                                class="dropdown-item"
                                data-key="t-bill-email"
                              >
                                Billing Email
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="dropdown">
                        <Link
                          class="dropdown-item dropdown-toggle arrow-none"
                          href="#"
                          id="topnav-invoices"
                          role="button"
                        >
                          <span data-key="t-invoices">Invoices</span>
                          <div class="arrow-down"></div>
                        </Link>
                        <div
                          class="dropdown-menu"
                          aria-labelledby="topnav-invoices"
                        >
                          <Link
                            href="invoices-list.html"
                            class="dropdown-item"
                            data-key="t-invoice-list"
                          >
                            Invoice List
                          </Link>
                          <Link
                            href="invoices-detail.html"
                            class="dropdown-item"
                            data-key="t-invoice-detail"
                          >
                            Invoice Detail
                          </Link>
                        </div>
                      </div>

                      <div class="dropdown">
                        <Link
                          class="dropdown-item dropdown-toggle arrow-none"
                          href="#"
                          id="topnav-projects"
                          role="button"
                        >
                          <span data-key="t-projects">Projects</span>
                          <div class="arrow-down"></div>
                        </Link>
                        <div
                          class="dropdown-menu"
                          aria-labelledby="topnav-projects"
                        >
                          <Link
                            href="projects-grid.html"
                            class="dropdown-item"
                            data-key="t-p-grid"
                          >
                            Projects Grid
                          </Link>
                          <Link
                            href="projects-list.html"
                            class="dropdown-item"
                            data-key="t-p-list"
                          >
                            Projects List
                          </Link>
                          <Link
                            href="projects-create.html"
                            class="dropdown-item"
                            data-key="t-create-new"
                          >
                            Create New
                          </Link>
                        </div>
                      </div>

                      <div class="dropdown">
                        <Link
                          class="dropdown-item dropdown-toggle arrow-none"
                          href="#"
                          id="topnav-contact"
                          role="button"
                        >
                          <span data-key="t-contacts">Contacts</span>
                          <div class="arrow-down"></div>
                        </Link>
                        <div
                          class="dropdown-menu"
                          aria-labelledby="topnav-contact"
                        >
                          <Link
                            href="contacts-grid.html"
                            class="dropdown-item"
                            data-key="t-user-grid"
                          >
                            User Grid
                          </Link>
                          <Link
                            href="contacts-list.html"
                            class="dropdown-item"
                            data-key="t-user-list"
                          >
                            User List
                          </Link>
                          <Link
                            href="contacts-profile.html"
                            class="dropdown-item"
                            data-key="t-user-profile"
                          >
                            Profile
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li class="nav-item dropdown">
                    <Link
                      class="nav-link dropdown-toggle arrow-none"
                      href="#"
                      id="topnav-components"
                      role="button"
                    >
                      <i class="icon nav-icon" data-eva="layers-outline"></i>
                      <span data-key="t-components">Components</span>
                      <div class="arrow-down"></div>
                    </Link>
                    <div
                      class="dropdown-menu"
                      aria-labelledby="topnav-components"
                    >
                      <div class="dropdown">
                        <Link
                          class="dropdown-item dropdown-toggle arrow-none"
                          href="#"
                          id="topnav-form"
                          role="button"
                        >
                          <span data-key="t-forms">Forms</span>
                          <div class="arrow-down"></div>
                        </Link>
                        <div
                          class="dropdown-menu"
                          aria-labelledby="topnav-form"
                        >
                          <Link
                            href="form-elements.html"
                            class="dropdown-item"
                            data-key="t-form-elements"
                          >
                            Form Elements
                          </Link>
                          <Link
                            href="form-layouts.html"
                            class="dropdown-item"
                            data-key="t-form-layouts"
                          >
                            Form Layouts
                          </Link>
                          <Link
                            href="form-validation.html"
                            class="dropdown-item"
                            data-key="t-form-validation"
                          >
                            Form Validation
                          </Link>
                          <Link
                            href="form-advanced.html"
                            class="dropdown-item"
                            data-key="t-form-advanced"
                          >
                            Form Advanced
                          </Link>
                          <Link
                            href="form-editors.html"
                            class="dropdown-item"
                            data-key="t-form-editors"
                          >
                            Form Editors
                          </Link>
                          <Link
                            href="form-uploads.html"
                            class="dropdown-item"
                            data-key="t-form-upload"
                          >
                            Form File Upload
                          </Link>
                          <Link
                            href="form-wizard.html"
                            class="dropdown-item"
                            data-key="t-form-wizard"
                          >
                            Form Wizard
                          </Link>
                          <Link
                            href="form-mask.html"
                            class="dropdown-item"
                            data-key="t-form-mask"
                          >
                            Form Mask
                          </Link>
                        </div>
                      </div>
                      <div class="dropdown">
                        <Link
                          class="dropdown-item dropdown-toggle arrow-none"
                          href="#"
                          id="topnav-table"
                          role="button"
                        >
                          <span data-key="t-tables">Tables</span>
                          <div class="arrow-down"></div>
                        </Link>
                        <div
                          class="dropdown-menu"
                          aria-labelledby="topnav-table"
                        >
                          <Link
                            href="tables-basic.html"
                            class="dropdown-item"
                            data-key="t-basic-tables"
                          >
                            Basic Tables
                          </Link>
                          <Link
                            href="tables-advanced.html"
                            class="dropdown-item"
                            data-key="t-advanced-tables"
                          >
                            Advance Tables
                          </Link>
                        </div>
                      </div>

                      <div class="dropdown">
                        <Link
                          class="dropdown-item dropdown-toggle arrow-none"
                          href="#"
                          id="topnav-charts"
                          role="button"
                        >
                          <span data-key="t-charts">Charts</span>
                          <div class="arrow-down"></div>
                        </Link>
                        <div
                          class="dropdown-menu"
                          aria-labelledby="topnav-charts"
                        >
                          <div class="dropdown">
                            <Link
                              class="dropdown-item dropdown-toggle arrow-none"
                              href="#"
                              id="topnav-apex-charts"
                              role="button"
                            >
                              <span data-key="t-apex-charts">Apex Charts</span>
                              <div class="arrow-down"></div>
                            </Link>
                            <div
                              class="dropdown-menu"
                              aria-labelledby="topnav-apex-charts"
                            >
                              <Link
                                href="charts-line.html"
                                class="dropdown-item"
                                data-key="t-line"
                              >
                                Line
                              </Link>
                              <Link
                                href="charts-area.html"
                                class="dropdown-item"
                                data-key="t-area"
                              >
                                Area
                              </Link>
                              <Link
                                href="charts-column.html"
                                class="dropdown-item"
                                data-key="t-column"
                              >
                                Column
                              </Link>
                              <Link
                                href="charts-bar.html"
                                class="dropdown-item"
                                data-key="t-bar"
                              >
                                Bar
                              </Link>
                              <Link
                                href="charts-mixed.html"
                                class="dropdown-item"
                                data-key="t-mixed"
                              >
                                Mixed
                              </Link>
                              <Link
                                href="charts-timeline.html"
                                class="dropdown-item"
                                data-key="t-timeline"
                              >
                                Timeline
                              </Link>
                              <Link
                                href="charts-candlestick.html"
                                class="dropdown-item"
                                data-key="t-candlestick"
                              >
                                Candlestick
                              </Link>
                              <Link
                                href="charts-boxplot.html"
                                class="dropdown-item"
                                data-key="t-boxplot"
                              >
                                Boxplot
                              </Link>
                              <Link
                                href="charts-bubble.html"
                                class="dropdown-item"
                                data-key="t-bubble"
                              >
                                Bubble
                              </Link>
                              <Link
                                href="charts-scatter.html"
                                class="dropdown-item"
                                data-key="t-scatter"
                              >
                                Scatter
                              </Link>
                              <Link
                                href="charts-heatmap.html"
                                class="dropdown-item"
                                data-key="t-heatmap"
                              >
                                Heatmap
                              </Link>
                              <Link
                                href="charts-treemap.html"
                                class="dropdown-item"
                                data-key="t-treemap"
                              >
                                Treemap
                              </Link>
                              <Link
                                href="charts-pie.html"
                                class="dropdown-item"
                                data-key="t-pie"
                              >
                                Pie
                              </Link>
                              <Link
                                href="charts-radialbar.html"
                                class="dropdown-item"
                                data-key="t-radialbar"
                              >
                                Radialbar
                              </Link>
                              <Link
                                href="charts-radar.html"
                                class="dropdown-item"
                                data-key="t-radar"
                              >
                                Radar
                              </Link>
                              <Link
                                href="charts-polararea.html"
                                class="dropdown-item"
                                data-key="t-polararea"
                              >
                                Polararea
                              </Link>
                            </div>
                          </div>
                          <Link
                            href="charts-echart.html"
                            class="dropdown-item"
                            data-key="t-e-charts"
                          >
                            E Charts
                          </Link>
                          <Link
                            href="charts-chartjs.html"
                            class="dropdown-item"
                            data-key="t-chartjs-charts"
                          >
                            Chartjs Charts
                          </Link>
                          <Link
                            href="charts-tui.html"
                            class="dropdown-item"
                            data-key="t-ui-charts"
                          >
                            Toast UI Charts
                          </Link>
                        </div>
                      </div>

                      <div class="dropdown">
                        <Link
                          class="dropdown-item dropdown-toggle arrow-none"
                          href="#"
                          id="topnav-icons"
                          role="button"
                        >
                          <span data-key="t-icons">Icons</span>
                          <div class="arrow-down"></div>
                        </Link>
                        <div
                          class="dropdown-menu"
                          aria-labelledby="topnav-icons"
                        >
                          <Link
                            href="icons-evaicons.html"
                            class="dropdown-item"
                            data-key="t-evaicons"
                          >
                            Eva Icons
                          </Link>
                          <Link
                            href="icons-boxicons.html"
                            class="dropdown-item"
                            data-key="t-boxicons"
                          >
                            Boxicons
                          </Link>
                          <Link
                            href="icons-materialdesign.html"
                            class="dropdown-item"
                            data-key="t-material-design"
                          >
                            Material Design
                          </Link>
                          <Link
                            href="icons-fontawesome.html"
                            class="dropdown-item"
                            data-key="t-font-awesome"
                          >
                            Font Awesome 5
                          </Link>
                        </div>
                      </div>
                      <div class="dropdown">
                        <Link
                          class="dropdown-item dropdown-toggle arrow-none"
                          href="#"
                          id="topnav-map"
                          role="button"
                        >
                          <span data-key="t-maps">Maps</span>
                          <div class="arrow-down"></div>
                        </Link>
                        <div class="dropdown-menu" aria-labelledby="topnav-map">
                          <Link
                            href="maps-google.html"
                            class="dropdown-item"
                            data-key="t-google"
                          >
                            Google
                          </Link>
                          <Link
                            href="maps-vector.html"
                            class="dropdown-item"
                            data-key="t-vector"
                          >
                            Vector
                          </Link>
                          <Link
                            href="maps-leaflet.html"
                            class="dropdown-item"
                            data-key="t-leaflet"
                          >
                            Leaflet
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li class="nav-item dropdown">
                    <Link
                      class="nav-link dropdown-toggle arrow-none"
                      href="#"
                      id="topnav-more"
                      role="button"
                    >
                      <i class="icon nav-icon" data-eva="file-text-outline"></i>
                      <span data-key="t-pages">Pages</span>
                      <div class="arrow-down"></div>
                    </Link>
                    <div class="dropdown-menu" aria-labelledby="topnav-more">
                      <div class="dropdown">
                        <Link
                          class="dropdown-item dropdown-toggle arrow-none"
                          href="#"
                          id="topnav-authentication"
                          role="button"
                        >
                          <span data-key="t-authentication">
                            Authentication
                          </span>
                          <div class="arrow-down"></div>
                        </Link>
                        <div
                          class="dropdown-menu"
                          aria-labelledby="topnav-authentication"
                        >
                          <Link
                            href="auth-login.html"
                            class="dropdown-item"
                            data-key="t-login"
                          >
                            Login
                          </Link>
                          <Link
                            href="auth-register.html"
                            class="dropdown-item"
                            data-key="t-register"
                          >
                            Register
                          </Link>
                          <Link
                            href="auth-recoverpw.html"
                            class="dropdown-item"
                            data-key="t-recover-password"
                          >
                            Recover Password
                          </Link>
                          <Link
                            href="auth-lock-screen.html"
                            class="dropdown-item"
                            data-key="t-lock-screen"
                          >
                            Lock Screen
                          </Link>
                          <Link
                            href="auth-logout.html"
                            class="dropdown-item"
                            data-key="t-logout"
                          >
                            Logout
                          </Link>
                          <Link
                            href="auth-confirm-mail.html"
                            class="dropdown-item"
                            data-key="t-confirm-mail"
                          >
                            Confirm Mail
                          </Link>
                          <Link
                            href="auth-email-verification.html"
                            class="dropdown-item"
                            data-key="t-email-verification"
                          >
                            Email Verification
                          </Link>
                          <Link
                            href="auth-two-step-verification.html"
                            class="dropdown-item"
                            data-key="t-two-step-verification"
                          >
                            Two Step Verification
                          </Link>
                        </div>
                      </div>

                      <Link
                        href="layouts-horizontal.html"
                        class="dropdown-item"
                        data-key="t-horizontal"
                      >
                        Horizontal
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}

export default HorizontalTopBarHeader;
