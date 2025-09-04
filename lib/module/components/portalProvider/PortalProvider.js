"use strict";

import { memo, useReducer } from 'react';
import { PortalHost } from "../portalHost/PortalHost.js";
import { PortalDispatchContext, PortalStateContext } from "../../contexts/portal.js";
import { INITIAL_STATE } from "../../state/constants.js";
import { reducer } from "../../state/reducer.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const PortalProviderComponent = ({
  rootHostName = 'root',
  shouldAddRootHost = true,
  children
}) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return /*#__PURE__*/_jsx(PortalDispatchContext.Provider, {
    value: dispatch,
    children: /*#__PURE__*/_jsxs(PortalStateContext.Provider, {
      value: state,
      children: [children, shouldAddRootHost && /*#__PURE__*/_jsx(PortalHost, {
        name: rootHostName
      })]
    })
  });
};
export const PortalProvider = /*#__PURE__*/memo(PortalProviderComponent);
PortalProvider.displayName = 'PortalProvider';
//# sourceMappingURL=PortalProvider.js.map