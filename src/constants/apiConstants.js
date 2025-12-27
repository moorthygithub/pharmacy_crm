export const USERMANAGEMENT = {
  pageControl: "/panel-fetch-usercontrol-new",
  buttonControl: "/panel-fetch-usercontrol",
};
export const TEAM_API = {
  list: "/panel-fetch-team-list",
  create: "/panel-create-usercontrol-new",
  createbutton: "/panel-create-usercontrol",
  getById: (id) => `/panel-fetch-usercontrol/${id}`,
  updateButtonById: (id) => `/panel-update-usercontrol/${id}`,
  updatePageById: (id) => `/panel-update-usercontrol-new/${id}`,
  updateStatus: (id) => `/panel-update-team-status/${id}`,
};
export const LOGIN = {
  postLogin: "/panel-login",
};
export const PANEL_CHECK = {
  getPanelStatus: "/panel-check-status",
  getEnvStatus: "/panel-fetch-dotenv",
};
export const BUYER_LIST = {
  getlist: "/buyer",
  create: "/buyer",
  getById: (id) => `/buyer/${id}`,
  updateById: (id) => `/buyer/${id}`,
  getEnvStatus: "/panel-fetch-dotenv",
};
export const PORT = {
  getlist: "/activePort",
};
export const COUNTRY = {
  getlist: "/activeCountrys",
};
