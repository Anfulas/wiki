import { Fade, Notification, Search, Switcher as SwitcherIcon, IbmCloudEventStreams, IbmMq, LogoOpenshift, PlanePrivate } from '@carbon/icons-react';
import {
  Header, HeaderContainer,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderMenu,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderName,
  HeaderNavigation,
  HeaderSideNavItems,
  SideNav,
  SideNavItems,
  SideNavLink, SideNavMenu, SideNavMenuItem,
  SkipToContent
} from "@carbon/react";
import { AppLink } from './AppLink';

export const SideNavRailWHeader = (args: any) => <HeaderContainer render={({
  isSideNavExpanded,
  onClickSideNavExpand
}) => <>
    <Header aria-label="MY WIKI">
      <SkipToContent />
      <HeaderMenuButton aria-label={isSideNavExpanded ? 'Close menu' : 'Open menu'} onClick={onClickSideNavExpand} isActive={isSideNavExpanded} aria-expanded={isSideNavExpanded} />
      <HeaderName href="#" prefix="MY WIKI">
      </HeaderName>
      <HeaderNavigation aria-label="MY WIKI">
        <HeaderMenuItem href="#">Link 1</HeaderMenuItem>
        <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
        <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
        <HeaderMenu aria-label="Link 4" menuLinkName="Link 4">
          <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
          <HeaderMenuItem href="#">Sub-link 2</HeaderMenuItem>
          <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
        </HeaderMenu>
      </HeaderNavigation>
      <HeaderGlobalBar>
        <HeaderGlobalAction aria-label="Search" onClick={action('search click')}>
          <Search size={20} />
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label="Notifications" onClick={action('notification click')}>
          <Notification size={20} />
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label="App Switcher" onClick={action('app-switcher click')} tooltipAlignment="end">
          <SwitcherIcon size={20} />
        </HeaderGlobalAction>
      </HeaderGlobalBar>
      <SideNav aria-label="Side navigation" expanded={isSideNavExpanded} onOverlayClick={onClickSideNavExpand} href="#main-content" onSideNavBlur={onClickSideNavExpand} isRail {...args}>
        <SideNavItems>
          {isSideNavExpanded && <HeaderSideNavItems hasDivider={true}>
            <HeaderMenuItem href="#">Link 1</HeaderMenuItem>
            <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
            <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
            <HeaderMenu aria-label="Link 4" menuLinkName="Link 4">
              <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
              <HeaderMenuItem href="#">Sub-link 2</HeaderMenuItem>
              <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
            </HeaderMenu>
          </HeaderSideNavItems>}
          {/* <SideNavMenu renderIcon={Fade} title="Backup Catlog">
            <SideNavMenuItem {...{ href: "/" }} >
              Link
            </SideNavMenuItem>
            <SideNavMenuItem {...{ href: "/" }}>
              Link
            </SideNavMenuItem>
            <SideNavMenuItem {...{ href: "/" }}>
              Link
            </SideNavMenuItem>
          </SideNavMenu> */}

          <SideNavMenu renderIcon={PlanePrivate} title="RX related">
            <SideNavMenuItem {...{ href: "/rx" }} >
              RX Environment
            </SideNavMenuItem>

          </SideNavMenu>

          <SideNavMenu renderIcon={LogoOpenshift} title="OpenShift">
            <SideNavLink as={AppLink} renderIcon={LogoOpenshift} {...{ href: "/openshift" }}>
              OC Environment
            </SideNavLink>
            <SideNavLink as={AppLink} renderIcon={LogoOpenshift} {...{ href: "/openshiftcommand" }}>
              OC Command
            </SideNavLink>
            <SideNavLink as={AppLink} renderIcon={LogoOpenshift} {...{ href: "/openshiftmongo" }}>
              OC Mongo Installation
            </SideNavLink>
            <SideNavLink as={AppLink} renderIcon={LogoOpenshift} {...{ href: "/appcconnctor" }}>
              CP4I Appc Connector
            </SideNavLink>
          </SideNavMenu>

          <SideNavLink as={AppLink} renderIcon={IbmMq} {...{ href: "/mq" }}>
            MQ
          </SideNavLink>
          <SideNavLink as={AppLink} renderIcon={IbmCloudEventStreams} {...{ href: "/eventstream" }}>
            EventSteam
          </SideNavLink>
        </SideNavItems>
      </SideNav>
    </Header>
  </>} />;

function action(arg0: string) {
  console.log(arg0);
}
