import React from "react";

import { getConfig } from "@edx/frontend-platform";
import { getLoginRedirectUrl } from "@edx/frontend-platform/auth";
import { injectIntl, intlShape } from "@edx/frontend-platform/i18n";
import { Button, useMediaQuery, breakpoints } from "@edx/paragon";
import genericMessages from "../generic/messages";
import EyeIcon from "../../assets/EyeIcon.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

import { Dropdown } from "@edx/paragon";

function AnonymousUserMenu({ intl }) {
  // const isExtraSmall = useMediaQuery({ maxWidth: breakpoints.extraSmall.maxWidth });
  return (
    <React.Fragment>
      <div className="header-desktop">
        <img className="eye-icon" src={EyeIcon} alt="eye-icon" />
        <a
          className="courses-link"
          href={`${getConfig().LMS_BASE_URL}/courses`}
        >
          {intl.formatMessage(genericMessages.Explore)}
        </a>
        <Button
          className="login-button"
          variant="primary"
          href={`${getLoginRedirectUrl(global.location.href)}`}
        >
          {intl.formatMessage(genericMessages.signInSentenceCase)}
        </Button>
        <Button
          className="mr-3 register-button"
          variant="outline-primary"
          href={`${getConfig().LMS_BASE_URL}/register?next=${encodeURIComponent(
            global.location.href
          )}`}
        >
          {intl.formatMessage(genericMessages.registerSentenceCase)}
        </Button>
      </div>
      <div className="header-mobile">
        <Dropdown className="user-dropdown">
          <Dropdown.Toggle variant="outline-primary">
            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
              <path
                d="M4.10255106,18.1351061 C4.7170266,16.0581859 8.01891846,14.4720277 12,14.4720277 C15.9810815,14.4720277 19.2829734,16.0581859 19.8974489,18.1351061 C21.215206,16.4412566 22,14.3122775 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,14.3122775 2.78479405,16.4412566 4.10255106,18.1351061 Z M12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 Z M12,13 C9.790861,13 8,11.209139 8,9 C8,6.790861 9.790861,5 12,5 C14.209139,5 16,6.790861 16,9 C16,11.209139 14.209139,13 12,13 Z"
                fill="currentColor"
              />
            </svg>
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdown-menu-right">
            <Dropdown.Item href={`${getConfig().LMS_BASE_URL}/courses`}>
              {intl.formatMessage(genericMessages.Explore)}
            </Dropdown.Item>

            <Dropdown.Item
              href={`${getLoginRedirectUrl(global.location.href)}`}
            >
              {intl.formatMessage(genericMessages.signInSentenceCase)}
            </Dropdown.Item>
            <Dropdown.Item
              href={`${
                getConfig().LMS_BASE_URL
              }/register?next=${encodeURIComponent(global.location.href)}`}
            >
              {intl.formatMessage(genericMessages.registerSentenceCase)}
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </React.Fragment>
  );
}

AnonymousUserMenu.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(AnonymousUserMenu);