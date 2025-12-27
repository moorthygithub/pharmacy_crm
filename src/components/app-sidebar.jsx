import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";

import {
  AudioWaveform,
  BookOpen,
  Building2,
  Command,
  Frame,
  GalleryVerticalEnd,
  Globe,
  HelpCircle,
  Image,
  LayoutGrid,
  Mail,
  Settings,
  Users,
  Youtube,
} from "lucide-react";

const NAVIGATION_CONFIG = [
  {
    title: "Dashboard",
    url: "/home",
    icon: Frame,
  },
  {
    title: "Buyer",
    url: "/buyer",
    icon: Frame,
  },
  {
    title: "User Management",
    url: "/userManagement",
    icon: Frame,
  },
  {
    title: "UserType",
    url: "/user-type",
    icon: Frame,
  },
];

/* =========================
   API PERMISSION CHECK
========================= */

const isAllowedByAPI = (item, pagePermissions, userId) => {
  if (!item?.url) return false;

  const cleanUrl = item.url.replace(/^\//, "");
  return pagePermissions.some(
    (permission) =>
      permission.page == item.title &&
      permission.url == cleanUrl &&
      permission.userIds?.includes(String(userId)) &&
      permission.status == "Active"
  );
};

const filterSidebarByAPI = (items, pagePermissions, userId) => {
  return items.filter((item) => isAllowedByAPI(item, pagePermissions, userId));
};

/* =========================
   TEAMS
========================= */

const TEAMS_CONFIG = [
  {
    name: "AIA",
    logo: GalleryVerticalEnd,
    plan: "",
  },
  {
    name: "Acme Corp.",
    logo: AudioWaveform,
    plan: "Startup",
  },
  {
    name: "Evil Corp.",
    logo: Command,
    plan: "Free",
  },
];

export function AppSidebar({ ...props }) {
  const [openItem, setOpenItem] = useState(null);
  const userId = useSelector((state) => state.auth.user.id);
  const user = useSelector((state) => state.auth.user);
  const { pagePermissions, loading } = useSelector(
    (state) => state.permissions
  );
  const filteredNavMain = useMemo(() => {
    return filterSidebarByAPI(NAVIGATION_CONFIG, pagePermissions, userId);
  }, [pagePermissions, userId]);

  const sidebarData = {
    user: {
      name: user?.name || "User",
      email: user?.email || "user@example.com",
      avatar: "/avatars/shadcn.jpg",
    },
    teams: TEAMS_CONFIG,
    navMain: filteredNavMain,
  };

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={sidebarData.teams} />
      </SidebarHeader>

      <SidebarContent className="sidebar-content">
        <NavMain
          items={sidebarData.navMain}
          openItem={openItem}
          setOpenItem={setOpenItem}
        />
      </SidebarContent>

      <SidebarFooter>
        <NavUser user={sidebarData.user} />
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
